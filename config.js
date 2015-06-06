var config = {};

config.couchdb = {};
config.twilio = {};

config.couchdb.url = 'https://gojiberry.iriscouch.com';
config.couchdb.port = 443;
config.couchdb.username = 'gojiadmin';
config.couchdb.password = 'Aly$0n_couch';

config.twilio.sid = 'ACa60f088ce8398d16e94759eb27b5d2cf';
config.twilio.key = '2e3de2ae2e982111429332d4d6c01fd3';
config.twilio.smsWebhook = 'https://nodeserver/vote/sms';
config.twilio.voiceWebhook = 'https://nodeserver/vote/voice';
config.disableTwilioSigCheck = false;

module.exports = config;

