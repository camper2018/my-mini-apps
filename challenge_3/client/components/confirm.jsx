//import axios from 'axios';
class  ConfirmInfo extends React.Component {

  render() {
    const {values,goToPrev,handlePurchase} = this.props;
    return (
      <div>
        <h1>Your Information Details</h1>
        <ul>
          <li>Name : {values.name}</li>
          <li>Email : {values.email}</li>
          <li>Password : {values.password}</li>
          <li>Address : {values.shipping_line1 + " " + values.shipping_line2}</li>
          <li>City : {values.shipping_city}</li>
          <li>State : {values.shipping_state}</li>
          <li>Zip Code : {values.shipping_zip}</li>
          <li>Phone Number : {values.phoneNumber}</li>
          <li>Credit Card : {values.creditCard}</li>
          <li>Card Validation Value : {values.CVV}</li>
          <li>Card Expiry Date : {values.expiryDate}</li>
          <li>Billing Card Zip : {values.billingZip}</li>
        </ul><br></br>
        <button onClick={goToPrev}>Back</button>
        <span>
          <button type="button" onClick={handlePurchase}>Purchase</button>
        </span>
      </div>
    )
  }

}
export default ConfirmInfo;