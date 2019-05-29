class  BillingInfo extends React.Component {
  render() {
    const {values, handleChange,goToNext, goToPrev} = this.props;
    return (
      <div>
        <h1>Enter Billing Information</h1>
          <form>
            <br/>
            Credit Card Number: <input size="30" name="creditCard" type="text" placeholder="Enter Credit Card Number" onChange={(e) => handleChange(e)} defaultValue={values.creditCard}></input><br/><br/>
            Credit Expiry Date: <input size="30" name="expiryDate" type="date" placeholder="Enter Card Expiry Date" onChange={(e) => handleChange(e)} defaultValue={values.expiryDate}></input><br/><br/>
            CVV Number:         <input size="30" name="CVV" type="number" placeholder="Enter Card Verification Number" onChange={(e) => handleChange(e)} defaultValue={values.CVV}></input><br/><br/>
            Billing Zip Code:   <input size="30" name="billingZip" type="number" placeholder="Enter Billing Zip Of Credit Card" onChange={(e) => handleChange(e)} defaultValue={values.billingZip}></input><br/><br/>
            {/* <input type="submit" value="Next" onSubmit={(e)=> this.continue}></input> */}
          </form><br/><br/>
          <button onClick={goToNext}>Next</button>
          <span>
            <button onClick={goToPrev}>Back</button>
          </span>
      </div>

    )
  }

}
export default BillingInfo;