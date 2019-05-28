import React, { Component } from "react";
import ReactDOM from "react-dom";
export class CheckoutForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      name: "",
      email: "",
      password: "",
      shipping_line: "",
      shipping_city: "",
      shipping_state: "",
      shipping_zip: "",
      phoneNumber: "",
      creditCard: "",
      expiryDate: "",
      CVV: "",
      billingZip: ""
    };
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToBack.bind(this);
  }

  goToNext() {
    const {
      step
    } = this.state;
    this.setState({
      step: step + 1
    });
  }

  goToPrev() {
    const {
      step
    } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange(field) {
    return event => this.setState({
      [field]: event.target.value
    });
  }

  render() {
    const {
      step
    } = this.state;
    const {
      name,
      email,
      password,
      shipping_line,
      shipping_city,
      shipping_state,
      shipping_zip,
      phoneNumber,
      creditCard,
      expiryDate,
      CVV,
      billingZip
    } = this.state;
    const values = {
      name,
      email,
      password,
      shipping_line,
      shipping_city,
      shipping_state,
      shipping_zip,
      phoneNumber,
      creditCard,
      expiryDate,
      CVV,
      billingZip
    };

    if (step === 1) {
      return React.createElement("button", null, "Proceed To Checkout");
    } else if (step === 2) {
      return React.createElement(PersonalInfo, {
        key: "personal",
        goToNext: this.goToNext,
        handleChange: this.handleChange,
        values: values
      });
    } else if (step === 3) {
      return React.createElement(ShippingInfo, {
        goToNext: this.goToNext,
        handleChange: this.handleChange,
        goToPrev: this.goToPrev,
        values: values
      });
    } else if (step === 4) {
      return React.createElement(BillingInfo, {
        goToNext: this.goToNext,
        handleChange: this.handleChange,
        goToPrev: this.goToPrev,
        values: values
      });
    } else if (step === 5) {
      return React.createElement(ConfirmInfo, {
        goToPrev: this.goToPrev,
        values: values
      });
    } else {
      return React.createElement("h1", null, "no step detected");
    }
  }

}
export default CheckoutForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0YxLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJDaGVja291dEZvcm0iLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwic3RlcCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwic2hpcHBpbmdfbGluZSIsInNoaXBwaW5nX2NpdHkiLCJzaGlwcGluZ19zdGF0ZSIsInNoaXBwaW5nX3ppcCIsInBob25lTnVtYmVyIiwiY3JlZGl0Q2FyZCIsImV4cGlyeURhdGUiLCJDVlYiLCJiaWxsaW5nWmlwIiwiZ29Ub05leHQiLCJiaW5kIiwiZ29Ub1ByZXYiLCJnb1RvQmFjayIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwicmVuZGVyIiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLElBQWNDLFNBQWQsUUFBOEIsT0FBOUI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFdBQXJCO0FBQ0EsT0FBTyxNQUFNQyxZQUFOLFNBQTJCRixTQUEzQixDQUFxQztBQUMxQ0csRUFBQUEsV0FBVyxHQUFHO0FBQ1o7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsSUFBSSxFQUFFLENBREs7QUFFWEMsTUFBQUEsSUFBSSxFQUFDLEVBRk07QUFHWEMsTUFBQUEsS0FBSyxFQUFFLEVBSEk7QUFJWEMsTUFBQUEsUUFBUSxFQUFFLEVBSkM7QUFLWEMsTUFBQUEsYUFBYSxFQUFFLEVBTEo7QUFNWEMsTUFBQUEsYUFBYSxFQUFFLEVBTko7QUFPWEMsTUFBQUEsY0FBYyxFQUFDLEVBUEo7QUFRWEMsTUFBQUEsWUFBWSxFQUFFLEVBUkg7QUFTWEMsTUFBQUEsV0FBVyxFQUFDLEVBVEQ7QUFVWEMsTUFBQUEsVUFBVSxFQUFFLEVBVkQ7QUFXWEMsTUFBQUEsVUFBVSxFQUFFLEVBWEQ7QUFZWEMsTUFBQUEsR0FBRyxFQUFFLEVBWk07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QjtBQUNyQixhQUNFLG9CQUFDLFdBQUQ7QUFDRSxRQUFBLFFBQVEsRUFBRSxLQUFLZSxRQURqQjtBQUVFLFFBQUEsTUFBTSxFQUFFUztBQUZWLFFBREY7QUFNRCxLQVBNLE1BT0E7QUFDTCxhQUNFLG1EQURGO0FBR0Q7QUFDSjs7QUFsRnlDO0FBb0Y1QyxlQUFlM0IsWUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RlcDogMSxcbiAgICAgIG5hbWU6XCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICBzaGlwcGluZ19saW5lOiBcIlwiLFxuICAgICAgc2hpcHBpbmdfY2l0eTogXCJcIixcbiAgICAgIHNoaXBwaW5nX3N0YXRlOlwiXCIsXG4gICAgICBzaGlwcGluZ196aXA6IFwiXCIsXG4gICAgICBwaG9uZU51bWJlcjpcIlwiLFxuICAgICAgY3JlZGl0Q2FyZDogXCJcIixcbiAgICAgIGV4cGlyeURhdGU6IFwiXCIsXG4gICAgICBDVlY6IFwiXCIsXG4gICAgICBiaWxsaW5nWmlwIDogXCJcIlxuICAgIH07XG4gIHRoaXMuZ29Ub05leHQgPSB0aGlzLmdvVG9OZXh0LmJpbmQodGhpcyk7XG4gIHRoaXMuZ29Ub1ByZXYgPSB0aGlzLmdvVG9CYWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgZ29Ub05leHQoKSB7XG4gICAgY29uc3Qge3N0ZXB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiBzdGVwICsgMX0pO1xuICB9XG4gIGdvVG9QcmV2KCkge1xuICAgIGNvbnN0IHtzdGVwfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogc3RlcCAtIDF9KTtcbiAgfVxuICBoYW5kbGVDaGFuZ2UoZmllbGQpIHtcbiAgICByZXR1cm4gZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7W2ZpZWxkXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RlcCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7bmFtZSwgZW1haWwsIHBhc3N3b3JkLCBzaGlwcGluZ19saW5lLCBzaGlwcGluZ19jaXR5LCBzaGlwcGluZ19zdGF0ZSwgc2hpcHBpbmdfemlwLCBwaG9uZU51bWJlciwgY3JlZGl0Q2FyZCwgZXhwaXJ5RGF0ZSwgQ1ZWLCBiaWxsaW5nWmlwfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgdmFsdWVzID0ge25hbWUsIGVtYWlsLCBwYXNzd29yZCwgc2hpcHBpbmdfbGluZSwgc2hpcHBpbmdfY2l0eSwgc2hpcHBpbmdfc3RhdGUsIHNoaXBwaW5nX3ppcCwgcGhvbmVOdW1iZXIsIGNyZWRpdENhcmQsIGV4cGlyeURhdGUsIENWViwgYmlsbGluZ1ppcH1cbiAgICAgIGlmIChzdGVwID09PSAxKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIC8vIGdvVG9OZXh0ID0ge3RoaXMuZ29Ub05leHR9XG4gICAgICAgICAgLy8gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICA+UHJvY2VlZCBUbyBDaGVja291dDwvYnV0dG9uPlxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGVyc29uYWxJbmZvXG4gICAgICAgICAga2V5PVwicGVyc29uYWxcIlxuICAgICAgICAgIGdvVG9OZXh0ID0ge3RoaXMuZ29Ub05leHR9XG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IDMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8U2hpcHBpbmdJbmZvXG4gICAgICAgICAgZ29Ub05leHQgPSB7dGhpcy5nb1RvTmV4dH1cbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGdvVG9QcmV2PXt0aGlzLmdvVG9QcmV2fVxuICAgICAgICAgIHZhbHVlcz17dmFsdWVzfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSBpZiAoc3RlcCA9PT0gNCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxCaWxsaW5nSW5mb1xuICAgICAgICAgIGdvVG9OZXh0ID0ge3RoaXMuZ29Ub05leHR9XG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBnb1RvUHJldj17dGhpcy5nb1RvUHJldn1cbiAgICAgICAgICB2YWx1ZXM9e3ZhbHVlc31cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPT09IDUpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q29uZmlybUluZm9cbiAgICAgICAgICAgIGdvVG9QcmV2PXt0aGlzLmdvVG9QcmV2fVxuICAgICAgICAgICAgdmFsdWVzPXt2YWx1ZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aDE+bm8gc3RlcCBkZXRlY3RlZDwvaDE+XG4gICAgICAgIClcbiAgICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRGb3JtO1xuXG4iXX0=