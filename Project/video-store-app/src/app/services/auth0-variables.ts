interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'xUvMomkt2EddfOWOiApaMChiQ7izy51x',
  domain: 'ncoder.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
