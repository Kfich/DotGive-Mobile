// Global Payment Management

export default class PaymentManager {

  static payment = null;
  static selectedCard = null;
  static testPayment = null;
  static userCardList = null;

  reset () {
    this.payment = null;
    this.selectedCard = null;
    this.testPayment = null;
  }

}
