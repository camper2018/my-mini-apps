
import PersonalInfo from './components/F1.js';
import ShippingInfo from './components/F2.js';
import BillingInfo from './components/F3.js';
import ConfirmInfo from './components/confirm.js'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      name:"",
      email: "",
      password: "",
      shipping_line1: "",
      shipping_line2:"",
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
  this.handleChange = this.handleChange.bind(this);
  }
  goToNext() {
    const {step} = this.state;
    this.setState({step: step + 1});
  }
  goToPrev() {
    const {step} = this.state;
    this.setState({step: step - 1});
  }
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { step } = this.state;
    const {name, email, password, shipping_line1, shipping_line2, shipping_city, shipping_state, shipping_zip, phoneNumber, creditCard, expiryDate, CVV, billingZip} = this.state;
    const values = {name, email, password, shipping_line1, shipping_line2, shipping_city, shipping_state, shipping_zip, phoneNumber, creditCard, expiryDate, CVV, billingZip}
      if (step === 1) {
        return (
            <div>
              <h1>Shopping Checkout Page</h1>
              <button onClick={this.goToNext}>Proceed To Checkout</button><br/>
            </div>
          )
      } else if (step === 2) {
        return (
          <PersonalInfo
          goToNext = {this.goToNext}
          handleChange={this.handleChange}
          goToNext={this.goToNext}
          goToPrev={this.goToPrev}
          values={values}
          />
        )
      } else if (step === 3) {
        return (
          <ShippingInfo
          goToNext = {this.goToNext}
          handleChange={this.handleChange}
          goToPrev={this.goToPrev}
          goToNext={this.goToNext}
          values={values}
          />
        )
      } else if (step === 4) {
        return (
          <BillingInfo
          goToNext = {this.goToNext}
          handleChange={this.handleChange}
          goToPrev={this.goToPrev}
          goToNext={this.goToNext}
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
      }
  }

}




const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
