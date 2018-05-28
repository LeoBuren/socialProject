import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import moment from 'moment';
import { ServiceConfiguration } from "meteor/service-configuration";
import './../imports/api/users';
import './../imports/startup/simple-schema-configuration.js';
// Callback is used to do something after method is called.
Meteor.startup(() => {
    Accounts.loginServiceConfiguration.remove({
        service: "twitter"
    });
    Accounts.loginServiceConfiguration.remove({
        service: "facebook"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "facebook",
        appId: "169382480404565",
        secret: "13ef9a3e8f9589cdcb68d0d928a7fa94"
    });
    Accounts.loginServiceConfiguration.insert({
        service: "twitter",
        consumerKey: "sRfXQ2ujEsNULgqrqsIGsDpuh",
        secret: "k77pDKVFgiyRFLUOdROMnoEDcFyWuw2I2e3GeEHhgckauO8l4D"
    });

    /*
    Meteor.publish("currentAccessToken", function(){
        return Meteor.users.find(this.userId, {fields: {'services.twitter.accessToken': 1}});
    });
    */
});
