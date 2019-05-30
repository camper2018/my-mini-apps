//import axios from 'axios';
class ConfirmInfo extends React.Component {
  handleConfirm() {
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
    console.log(data);
    axios({
      method: 'post',
      url: '/addUserInfo',
      data: data
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const {
      values,
      goToPrev
    } = this.props;
    return React.createElement("div", null, React.createElement("h1", null, "Your Information Details"), React.createElement("ul", null, React.createElement("li", null, "Name : ", values.name), React.createElement("li", null, "Email : ", values.email), React.createElement("li", null, "Password : ", values.password), React.createElement("li", null, "Address : ", values.shipping_line1 + " " + values.shipping_line2), React.createElement("li", null, "City : ", values.shipping_city), React.createElement("li", null, "State : ", values.shipping_state), React.createElement("li", null, "Zip Code : ", values.shipping_zip), React.createElement("li", null, "Phone Number : ", values.phoneNumber), React.createElement("li", null, "Credit Card : ", values.creditCard), React.createElement("li", null, "Card Validation Value : ", values.CVV), React.createElement("li", null, "Card Expiry Date : ", values.expiryDate), React.createElement("li", null, "Billing Card Zip : ", values.billingZip)), React.createElement("br", null), React.createElement("button", {
      onClick: goToPrev
    }, "Back"), React.createElement("span", null, React.createElement("button", {
      type: "button",
      onClick: this.handleConfirm.bind(this)
    }, "Purchase")));
  }

}

export default ConfirmInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2NvbmZpcm0uanN4Il0sIm5hbWVzIjpbIkNvbmZpcm1JbmZvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJoYW5kbGVDb25maXJtIiwidmFsdWVzIiwicHJvcHMiLCJkYXRhIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwaG9uZU51bWJlciIsInNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nX2xpbmUxIiwic2hpcHBpbmdfbGluZTIiLCJzaGlwcGluZ19jaXR5Iiwic2hpcHBpbmdfc3RhdGUiLCJzaGlwcGluZ196aXAiLCJjcmVkaXRDYXJkIiwiZXhwaXJ5RGF0ZSIsIkNWViIsImJpbGxpbmdaaXAiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwicmVuZGVyIiwiZ29Ub1ByZXYiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE1BQU9BLFdBQVAsU0FBMkJDLEtBQUssQ0FBQ0MsU0FBakMsQ0FBMkM7QUFDekNDLEVBQUFBLGFBQWEsR0FBRztBQUNkLFVBQUs7QUFBQ0MsTUFBQUE7QUFBRCxRQUFXLEtBQUtDLEtBQXJCO0FBQ0EsUUFBSUMsSUFBSSxHQUFHO0FBQ1RDLE1BQUFBLElBQUksRUFBRUgsTUFBTSxDQUFDRyxJQURKO0FBRVRDLE1BQUFBLEtBQUssRUFBQ0osTUFBTSxDQUFDSSxLQUZKO0FBR1RDLE1BQUFBLFFBQVEsRUFBQ0wsTUFBTSxDQUFDSyxRQUhQO0FBSVRDLE1BQUFBLFdBQVcsRUFBRU4sTUFBTSxDQUFDTSxXQUpYO0FBS1RDLE1BQUFBLGVBQWUsRUFBRyxHQUFFUCxNQUFNLENBQUNRLGNBQWU7a0JBQzlCUixNQUFNLENBQUNTLGNBQWU7a0JBQ3RCVCxNQUFNLENBQUNVLGFBQWMsSUFBR1YsTUFBTSxDQUFDVyxjQUFlO2tCQUM5Q1gsTUFBTSxDQUFDWSxZQUFhLEVBUnZCO0FBU1RDLE1BQUFBLFVBQVUsRUFBRWIsTUFBTSxDQUFDYSxVQVRWO0FBVVRDLE1BQUFBLFVBQVUsRUFBRWQsTUFBTSxDQUFDYyxVQVZWO0FBV1RDLE1BQUFBLEdBQUcsRUFBRWYsTUFBTSxDQUFDZSxHQVhIO0FBWVRDLE1BQUFBLFVBQVUsRUFBRWhCLE1BQU0sQ0FBQ2dCO0FBWlYsS0FBWDtBQWNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWhCLElBQVo7QUFDQWlCLElBQUFBLEtBQUssQ0FBQztBQUNKQyxNQUFBQSxNQUFNLEVBQUUsTUFESjtBQUVKQyxNQUFBQSxHQUFHLEVBQUUsY0FGRDtBQUdKbkIsTUFBQUEsSUFBSSxFQUFFQTtBQUhGLEtBQUQsQ0FBTCxDQUtDb0IsSUFMRCxDQUtNLFVBQVVDLFFBQVYsRUFBb0I7QUFDdEJOLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxRQUFaO0FBQ0gsS0FQRCxFQVFDQyxLQVJELENBUU8sVUFBVUMsS0FBVixFQUFpQjtBQUNwQlIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlPLEtBQVo7QUFDSCxLQVZEO0FBV0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU07QUFBQzFCLE1BQUFBLE1BQUQ7QUFBUTJCLE1BQUFBO0FBQVIsUUFBb0IsS0FBSzFCLEtBQS9CO0FBQ0EsV0FDRSxpQ0FDRSwyREFERixFQUVFLGdDQUNFLDJDQUFZRCxNQUFNLENBQUNHLElBQW5CLENBREYsRUFFRSw0Q0FBYUgsTUFBTSxDQUFDSSxLQUFwQixDQUZGLEVBR0UsK0NBQWdCSixNQUFNLENBQUNLLFFBQXZCLENBSEYsRUFJRSw4Q0FBZUwsTUFBTSxDQUFDUSxjQUFQLEdBQXdCLEdBQXhCLEdBQThCUixNQUFNLENBQUNTLGNBQXBELENBSkYsRUFLRSwyQ0FBWVQsTUFBTSxDQUFDVSxhQUFuQixDQUxGLEVBTUUsNENBQWFWLE1BQU0sQ0FBQ1csY0FBcEIsQ0FORixFQU9FLCtDQUFnQlgsTUFBTSxDQUFDWSxZQUF2QixDQVBGLEVBUUUsbURBQW9CWixNQUFNLENBQUNNLFdBQTNCLENBUkYsRUFTRSxrREFBbUJOLE1BQU0sQ0FBQ2EsVUFBMUIsQ0FURixFQVVFLDREQUE2QmIsTUFBTSxDQUFDZSxHQUFwQyxDQVZGLEVBV0UsdURBQXdCZixNQUFNLENBQUNjLFVBQS9CLENBWEYsRUFZRSx1REFBd0JkLE1BQU0sQ0FBQ2dCLFVBQS9CLENBWkYsQ0FGRixFQWVPLCtCQWZQLEVBZ0JFO0FBQVEsTUFBQSxPQUFPLEVBQUVXO0FBQWpCLGNBaEJGLEVBaUJFLGtDQUNFO0FBQVEsTUFBQSxJQUFJLEVBQUMsUUFBYjtBQUFzQixNQUFBLE9BQU8sRUFBRSxLQUFLNUIsYUFBTCxDQUFtQjZCLElBQW5CLENBQXdCLElBQXhCO0FBQS9CLGtCQURGLENBakJGLENBREY7QUF1QkQ7O0FBdkR3Qzs7QUF5RDNDLGVBQWVoQyxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuY2xhc3MgIENvbmZpcm1JbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgaGFuZGxlQ29uZmlybSgpIHtcbiAgICBjb25zdHt2YWx1ZXN9ID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIG5hbWU6IHZhbHVlcy5uYW1lLFxuICAgICAgZW1haWw6dmFsdWVzLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6dmFsdWVzLnBhc3N3b3JkLFxuICAgICAgcGhvbmVOdW1iZXI6IHZhbHVlcy5waG9uZU51bWJlcixcbiAgICAgIHNoaXBwaW5nQWRkcmVzczogYCR7dmFsdWVzLnNoaXBwaW5nX2xpbmUxfVxuICAgICAgICAgICAgICAgICR7dmFsdWVzLnNoaXBwaW5nX2xpbmUyfSxcbiAgICAgICAgICAgICAgICAke3ZhbHVlcy5zaGlwcGluZ19jaXR5fSAke3ZhbHVlcy5zaGlwcGluZ19zdGF0ZX0sXG4gICAgICAgICAgICAgICAgJHt2YWx1ZXMuc2hpcHBpbmdfemlwfWAsXG4gICAgICBjcmVkaXRDYXJkOiB2YWx1ZXMuY3JlZGl0Q2FyZCxcbiAgICAgIGV4cGlyeURhdGU6IHZhbHVlcy5leHBpcnlEYXRlLFxuICAgICAgQ1ZWOiB2YWx1ZXMuQ1ZWLFxuICAgICAgYmlsbGluZ1ppcDogdmFsdWVzLmJpbGxpbmdaaXBcbiAgICB9XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICB1cmw6ICcvYWRkVXNlckluZm8nLFxuICAgICAgZGF0YTogZGF0YVxuICAgICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt2YWx1ZXMsZ29Ub1ByZXZ9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPllvdXIgSW5mb3JtYXRpb24gRGV0YWlsczwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+TmFtZSA6IHt2YWx1ZXMubmFtZX08L2xpPlxuICAgICAgICAgIDxsaT5FbWFpbCA6IHt2YWx1ZXMuZW1haWx9PC9saT5cbiAgICAgICAgICA8bGk+UGFzc3dvcmQgOiB7dmFsdWVzLnBhc3N3b3JkfTwvbGk+XG4gICAgICAgICAgPGxpPkFkZHJlc3MgOiB7dmFsdWVzLnNoaXBwaW5nX2xpbmUxICsgXCIgXCIgKyB2YWx1ZXMuc2hpcHBpbmdfbGluZTJ9PC9saT5cbiAgICAgICAgICA8bGk+Q2l0eSA6IHt2YWx1ZXMuc2hpcHBpbmdfY2l0eX08L2xpPlxuICAgICAgICAgIDxsaT5TdGF0ZSA6IHt2YWx1ZXMuc2hpcHBpbmdfc3RhdGV9PC9saT5cbiAgICAgICAgICA8bGk+WmlwIENvZGUgOiB7dmFsdWVzLnNoaXBwaW5nX3ppcH08L2xpPlxuICAgICAgICAgIDxsaT5QaG9uZSBOdW1iZXIgOiB7dmFsdWVzLnBob25lTnVtYmVyfTwvbGk+XG4gICAgICAgICAgPGxpPkNyZWRpdCBDYXJkIDoge3ZhbHVlcy5jcmVkaXRDYXJkfTwvbGk+XG4gICAgICAgICAgPGxpPkNhcmQgVmFsaWRhdGlvbiBWYWx1ZSA6IHt2YWx1ZXMuQ1ZWfTwvbGk+XG4gICAgICAgICAgPGxpPkNhcmQgRXhwaXJ5IERhdGUgOiB7dmFsdWVzLmV4cGlyeURhdGV9PC9saT5cbiAgICAgICAgICA8bGk+QmlsbGluZyBDYXJkIFppcCA6IHt2YWx1ZXMuYmlsbGluZ1ppcH08L2xpPlxuICAgICAgICA8L3VsPjxicj48L2JyPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvVG9QcmV2fT5CYWNrPC9idXR0b24+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29uZmlybS5iaW5kKHRoaXMpfT5QdXJjaGFzZTwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1JbmZvOyJdfQ==