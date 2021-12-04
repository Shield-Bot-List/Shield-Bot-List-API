const Discord = require('discord.js');

class likeAPI {
    /**
     * @param {Discord.Client} client
     * @param {String} auth_token 
     */
    constructor(auth_token, client) {
        this.fetch = require('node-fetch');
        if(!auth_token) {
            throw new Error('SBL API: Auth token is required');
        }
        if(!client) {
            throw new Error('SBL API: Client is required');
        };
        this.auth_token = auth_token;
        this.client = client; 
    }
    /**
     * @returns {Promise}
     * @param {String} auth_token 
     */
    async init () {
        return new Promise((resolve, reject) => {
            this.fetch(`https://shieldbotlist.website/api/auth/liked/${this.client.user.id}`, {
                method: 'GET',
                headers: 
                    {
                        'authorization': `${this.auth_token}`,
                        'Content-Type': 'application/json',
                    }
            }).then(response => response.text()).then(e=>resolve(e)).catch(err => {
                reject(err);
            })
        })
    }
}
module.exports = likeAPI;