const discord = require('discord.js');
module.exports = class {
    /**
     * 
     * @param {String} Auth_Token 
     * @param {discord.Client} Client 
     */
    constructor(Auth_Token, Client) {
        if(!Auth_Token) {
            throw new Error('SBL API: Auth_Token is required');
        }
        if(!Client) {
            throw new Error('SBL API: Client is required');
        }
        this.fetch = require('node-fetch');
        this.Auth_Token = Auth_Token;
        this.client = Client;
    }

    init() {
        return new Promise((resolve, reject) => {
            this.fetch(`https://shieldbotlist.website/api/auth/stats/${this.client.user.id}`, {
                method: 'POST',
                headers: {
                    'authorization': this.Auth_Token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "server_count": this.client.guilds.cache.size
                })
            }).then(res => res.text()).then(e => resolve(e)).catch(e => reject(e));
        })
    
    }
}