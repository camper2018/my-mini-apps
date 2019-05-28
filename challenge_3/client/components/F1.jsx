//import React,{Component} from "react";
//import ReactDOM from "react-dom";
class CheckoutForm extends React.Component {
  constructor() {
    super()
    this.state = {
      step: 1,
      name:"",
      email: "",
      password: "",
      shipping_line: "",
      shipping_city: "",
      shipping_state:"",
      shipping_zip: "",
      phoneNumber:"",
      creditCard: "",
      expiryDate: "",
      CVV: "",
      billingZip : ""
    };
  this.goToNext = this.goToNext.bind(this);
  this.goToPrev = this.goToPrev.bind(this);
  }
  goToNext() {
    const {step} = this.state;
    this.setState({step: step + 1});
  }
  goToPrev() {
    const {step} = this.state;
    this.setState({step: step - 1});
  }
  handleChange(field) {
    return event => this.setState({[field]: event.target.value});
  }
  render() {
    const { step } = this.state;
    const {name, email, password, shipping_line, shipping_city, shipping_state, shipping_zip, phoneNumber, creditCard, expiryDate, CVV, billingZip} = this.state;
    const values = {name, email, password, shipping_line, shipping_city, shipping_state, shipping_zip, phoneNumber, creditCard, expiryDate, CVV, billingZip}
      if (step === 1) {
        return (
          <button
          // goToNext = {this.goToNext}
          // handleChange={this.handleChange}
          >Proceed To Checkout</button>
        )
      } else if (step === 2) {
        return (
          <PersonalInfo
          key="personal"
          goToNext = {this.goToNext}
          handleChange={this.handleChange}
          values={values}
          />
        )
      } else if (step === 3) {
        return (
          <ShippingInfo
          goToNext = {this.goToNext}
          handleChange={this.handleChange}
          goToPrev={this.goToPrev}
          values={values}
          />
        )
      } else if (step === 4) {
        return (
          <BillingInfo
          goToNext = {this.goToNext}
          handleChange={this.handleChange}
          goToPrev={this.goToPrev}
          values={values}
          />
        )
      } else if (step === 5) {
        return (
          <ConfirmInfo
            goToPrev={this.goToPrev}
            values={values}
          />
        )
      } else {
        return (
          <h1>no step detected</h1>
        )
      }
  }
}
export default CheckoutForm;

