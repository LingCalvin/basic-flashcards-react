import { AxiosInstance } from 'axios';
import apiClient from '../../common/constants/api-client';
import CreateParams from '../interfaces/create-params';

export class UserService {
  constructor(private http: AxiosInstance) {}
  create(params: CreateParams) {
    return this.http.post('/users', params);
  }
}

const userService = new UserService(apiClient);
export default userService;
