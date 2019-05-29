class ConfirmInfo extends React.Component {
  handleConfirm() {
    // const {name, email, password, shipping_line1, shipping_line2, shipping_city, shipping_state, shipping_zip, phoneNumber, creditCard, expiryDate, CVV, billingZip} = this.state;
    // const values = {name, email, password, shipping_line1, shipping_line2, shipping_city, shipping_state, shipping_zip, phoneNumber, creditCard, expiryDate, CVV, billingZip}
    const {
      values
    } = this.props;
    var data = {
      name: values.name,
      email: values.email,
      password: values.password,
      phoneNumber: values.phoneNumber,
      shippingAddress: `${values.shipping_line1}
                ${values.shipping_line2},
                ${values.shipping_city} ${values.shipping_state},
                ${values.shipping_zip}`,
      creditCard: values.creditCard,
      expiryDate: values.expiryDate,
      CVV: values.CVV,
      billingZip: values.billingZip
    };
  }

  render() {
    const {
      values,
      goToPrev
    } = this.props;
    return React.createElement("div", null, React.createElement("h1", null, "Your Information Details"), React.createElement("ul", null, React.createElement("li", null, "Name : ", values.name), React.createElement("li", null, "Email : ", values.email), React.createElement("li", null, "Password : ", values.password), React.createElement("li", null, "Address : ", values.shipping_line1 + " " + values.shipping_line2), React.createElement("li", null, "City : ", values.shipping_city), React.createElement("li", null, "State : ", values.shipping_state), React.createElement("li", null, "Zip Code : ", values.shipping_zip), React.createElement("li", null, "Phone Number : ", values.phoneNumber), React.createElement("li", null, "Credit Card : ", values.creditCard), React.createElement("li", null, "Card Validation Value : ", values.CVV), React.createElement("li", null, "Card Expiry Date : ", values.expiryDate), React.createElement("li", null, "Billing Card Zip : ", values.billingZip)), React.createElement("br", null), React.createElement("button", {
      type: "button",
      onClick: this.handleConfirm.bind(this)
    }, "Confirm"), React.createElement("span", null, React.createElement("button", {
      onClick: goToPrev
    }, "Back")));
  }

}

export default ConfirmInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2NvbmZpcm0uanN4Il0sIm5hbWVzIjpbIkNvbmZpcm1JbmZvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJoYW5kbGVDb25maXJtIiwidmFsdWVzIiwicHJvcHMiLCJkYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwaG9uZU51bWJlciIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nX2xpbmUxIiwic2hpcHBpbmdfbGluZTIiLCJzaGlwcGluZ19jaXR5Iiwic2hpcHBpbmdfc3RhdGUiLCJzaGlwcGluZ196aXAiLCJjcmVkaXRDYXJkIiwiZXhwaXJ5RGF0ZSIsIkNWViIsImJpbGxpbmdaaXAiLCJyZW5kZXIiLCJnb1RvUHJldiIsImJpbmQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU9BLFdBQVAsU0FBMkJDLEtBQUssQ0FBQ0MsU0FBakMsQ0FBMkM7QUFDekNDLEVBQUFBLGFBQWEsR0FBRztBQUNkO0FBQ0E7QUFDQSxVQUFLO0FBQUNDLE1BQUFBO0FBQUQsUUFBVyxLQUFLQyxLQUFyQjtBQUNBLFFBQUlDLElBQUksR0FBRztBQUNUQyxNQUFBQSxJQUFJLEVBQUVILE1BQU0sQ0FBQ0csSUFESjtBQUVUQyxNQUFBQSxLQUFLLEVBQUNKLE1BQU0sQ0FBQ0ksS0FGSjtBQUdUQyxNQUFBQSxRQUFRLEVBQUNMLE1BQU0sQ0FBQ0ssUUFIUDtBQUlUQyxNQUFBQSxXQUFXLEVBQUVOLE1BQU0sQ0FBQ00sV0FKWDtBQUtUQyxNQUFBQSxlQUFlLEVBQUcsR0FBRVAsTUFBTSxDQUFDUSxjQUFlO2tCQUM5QlIsTUFBTSxDQUFDUyxjQUFlO2tCQUN0QlQsTUFBTSxDQUFDVSxhQUFjLElBQUdWLE1BQU0sQ0FBQ1csY0FBZTtrQkFDOUNYLE1BQU0sQ0FBQ1ksWUFBYSxFQVJ2QjtBQVNUQyxNQUFBQSxVQUFVLEVBQUViLE1BQU0sQ0FBQ2EsVUFUVjtBQVVUQyxNQUFBQSxVQUFVLEVBQUVkLE1BQU0sQ0FBQ2MsVUFWVjtBQVdUQyxNQUFBQSxHQUFHLEVBQUVmLE1BQU0sQ0FBQ2UsR0FYSDtBQVlUQyxNQUFBQSxVQUFVLEVBQUVoQixNQUFNLENBQUNnQjtBQVpWLEtBQVg7QUFlRDs7QUFDREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFDakIsTUFBQUEsTUFBRDtBQUFRa0IsTUFBQUE7QUFBUixRQUFvQixLQUFLakIsS0FBL0I7QUFDQSxXQUNFLGlDQUNFLDJEQURGLEVBRUUsZ0NBQ0UsMkNBQVlELE1BQU0sQ0FBQ0csSUFBbkIsQ0FERixFQUVFLDRDQUFhSCxNQUFNLENBQUNJLEtBQXBCLENBRkYsRUFHRSwrQ0FBZ0JKLE1BQU0sQ0FBQ0ssUUFBdkIsQ0FIRixFQUlFLDhDQUFlTCxNQUFNLENBQUNRLGNBQVAsR0FBd0IsR0FBeEIsR0FBOEJSLE1BQU0sQ0FBQ1MsY0FBcEQsQ0FKRixFQUtFLDJDQUFZVCxNQUFNLENBQUNVLGFBQW5CLENBTEYsRUFNRSw0Q0FBYVYsTUFBTSxDQUFDVyxjQUFwQixDQU5GLEVBT0UsK0NBQWdCWCxNQUFNLENBQUNZLFlBQXZCLENBUEYsRUFRRSxtREFBb0JaLE1BQU0sQ0FBQ00sV0FBM0IsQ0FSRixFQVNFLGtEQUFtQk4sTUFBTSxDQUFDYSxVQUExQixDQVRGLEVBVUUsNERBQTZCYixNQUFNLENBQUNlLEdBQXBDLENBVkYsRUFXRSx1REFBd0JmLE1BQU0sQ0FBQ2MsVUFBL0IsQ0FYRixFQVlFLHVEQUF3QmQsTUFBTSxDQUFDZ0IsVUFBL0IsQ0FaRixDQUZGLEVBZU8sK0JBZlAsRUFnQkU7QUFBUSxNQUFBLElBQUksRUFBQyxRQUFiO0FBQXNCLE1BQUEsT0FBTyxFQUFFLEtBQUtqQixhQUFMLENBQW1Cb0IsSUFBbkIsQ0FBd0IsSUFBeEI7QUFBL0IsaUJBaEJGLEVBaUJFLGtDQUNJO0FBQVEsTUFBQSxPQUFPLEVBQUVEO0FBQWpCLGNBREosQ0FqQkYsQ0FERjtBQXVCRDs7QUE5Q3dDOztBQWdEM0MsZUFBZXRCLFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyAgQ29uZmlybUluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBoYW5kbGVDb25maXJtKCkge1xuICAgIC8vIGNvbnN0IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHNoaXBwaW5nX2xpbmUxLCBzaGlwcGluZ19saW5lMiwgc2hpcHBpbmdfY2l0eSwgc2hpcHBpbmdfc3RhdGUsIHNoaXBwaW5nX3ppcCwgcGhvbmVOdW1iZXIsIGNyZWRpdENhcmQsIGV4cGlyeURhdGUsIENWViwgYmlsbGluZ1ppcH0gPSB0aGlzLnN0YXRlO1xuICAgIC8vIGNvbnN0IHZhbHVlcyA9IHtuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIHNoaXBwaW5nX2xpbmUxLCBzaGlwcGluZ19saW5lMiwgc2hpcHBpbmdfY2l0eSwgc2hpcHBpbmdfc3RhdGUsIHNoaXBwaW5nX3ppcCwgcGhvbmVOdW1iZXIsIGNyZWRpdENhcmQsIGV4cGlyeURhdGUsIENWViwgYmlsbGluZ1ppcH1cbiAgICBjb25zdHt2YWx1ZXN9ID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIG5hbWU6IHZhbHVlcy5uYW1lLFxuICAgICAgZW1haWw6dmFsdWVzLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6dmFsdWVzLnBhc3N3b3JkLFxuICAgICAgcGhvbmVOdW1iZXI6IHZhbHVlcy5waG9uZU51bWJlcixcbiAgICAgIHNoaXBwaW5nQWRkcmVzczogYCR7dmFsdWVzLnNoaXBwaW5nX2xpbmUxfVxuICAgICAgICAgICAgICAgICR7dmFsdWVzLnNoaXBwaW5nX2xpbmUyfSxcbiAgICAgICAgICAgICAgICAke3ZhbHVlcy5zaGlwcGluZ19jaXR5fSAke3ZhbHVlcy5zaGlwcGluZ19zdGF0ZX0sXG4gICAgICAgICAgICAgICAgJHt2YWx1ZXMuc2hpcHBpbmdfemlwfWAsXG4gICAgICBjcmVkaXRDYXJkOiB2YWx1ZXMuY3JlZGl0Q2FyZCxcbiAgICAgIGV4cGlyeURhdGU6IHZhbHVlcy5leHBpcnlEYXRlLFxuICAgICAgQ1ZWOiB2YWx1ZXMuQ1ZWLFxuICAgICAgYmlsbGluZ1ppcDogdmFsdWVzLmJpbGxpbmdaaXBcbiAgICB9XG5cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3ZhbHVlcyxnb1RvUHJldn0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+WW91ciBJbmZvcm1hdGlvbiBEZXRhaWxzPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5OYW1lIDoge3ZhbHVlcy5uYW1lfTwvbGk+XG4gICAgICAgICAgPGxpPkVtYWlsIDoge3ZhbHVlcy5lbWFpbH08L2xpPlxuICAgICAgICAgIDxsaT5QYXNzd29yZCA6IHt2YWx1ZXMucGFzc3dvcmR9PC9saT5cbiAgICAgICAgICA8bGk+QWRkcmVzcyA6IHt2YWx1ZXMuc2hpcHBpbmdfbGluZTEgKyBcIiBcIiArIHZhbHVlcy5zaGlwcGluZ19saW5lMn08L2xpPlxuICAgICAgICAgIDxsaT5DaXR5IDoge3ZhbHVlcy5zaGlwcGluZ19jaXR5fTwvbGk+XG4gICAgICAgICAgPGxpPlN0YXRlIDoge3ZhbHVlcy5zaGlwcGluZ19zdGF0ZX08L2xpPlxuICAgICAgICAgIDxsaT5aaXAgQ29kZSA6IHt2YWx1ZXMuc2hpcHBpbmdfemlwfTwvbGk+XG4gICAgICAgICAgPGxpPlBob25lIE51bWJlciA6IHt2YWx1ZXMucGhvbmVOdW1iZXJ9PC9saT5cbiAgICAgICAgICA8bGk+Q3JlZGl0IENhcmQgOiB7dmFsdWVzLmNyZWRpdENhcmR9PC9saT5cbiAgICAgICAgICA8bGk+Q2FyZCBWYWxpZGF0aW9uIFZhbHVlIDoge3ZhbHVlcy5DVlZ9PC9saT5cbiAgICAgICAgICA8bGk+Q2FyZCBFeHBpcnkgRGF0ZSA6IHt2YWx1ZXMuZXhwaXJ5RGF0ZX08L2xpPlxuICAgICAgICAgIDxsaT5CaWxsaW5nIENhcmQgWmlwIDoge3ZhbHVlcy5iaWxsaW5nWmlwfTwvbGk+XG4gICAgICAgIDwvdWw+PGJyPjwvYnI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29uZmlybS5iaW5kKHRoaXMpfT5Db25maXJtPC9idXR0b24+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1RvUHJldn0+QmFjazwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1JbmZvOyJdfQ==