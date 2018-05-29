import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { HTTP } from 'meteor/http';
import moment from 'moment';
import { ServiceConfiguration } from "meteor/service-configuration";
import './../imports/startup/simple-schema-configuration.js';
import { Twit } from 'twit';
import { Tweets } from '../imports/api/tweets';


Meteor.startup(() => {

    ServiceConfiguration.configurations.upsert(
        { service: 'facebook' },
        { $set: { 
            appId: Meteor.settings.facebook.appId, 
            secret: Meteor.settings.facebook.secret
        } }
    );

    ServiceConfiguration.configurations.upsert(
        { service: 'twitter' },
        { $set: { 
            consumerKey: Meteor.settings.twitter.consumerKey, 
            secret: Meteor.settings.twitter.secret
        } }
    );


    Meteor.methods({
        'testFunc': function(accessToken, accessTokenSecret, tweetCollection) {
            TwitMaker = Npm.require('twit');

            const T = new TwitMaker({
            consumer_key:         Meteor.settings.twitter.consumerKey, // API key
            consumer_secret:      Meteor.settings.twitter.secret, // API secret
            access_token:         accessToken, 
            access_token_secret:  accessTokenSecret
            });

            T.get('search/tweets', { q: 'banana since:2011-07-11', count: 1 }, function(err, data, response) {
                Tweets.rawCollection().insert({data: data});
            });
        }
    })

    Meteor.publish("Tweets", function() {
        return Tweets.find();
        this.ready();
    })

    Meteor.publish("userData", function () {
        return Meteor.users.find({_id: this.userId});
        this.ready();
    });
});
