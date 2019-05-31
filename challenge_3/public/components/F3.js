class BillingInfo extends React.Component {
  render() {
    const {
      values,
      handleChange,
      goToNext,
      goToPrev,
      handleSubmit,
      insertId
    } = this.props;
    return React.createElement("div", null, React.createElement("h1", null, "Enter Billing Information"), React.createElement("form", null, React.createElement("br", null), "Credit Card Number: ", React.createElement("input", {
      size: "30",
      name: "creditCard",
      type: "text",
      placeholder: "Enter Credit Card Number",
      onChange: e => handleChange(e),
      defaultValue: values.creditCard
    }), React.createElement("br", null), React.createElement("br", null), "Credit Expiry Date: ", React.createElement("input", {
      size: "30",
      name: "expiryDate",
      type: "date",
      placeholder: "Enter Card Expiry Date",
      onChange: e => handleChange(e),
      defaultValue: values.expiryDate
    }), React.createElement("br", null), React.createElement("br", null), "CVV Number:         ", React.createElement("input", {
      size: "30",
      name: "CVV",
      type: "number",
      placeholder: "Enter Card Verification Number",
      onChange: e => handleChange(e),
      defaultValue: values.CVV
    }), React.createElement("br", null), React.createElement("br", null), "Billing Zip Code:   ", React.createElement("input", {
      size: "30",
      name: "billingZip",
      type: "number",
      placeholder: "Enter Billing Zip Of Credit Card",
      onChange: e => handleChange(e),
      defaultValue: values.billingZip
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: "submit",
      value: "Next",
      onClick: e => handleSubmit(e)
    })), React.createElement("button", {
      onClick: goToPrev
    }, "Back"));
  }

}

export default BillingInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0YzLmpzeCJdLCJuYW1lcyI6WyJCaWxsaW5nSW5mbyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZ29Ub05leHQiLCJnb1RvUHJldiIsImhhbmRsZVN1Ym1pdCIsImluc2VydElkIiwicHJvcHMiLCJlIiwiY3JlZGl0Q2FyZCIsImV4cGlyeURhdGUiLCJDVlYiLCJiaWxsaW5nWmlwIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFPQSxXQUFQLFNBQTJCQyxLQUFLLENBQUNDLFNBQWpDLENBQTJDO0FBQ3pDQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUNDLE1BQUFBLE1BQUQ7QUFBU0MsTUFBQUEsWUFBVDtBQUFzQkMsTUFBQUEsUUFBdEI7QUFBZ0NDLE1BQUFBLFFBQWhDO0FBQXlDQyxNQUFBQSxZQUF6QztBQUF1REMsTUFBQUE7QUFBdkQsUUFBbUUsS0FBS0MsS0FBOUU7QUFDQSxXQUNFLGlDQUNFLDREQURGLEVBRUksa0NBQ0UsK0JBREYsMEJBRXNCO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxZQUF0QjtBQUFtQyxNQUFBLElBQUksRUFBQyxNQUF4QztBQUErQyxNQUFBLFdBQVcsRUFBQywwQkFBM0Q7QUFBc0YsTUFBQSxRQUFRLEVBQUdDLENBQUQsSUFBT04sWUFBWSxDQUFDTSxDQUFELENBQW5IO0FBQXdILE1BQUEsWUFBWSxFQUFFUCxNQUFNLENBQUNRO0FBQTdJLE1BRnRCLEVBRXVMLCtCQUZ2TCxFQUU0TCwrQkFGNUwsMEJBR3NCO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxZQUF0QjtBQUFtQyxNQUFBLElBQUksRUFBQyxNQUF4QztBQUErQyxNQUFBLFdBQVcsRUFBQyx3QkFBM0Q7QUFBb0YsTUFBQSxRQUFRLEVBQUdELENBQUQsSUFBT04sWUFBWSxDQUFDTSxDQUFELENBQWpIO0FBQXNILE1BQUEsWUFBWSxFQUFFUCxNQUFNLENBQUNTO0FBQTNJLE1BSHRCLEVBR3FMLCtCQUhyTCxFQUcwTCwrQkFIMUwsMEJBSXNCO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxLQUF0QjtBQUE0QixNQUFBLElBQUksRUFBQyxRQUFqQztBQUEwQyxNQUFBLFdBQVcsRUFBQyxnQ0FBdEQ7QUFBdUYsTUFBQSxRQUFRLEVBQUdGLENBQUQsSUFBT04sWUFBWSxDQUFDTSxDQUFELENBQXBIO0FBQXlILE1BQUEsWUFBWSxFQUFFUCxNQUFNLENBQUNVO0FBQTlJLE1BSnRCLEVBSWlMLCtCQUpqTCxFQUlzTCwrQkFKdEwsMEJBS3NCO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxZQUF0QjtBQUFtQyxNQUFBLElBQUksRUFBQyxRQUF4QztBQUFpRCxNQUFBLFdBQVcsRUFBQyxrQ0FBN0Q7QUFBZ0csTUFBQSxRQUFRLEVBQUdILENBQUQsSUFBT04sWUFBWSxDQUFDTSxDQUFELENBQTdIO0FBQWtJLE1BQUEsWUFBWSxFQUFFUCxNQUFNLENBQUNXO0FBQXZKLE1BTHRCLEVBS2lNLCtCQUxqTSxFQUtzTSwrQkFMdE0sRUFNRTtBQUFPLE1BQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsTUFBQSxLQUFLLEVBQUMsTUFBM0I7QUFBa0MsTUFBQSxPQUFPLEVBQUdKLENBQUQsSUFBTUgsWUFBWSxDQUFDRyxDQUFEO0FBQTdELE1BTkYsQ0FGSixFQVVJO0FBQVEsTUFBQSxPQUFPLEVBQUVKO0FBQWpCLGNBVkosQ0FERjtBQWVEOztBQWxCd0M7O0FBcUIzQyxlQUFlUCxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgIEJpbGxpbmdJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt2YWx1ZXMsIGhhbmRsZUNoYW5nZSxnb1RvTmV4dCwgZ29Ub1ByZXYsaGFuZGxlU3VibWl0LCBpbnNlcnRJZH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RW50ZXIgQmlsbGluZyBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgQ3JlZGl0IENhcmQgTnVtYmVyOiA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cImNyZWRpdENhcmRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ3JlZGl0IENhcmQgTnVtYmVyXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLmNyZWRpdENhcmR9PjwvaW5wdXQ+PGJyLz48YnIvPlxuICAgICAgICAgICAgQ3JlZGl0IEV4cGlyeSBEYXRlOiA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cImV4cGlyeURhdGVcIiB0eXBlPVwiZGF0ZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2FyZCBFeHBpcnkgRGF0ZVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSBkZWZhdWx0VmFsdWU9e3ZhbHVlcy5leHBpcnlEYXRlfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICAgIENWViBOdW1iZXI6ICAgICAgICAgPGlucHV0IHNpemU9XCIzMFwiIG5hbWU9XCJDVlZcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDYXJkIFZlcmlmaWNhdGlvbiBOdW1iZXJcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMuQ1ZWfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICAgIEJpbGxpbmcgWmlwIENvZGU6ICAgPGlucHV0IHNpemU9XCIzMFwiIG5hbWU9XCJiaWxsaW5nWmlwXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQmlsbGluZyBaaXAgT2YgQ3JlZGl0IENhcmRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMuYmlsbGluZ1ppcH0+PC9pbnB1dD48YnIvPjxici8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiIG9uQ2xpY2s9eyhlKT0+IGhhbmRsZVN1Ym1pdChlKX0+PC9pbnB1dD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1RvUHJldn0+QmFjazwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICApXG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgQmlsbGluZ0luZm87Il19