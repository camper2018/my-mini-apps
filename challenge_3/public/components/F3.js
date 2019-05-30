class BillingInfo extends React.Component {
  render() {
    const {
      values,
      handleChange,
      goToNext,
      goToPrev,
      handleSubmit
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0YzLmpzeCJdLCJuYW1lcyI6WyJCaWxsaW5nSW5mbyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZ29Ub05leHQiLCJnb1RvUHJldiIsImhhbmRsZVN1Ym1pdCIsInByb3BzIiwiZSIsImNyZWRpdENhcmQiLCJleHBpcnlEYXRlIiwiQ1ZWIiwiYmlsbGluZ1ppcCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBT0EsV0FBUCxTQUEyQkMsS0FBSyxDQUFDQyxTQUFqQyxDQUEyQztBQUN6Q0MsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFDQyxNQUFBQSxNQUFEO0FBQVNDLE1BQUFBLFlBQVQ7QUFBc0JDLE1BQUFBLFFBQXRCO0FBQWdDQyxNQUFBQSxRQUFoQztBQUF5Q0MsTUFBQUE7QUFBekMsUUFBeUQsS0FBS0MsS0FBcEU7QUFDQSxXQUNFLGlDQUNFLDREQURGLEVBRUksa0NBQ0UsK0JBREYsMEJBRXNCO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxZQUF0QjtBQUFtQyxNQUFBLElBQUksRUFBQyxNQUF4QztBQUErQyxNQUFBLFdBQVcsRUFBQywwQkFBM0Q7QUFBc0YsTUFBQSxRQUFRLEVBQUdDLENBQUQsSUFBT0wsWUFBWSxDQUFDSyxDQUFELENBQW5IO0FBQXdILE1BQUEsWUFBWSxFQUFFTixNQUFNLENBQUNPO0FBQTdJLE1BRnRCLEVBRXVMLCtCQUZ2TCxFQUU0TCwrQkFGNUwsMEJBR3NCO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxZQUF0QjtBQUFtQyxNQUFBLElBQUksRUFBQyxNQUF4QztBQUErQyxNQUFBLFdBQVcsRUFBQyx3QkFBM0Q7QUFBb0YsTUFBQSxRQUFRLEVBQUdELENBQUQsSUFBT0wsWUFBWSxDQUFDSyxDQUFELENBQWpIO0FBQXNILE1BQUEsWUFBWSxFQUFFTixNQUFNLENBQUNRO0FBQTNJLE1BSHRCLEVBR3FMLCtCQUhyTCxFQUcwTCwrQkFIMUwsMEJBSXNCO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxLQUF0QjtBQUE0QixNQUFBLElBQUksRUFBQyxRQUFqQztBQUEwQyxNQUFBLFdBQVcsRUFBQyxnQ0FBdEQ7QUFBdUYsTUFBQSxRQUFRLEVBQUdGLENBQUQsSUFBT0wsWUFBWSxDQUFDSyxDQUFELENBQXBIO0FBQXlILE1BQUEsWUFBWSxFQUFFTixNQUFNLENBQUNTO0FBQTlJLE1BSnRCLEVBSWlMLCtCQUpqTCxFQUlzTCwrQkFKdEwsMEJBS3NCO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxZQUF0QjtBQUFtQyxNQUFBLElBQUksRUFBQyxRQUF4QztBQUFpRCxNQUFBLFdBQVcsRUFBQyxrQ0FBN0Q7QUFBZ0csTUFBQSxRQUFRLEVBQUdILENBQUQsSUFBT0wsWUFBWSxDQUFDSyxDQUFELENBQTdIO0FBQWtJLE1BQUEsWUFBWSxFQUFFTixNQUFNLENBQUNVO0FBQXZKLE1BTHRCLEVBS2lNLCtCQUxqTSxFQUtzTSwrQkFMdE0sRUFNRTtBQUFPLE1BQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsTUFBQSxLQUFLLEVBQUMsTUFBM0I7QUFBa0MsTUFBQSxPQUFPLEVBQUdKLENBQUQsSUFBTUYsWUFBWSxDQUFDRSxDQUFEO0FBQTdELE1BTkYsQ0FGSixFQVVJO0FBQVEsTUFBQSxPQUFPLEVBQUVIO0FBQWpCLGNBVkosQ0FERjtBQWVEOztBQWxCd0M7O0FBcUIzQyxlQUFlUCxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgIEJpbGxpbmdJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt2YWx1ZXMsIGhhbmRsZUNoYW5nZSxnb1RvTmV4dCwgZ29Ub1ByZXYsaGFuZGxlU3VibWl0fSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FbnRlciBCaWxsaW5nIEluZm9ybWF0aW9uPC9oMT5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICBDcmVkaXQgQ2FyZCBOdW1iZXI6IDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwiY3JlZGl0Q2FyZFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDcmVkaXQgQ2FyZCBOdW1iZXJcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMuY3JlZGl0Q2FyZH0+PC9pbnB1dD48YnIvPjxici8+XG4gICAgICAgICAgICBDcmVkaXQgRXhwaXJ5IERhdGU6IDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwiZXhwaXJ5RGF0ZVwiIHR5cGU9XCJkYXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDYXJkIEV4cGlyeSBEYXRlXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLmV4cGlyeURhdGV9PjwvaW5wdXQ+PGJyLz48YnIvPlxuICAgICAgICAgICAgQ1ZWIE51bWJlcjogICAgICAgICA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cIkNWVlwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIENhcmQgVmVyaWZpY2F0aW9uIE51bWJlclwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSBkZWZhdWx0VmFsdWU9e3ZhbHVlcy5DVlZ9PjwvaW5wdXQ+PGJyLz48YnIvPlxuICAgICAgICAgICAgQmlsbGluZyBaaXAgQ29kZTogICA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cImJpbGxpbmdaaXBcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBCaWxsaW5nIFppcCBPZiBDcmVkaXQgQ2FyZFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSBkZWZhdWx0VmFsdWU9e3ZhbHVlcy5iaWxsaW5nWmlwfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17KGUpPT4gaGFuZGxlU3VibWl0KGUpfT48L2lucHV0PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvVG9QcmV2fT5CYWNrPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgIClcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBCaWxsaW5nSW5mbzsiXX0=