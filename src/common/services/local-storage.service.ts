export class LocalStorageService {
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
    document.dispatchEvent(new Event('localStorageServiceChange'));
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
    document.dispatchEvent(new Event('localStorageServiceChange'));
  }
}

const localStorageService = new LocalStorageService();
export default localStorageService;
