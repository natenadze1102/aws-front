/**
 * Sets the authorization token in localStorage
 * @param login - User login (GitHub username)
 * @param password - User password
 */
export const setAuthToken = (login: string, password: string): void => {
  const token = btoa(`${login}:${password}`);
  localStorage.setItem('authorization_token', token);
};

/**
 * Gets the stored authorization token
 * @returns The authorization token or null if not found
 */
export const getAuthToken = (): string | null => {
  return localStorage.getItem('authorization_token');
};

/**
 * Clears the authorization token
 */
export const clearAuthToken = (): void => {
  localStorage.removeItem('authorization_token');
};
