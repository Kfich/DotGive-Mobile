// Global Organization Management

export default class Organization {

  var organization_profile = {
    'timezone': '';
    'location': '';
    'profile_banner_url': '';
    'profile_photo_url': '';
  }

  constructor () {
    // this._id = '';
    this.id = '';
    this.name = '';
    this.username = '';
    this.description = '';
    this.country = '';
    this.currency = '';
    this.billing_email = '';
    this.is_billing_email_verified = false;
    this.is_active = false;
    this.email_verification_hash = '';
    this.tos_acceptance_date = '';
    this.tos_acceptance_ip = false;
    this.createdAt = '';
    this.updatedAt = '';
  }

}
