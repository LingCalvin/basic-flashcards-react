export interface LogInResponse {
  accessToken: string;
  decodedAccessToken: {
    exp: number;
    iat: number;
    iss: string;
    jti: string;
    sub: string;
  };
}
