export const setAuthToken = (login: string, password: string): void => {
  const token = btoa(`${login}:${password}`);
  localStorage.setItem('authorization_token', token);
};

export const getAuthToken = (): string => {
  const token = localStorage.getItem('authorization_token');

  if (!token) {
    console.warn('No authorization token found in localStorage');
    return '';
  }

  return token;
};

export const clearAuthToken = (): void => {
  localStorage.removeItem('authorization_token');
};
