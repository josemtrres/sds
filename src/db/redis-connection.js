const express = require('express');
const redis = require('redis');

const client = redis.createClient();

client.on('connect', function(){
    console.log('connected to Redis . . .');
});

const localdatabase = {
    dissconnect: function(){
        client.quit();
    },
    get: function(key){
        client.get(key, (err, value)=>{
            return(value);
        })
    },
    set: function(key, value){
        client.set(key, value);
    }
}

localdatabase.set('token', 2);
//console.log(localdatabase.get('token'));

module.exports = localdatabase;