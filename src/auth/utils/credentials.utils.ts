import localStorageService from '../../common/services/local-storage.service';
import userService from '../../user/services/user.service';

export function retrieve() {
  // TODO: check access token expiration
  const user = userService.getCurrentUser();
  const accessToken = localStorageService.getItem('accessToken');
  if (!user || !accessToken) {
    return null;
  }
  return { ...user, accessToken };
}
