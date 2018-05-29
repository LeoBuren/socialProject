import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import moment from 'moment';
import { ServiceConfiguration } from "meteor/service-configuration";
import './../imports/api/users';
import './../imports/startup/simple-schema-configuration.js';

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

    Meteor.publish("userData", function () {
        return Meteor.users.find({_id: this.userId});
        this.ready();
    });
});
