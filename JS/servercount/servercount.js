module.exports = {
  /**
   * 
   * @param {Object} options
   * @param {any} options.client 
   * @param {String} options.authorization
   *  
   */
  DBLAPI: function(options) {
    const fetch = require("node-fetch")
    const discord = require('discord.js')
    if(!options.client) return new Error('You did not pass in your discord Client!');
    if(!options.authorization) return new Error('You did not pass in your bot authorization!');
    var requestOptions = {
      method: 'POST',
      headers: {
        'authorization': options.authorization, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"server_count": client.guilds.cache.size}) 
    };
    
    fetch(`https://shieldbotlist.tk/api/auth/stats/${client.user.id}/`, requestOptions) 
      .then(response => response.text())
      .then(console.log)
      .catch(console.error);
    }
}
