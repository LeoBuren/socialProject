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
    Accounts.loginServiceConfiguration.insert({
        service: "twitter",
        consumerKey: "sRfXQ2ujEsNULgqrqsIGsDpuh",
        secret: "k77pDKVFgiyRFLUOdROMnoEDcFyWuw2I2e3GeEHhgckauO8l4D"
    });
});
