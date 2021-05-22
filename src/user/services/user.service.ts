import { AxiosInstance } from 'axios';
import apiClient from '../../common/constants/api-client';
import localStorageService from '../../common/services/local-storage.service';
import CreateParams from '../interfaces/create-params';
import User from '../interfaces/user';

export class UserService {
  constructor(private http: AxiosInstance) {}
  create(params: CreateParams) {
    return this.http.post('/users', params);
  }

  getCurrentUser(): User | null {
    const raw = localStorageService.getItem('user');
    if (!raw) {
      return null;
    }
    return JSON.parse(raw);
  }
}

const userService = new UserService(apiClient);
export default userService;
