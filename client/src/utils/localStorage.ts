type StorageData = {accessToken: string};

const STORAGE_KEY = 'bookstore';

export function getStorageData(): StorageData | null {
  const storageData = localStorage.getItem(STORAGE_KEY);
  return storageData ? JSON.parse(storageData) : null;
}

export function setStorageData(token: string) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({accessToken: token}));
}
