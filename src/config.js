const config = {};

config.oAuthClientID = '837902925199-bpuscu062a8vb5hia5mi5v29ui9lb544.apps.googleusercontent.com';
config.oAuthclientSecret = '5GgdMRdRPxgFTeDc1wohsJzX';
config.oAuthCallbackUrl = 'http://127.0.0.1:8080/auth/google/callback';
config.port = 8080;
config.scopes = ['https://www.googleapis.com/auth/photoslibrary.readonly','profile',];

config.photosToLoad = 150;
config.searchPageSize = 100;
config.albumPageSize = 50;
config.apiEndpoint = 'https://photoslibrary.googleapis.com';

module.exports = config;