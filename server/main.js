import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import moment from 'moment';
import { ServiceConfiguration } from "meteor/service-configuration";
import './../imports/api/users';
import './../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
    Meteor.publish("userData", function () {
        return Meteor.users.find({_id: this.userId});
        this.ready();
    });
});
