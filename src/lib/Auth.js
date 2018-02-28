class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(key,token) {
    localStorage.setItem(key, token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated(key) {
    return localStorage.getItem(key) !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser(key) {
    localStorage.removeItem(key);
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken(key) {
    return localStorage.getItem(key);
  }

}

export default Auth;
