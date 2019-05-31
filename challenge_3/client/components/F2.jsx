class  ShippingInfo extends React.Component {

  render() {
    const {values, handleChange,goToNext, goToPrev,handleSubmit, insertId} = this.props;
    return (
      <div>
        <h1>Enter Shipping Information</h1>
          <form >
            <br/>
            <h4>Shipping Adress:</h4>
            Line 1:   <input size="30" name="shipping_line1" type="text" placeholder="Enter Street Address" onChange={(e) => handleChange(e)} defaultValue={values.shipping_line1}></input><br/><br/>
            Line 2:   <input size="30" name="shipping_line2" type="text" placeholder="Enter Street Address" onChange={(e) => handleChange(e)} defaultValue={values.shipping_line2}></input><br/><br/>
            City:     <input size="30" name="shipping_city" type="text" placeholder="Enter City Name" onChange={(e) => handleChange(e)} defaultValue={values.shipping_city}></input><br/><br/>
            State:    <input size="30" name="shipping_state" type="text" placeholder="Enter State Name" onChange={(e) => handleChange(e)} defaultValue={values.shipping_state}></input><br/><br/>
            Zip code: <input size="30" name="shipping_state" type="number" placeholder="Enter Your Zip Code" onChange={(e) => handleChange(e)} defaultValue={values.shipping_zip}></input><br/><br/>
            Phone #:  <input size="30" name="phoneNumber" type="tel" placeholder="Enter Your Phone Number" onChange={(e) => handleChange(e)} defaultValue={values.phoneNumber}></input><br/><br/>
            <input type="submit" value="Next" onClick={(e)=> handleSubmit(e)}></input>
          </form>
          <button onClick={goToPrev}>Back</button>
      </div>

    )
  }

}
export default ShippingInfo;