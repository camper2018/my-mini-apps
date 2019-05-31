
import PersonalInfo from './components/F1.js';
import ShippingInfo from './components/F2.js';
import BillingInfo from './components/F3.js';
import ConfirmInfo from './components/confirm.js'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      insertId: null,
      name:"",
      email: "",
      password: "",
      shipping_line1: "",
      shipping_line2:"",
      shipping_city: "",
      shipping_state:"",
      shipping_zip: 0,
      phoneNumber:"",
      creditCard: "",
      expiryDate: "",
      CVV: "",
      billingZip : ""
    };
  this.goToNext = this.goToNext.bind(this);
  this.goToPrev = this.goToPrev.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handlePurchase = this.handlePurchase.bind(this);
  this.baseState = this.state;
  }
  goToNext() {
    const {step} = this.state;
    this.setState({step: step + 1},()=> {
    });
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
  handleSubmit(event) {
    event.preventDefault();
    this.goToNext();
    const data = this.state;
    axios({
      method: 'post',
      url: '/addUserInfo',
      data: data
      })
    .then((response)=> {
      this.setState({
        insertId: response.data
      });
    })
    .catch((error)=> {
      throw error;
    });

  }

  handlePurchase() {
    this.setState(
      this.baseState, ()=>{}
    );
  }

  render() {
    const { step , insertId} = this.state;
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
          handleSubmit={this.handleSubmit}
          goToNext={this.goToNext}
          goToPrev={this.goToPrev}
          insertId={insertId}
          values={values}
          />
        )
      } else if (step === 3) {
        return (
          <ShippingInfo
          goToNext = {this.goToNext}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          goToPrev={this.goToPrev}
          goToNext={this.goToNext}
          insertId={insertId}
          values={values}
          />
        )
      } else if (step === 4) {
        return (
          <BillingInfo
          goToNext = {this.goToNext}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          goToPrev={this.goToPrev}
          goToNext={this.goToNext}
          insertId={insertId}
          values={values}
          />
        )
      } else if (step === 5) {
        return (
          <ConfirmInfo
            goToPrev={this.goToPrev}
            handlePurchase={this.handlePurchase}
            insertId={insertId}
            values={values}
          />
        )
      }
  }

}




const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
