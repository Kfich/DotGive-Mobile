// User data model

export default class User {

  static currentUser = null;
  static userJSON = null;

  /*
  var user_profile = {
    'about_me': '',
    'location': '',
    'timezone': '',
    'profile_photo_url': '',
    'profile_banner_url': '',
  }*/

  constructor () {
    // this._id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
    this.username = '';
    this.phone = '';
    this.zip = '';
    this.referral_code = '';
    this.password_hash = '';
    this.password_reset_hash = '';
    this.is_verified = false;
    this.is_email_verified = false;
    this.is_phone_number_verified = false;
    this.payment_tokens = [];
    this.wallet_ids = [];
    this.createdAt = '';
    this.updatedAt = '';
    this.version = '';
    this.account_type = '';
    this.user_profile = {}
  }

  initWithParams (params) {
    // this._id = params._id;
    this.first_name = params.first_name;
    this.last_name = params.last_name;
    this.email = params.email;
    this.username = params.username;
    this.phone = params.phone;
    this.zip = params.zip;
    this.referral_code = params.referral_code;
    this.password_hash = params.password_hash;
    this.password_reset_hash = params.password_reset_hash;
    this.is_verified = params.is_verified;
    this.is_email_verified = params.is_email_verified;
    this.is_phone_number_verified = params.is_phone_number_verified;
    this.payment_tokens = params.payment_tokens;
    this.wallet_ids = params.wallet_ids;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
    this.version = params.version;
    this.account_type = params.account_type;
  }

  set reset (x = null) {
    this.currentUser = x;
    this.userJSON = x;
  }

  exportToJSON () {
    // Init user json
    const user = {
      'first_name': this.first_name,
      'last_name': this.last_name,
      'phone': this.phone,
      'email': this.email,
      'username': this.username,
      'zip': this.zip,
      'referral_code': this.referral_code,
      'is_verified': this.is_verified,
      'is_email_verified': this.is_email_verified,
      'is_phone_number_verified': this.is_phone_number_verified,
      'password_hash': this.password_hash,
      'password_reset_hash': this.password_reset_hash,
      'payment_tokens': this.payment_tokens,
      'wallet_ids': this.wallet_ids,
      'createdAt': this.createdAt,
      'updatedAt': this.updatedAt,
      'version': this.version,
      'account_type': this.account_type
    };
    // Return json val
    this.userJSON = user;
    console.log('User json on User.js', this.userJSON);
  }

  setUserID (id) {
    this._id = id;
  }

}
