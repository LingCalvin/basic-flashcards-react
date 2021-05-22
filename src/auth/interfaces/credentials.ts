import User from '../../user/interfaces/user';

export default interface Credentials extends User {
  accessToken: string;
}
