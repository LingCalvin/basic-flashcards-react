import { AxiosInstance } from 'axios';
import apiClient from '../../common/constants/api-client';
import { LogInResponse } from '../interfaces/log-in-response';

export class AuthService {
  constructor(private http: AxiosInstance) {}

  async logIn(idToken: string) {
    const {
      data: { accessToken, decodedAccessToken },
    } = await this.http.post<LogInResponse>('/auth/access-tokens', {
      idToken,
    });
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem(
      'accessTokenPayload',
      JSON.stringify(decodedAccessToken)
    );
    return decodedAccessToken;
  }

  async logOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('accessTokenPayload');
    // TODO: Revoke token from server
  }

  async verifyAccessToken(token: string): Promise<boolean> {
    try {
      await this.http.get(`/auth/access-tokens/${token}`);
      return true;
    } catch {
      return false;
    }
  }

  getCurrentUser(): string | null {
    const accessTokenPayload = localStorage.getItem('accessTokenPayload');
    if (!accessTokenPayload) {
      return null;
    }
    return JSON.parse(accessTokenPayload).sub;
  }
}

export const authService = new AuthService(apiClient);
