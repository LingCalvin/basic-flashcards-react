import { AxiosInstance } from 'axios';
import apiClient from '../../common/constants/api-client';
import localStorageService from '../../common/services/local-storage.service';
import { LogInResponse } from '../interfaces/log-in-response';

export class AuthService {
  constructor(private http: AxiosInstance) {}

  async logIn(username: string, password: string) {
    const {
      data: { accessToken, decodedAccessToken },
    } = await this.http.post<LogInResponse>('/auth/access-tokens', {
      username,
      password,
    });
    localStorageService.setItem('accessToken', accessToken);
    localStorageService.setItem(
      'accessTokenPayload',
      JSON.stringify(decodedAccessToken)
    );
    localStorageService.setItem(
      'user',
      JSON.stringify({ id: decodedAccessToken.sub, username })
    );
    return decodedAccessToken;
  }

  async logOut() {
    localStorageService.removeItem('accessToken');
    localStorageService.removeItem('accessTokenPayload');
    localStorageService.removeItem('user');
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

  isAuthenticated(): boolean {
    return localStorageService.getItem('accessToken') !== null;
  }

  getCurrentUser(): string | null {
    const accessTokenPayload =
      localStorageService.getItem('accessTokenPayload');
    if (!accessTokenPayload) {
      return null;
    }
    return JSON.parse(accessTokenPayload).sub;
  }

  async changePassword(currentPassword: string, newPassword: string) {
    await this.http.put(`/users/${this.getCurrentUser()}/password`, {
      currentPassword,
      newPassword,
    });
    await this.logOut();
  }
}

export const authService = new AuthService(apiClient);
