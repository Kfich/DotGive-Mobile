// Global Auth Management

export default class Auth {
  static isNewUser = false;
  static isLoggedIn = false;
  static isAdmin = false;

  set reset (x = false) {
    this.isNewUser = x;
    this.isLoggedIn = x;
    this.isAdmin = x;
  }
}
