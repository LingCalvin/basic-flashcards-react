import { AxiosInstance } from 'axios';
import apiClient from '../../common/constants/api-client';
import { LogInResponse } from '../interfaces/log-in-response';

export class AuthService {
  constructor(private http: AxiosInstance) {}

  async logIn(idToken: string) {
    const {
      data: { decodedAccessToken },
    } = await this.http.post<LogInResponse>('/auth/access-tokens', {
      idToken,
    });
    localStorage.setItem(
      'accessTokenPayload',
      JSON.stringify(decodedAccessToken)
    );
    return decodedAccessToken;
  }

  async verifyAccessToken(): Promise<boolean> {
    try {
      await this.http.get('/auth/token-info');
      return true;
    } catch {
      return false;
    }
  }
}

export const authService = new AuthService(apiClient);
