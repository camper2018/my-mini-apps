class ShippingInfo extends React.Component {
  render() {
    const {
      values,
      handleChange,
      goToNext,
      goToPrev,
      handleSubmit
    } = this.props;
    return React.createElement("div", null, React.createElement("h1", null, "Enter Shipping Information"), React.createElement("form", {
      onSubmit: e => handleSubmit(e)
    }, React.createElement("br", null), React.createElement("h4", null, "Shipping Adress:"), "Line 1:   ", React.createElement("input", {
      size: "30",
      name: "shipping_line1",
      type: "text",
      placeholder: "Enter Street Address",
      onChange: e => handleChange(e),
      defaultValue: values.shipping_line1
    }), React.createElement("br", null), React.createElement("br", null), "Line 2:   ", React.createElement("input", {
      size: "30",
      name: "shipping_line2",
      type: "text",
      placeholder: "Enter Street Address",
      onChange: e => handleChange(e),
      defaultValue: values.shipping_line2
    }), React.createElement("br", null), React.createElement("br", null), "City:     ", React.createElement("input", {
      size: "30",
      name: "shipping_city",
      type: "text",
      placeholder: "Enter City Name",
      onChange: e => handleChange(e),
      defaultValue: values.shipping_city
    }), React.createElement("br", null), React.createElement("br", null), "State:    ", React.createElement("input", {
      size: "30",
      name: "shipping_state",
      type: "text",
      placeholder: "Enter State Name",
      onChange: e => handleChange(e),
      defaultValue: values.shipping_state
    }), React.createElement("br", null), React.createElement("br", null), "Zip code: ", React.createElement("input", {
      size: "30",
      name: "shipping_state",
      type: "number",
      placeholder: "Enter Your Zip Code",
      onChange: e => handleChange(e),
      defaultValue: values.shipping_zip
    }), React.createElement("br", null), React.createElement("br", null), "Phone #:  ", React.createElement("input", {
      size: "30",
      name: "phoneNumber",
      type: "tel",
      placeholder: "Enter Your Phone Number",
      onChange: e => handleChange(e),
      defaultValue: values.phoneNumber
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: "submit",
      value: "Next"
    })), React.createElement("button", {
      onClick: goToPrev
    }, "Back"));
  }

}

export default ShippingInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0YyLmpzeCJdLCJuYW1lcyI6WyJTaGlwcGluZ0luZm8iLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImdvVG9OZXh0IiwiZ29Ub1ByZXYiLCJoYW5kbGVTdWJtaXQiLCJwcm9wcyIsImUiLCJzaGlwcGluZ19saW5lMSIsInNoaXBwaW5nX2xpbmUyIiwic2hpcHBpbmdfY2l0eSIsInNoaXBwaW5nX3N0YXRlIiwic2hpcHBpbmdfemlwIiwicGhvbmVOdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU9BLFlBQVAsU0FBNEJDLEtBQUssQ0FBQ0MsU0FBbEMsQ0FBNEM7QUFFMUNDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU07QUFBQ0MsTUFBQUEsTUFBRDtBQUFTQyxNQUFBQSxZQUFUO0FBQXNCQyxNQUFBQSxRQUF0QjtBQUFnQ0MsTUFBQUEsUUFBaEM7QUFBeUNDLE1BQUFBO0FBQXpDLFFBQXlELEtBQUtDLEtBQXBFO0FBQ0EsV0FDRSxpQ0FDRSw2REFERixFQUVJO0FBQU0sTUFBQSxRQUFRLEVBQUdDLENBQUQsSUFBTUYsWUFBWSxDQUFDRSxDQUFEO0FBQWxDLE9BQ0UsK0JBREYsRUFFRSxtREFGRixnQkFHWTtBQUFPLE1BQUEsSUFBSSxFQUFDLElBQVo7QUFBaUIsTUFBQSxJQUFJLEVBQUMsZ0JBQXRCO0FBQXVDLE1BQUEsSUFBSSxFQUFDLE1BQTVDO0FBQW1ELE1BQUEsV0FBVyxFQUFDLHNCQUEvRDtBQUFzRixNQUFBLFFBQVEsRUFBR0EsQ0FBRCxJQUFPTCxZQUFZLENBQUNLLENBQUQsQ0FBbkg7QUFBd0gsTUFBQSxZQUFZLEVBQUVOLE1BQU0sQ0FBQ087QUFBN0ksTUFIWixFQUdpTCwrQkFIakwsRUFHc0wsK0JBSHRMLGdCQUlZO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxnQkFBdEI7QUFBdUMsTUFBQSxJQUFJLEVBQUMsTUFBNUM7QUFBbUQsTUFBQSxXQUFXLEVBQUMsc0JBQS9EO0FBQXNGLE1BQUEsUUFBUSxFQUFHRCxDQUFELElBQU9MLFlBQVksQ0FBQ0ssQ0FBRCxDQUFuSDtBQUF3SCxNQUFBLFlBQVksRUFBRU4sTUFBTSxDQUFDUTtBQUE3SSxNQUpaLEVBSWlMLCtCQUpqTCxFQUlzTCwrQkFKdEwsZ0JBS1k7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLGVBQXRCO0FBQXNDLE1BQUEsSUFBSSxFQUFDLE1BQTNDO0FBQWtELE1BQUEsV0FBVyxFQUFDLGlCQUE5RDtBQUFnRixNQUFBLFFBQVEsRUFBR0YsQ0FBRCxJQUFPTCxZQUFZLENBQUNLLENBQUQsQ0FBN0c7QUFBa0gsTUFBQSxZQUFZLEVBQUVOLE1BQU0sQ0FBQ1M7QUFBdkksTUFMWixFQUswSywrQkFMMUssRUFLK0ssK0JBTC9LLGdCQU1ZO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxnQkFBdEI7QUFBdUMsTUFBQSxJQUFJLEVBQUMsTUFBNUM7QUFBbUQsTUFBQSxXQUFXLEVBQUMsa0JBQS9EO0FBQWtGLE1BQUEsUUFBUSxFQUFHSCxDQUFELElBQU9MLFlBQVksQ0FBQ0ssQ0FBRCxDQUEvRztBQUFvSCxNQUFBLFlBQVksRUFBRU4sTUFBTSxDQUFDVTtBQUF6SSxNQU5aLEVBTTZLLCtCQU43SyxFQU1rTCwrQkFObEwsZ0JBT1k7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLGdCQUF0QjtBQUF1QyxNQUFBLElBQUksRUFBQyxRQUE1QztBQUFxRCxNQUFBLFdBQVcsRUFBQyxxQkFBakU7QUFBdUYsTUFBQSxRQUFRLEVBQUdKLENBQUQsSUFBT0wsWUFBWSxDQUFDSyxDQUFELENBQXBIO0FBQXlILE1BQUEsWUFBWSxFQUFFTixNQUFNLENBQUNXO0FBQTlJLE1BUFosRUFPZ0wsK0JBUGhMLEVBT3FMLCtCQVByTCxnQkFRWTtBQUFPLE1BQUEsSUFBSSxFQUFDLElBQVo7QUFBaUIsTUFBQSxJQUFJLEVBQUMsYUFBdEI7QUFBb0MsTUFBQSxJQUFJLEVBQUMsS0FBekM7QUFBK0MsTUFBQSxXQUFXLEVBQUMseUJBQTNEO0FBQXFGLE1BQUEsUUFBUSxFQUFHTCxDQUFELElBQU9MLFlBQVksQ0FBQ0ssQ0FBRCxDQUFsSDtBQUF1SCxNQUFBLFlBQVksRUFBRU4sTUFBTSxDQUFDWTtBQUE1SSxNQVJaLEVBUTZLLCtCQVI3SyxFQVFrTCwrQkFSbEwsRUFTRTtBQUFPLE1BQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsTUFBQSxLQUFLLEVBQUM7QUFBM0IsTUFURixDQUZKLEVBYUk7QUFBUSxNQUFBLE9BQU8sRUFBRVQ7QUFBakIsY0FiSixDQURGO0FBcUJEOztBQXpCeUM7O0FBNEI1QyxlQUFlUCxZQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgIFNoaXBwaW5nSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt2YWx1ZXMsIGhhbmRsZUNoYW5nZSxnb1RvTmV4dCwgZ29Ub1ByZXYsaGFuZGxlU3VibWl0fSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FbnRlciBTaGlwcGluZyBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+IGhhbmRsZVN1Ym1pdChlKX0+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGg0PlNoaXBwaW5nIEFkcmVzczo8L2g0PlxuICAgICAgICAgICAgTGluZSAxOiAgIDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwic2hpcHBpbmdfbGluZTFcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMuc2hpcHBpbmdfbGluZTF9PjwvaW5wdXQ+PGJyLz48YnIvPlxuICAgICAgICAgICAgTGluZSAyOiAgIDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwic2hpcHBpbmdfbGluZTJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgU3RyZWV0IEFkZHJlc3NcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMuc2hpcHBpbmdfbGluZTJ9PjwvaW5wdXQ+PGJyLz48YnIvPlxuICAgICAgICAgICAgQ2l0eTogICAgIDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwic2hpcHBpbmdfY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBDaXR5IE5hbWVcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMuc2hpcHBpbmdfY2l0eX0+PC9pbnB1dD48YnIvPjxici8+XG4gICAgICAgICAgICBTdGF0ZTogICAgPGlucHV0IHNpemU9XCIzMFwiIG5hbWU9XCJzaGlwcGluZ19zdGF0ZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBTdGF0ZSBOYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLnNoaXBwaW5nX3N0YXRlfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICAgIFppcCBjb2RlOiA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cInNoaXBwaW5nX3N0YXRlXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBaaXAgQ29kZVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSBkZWZhdWx0VmFsdWU9e3ZhbHVlcy5zaGlwcGluZ196aXB9PjwvaW5wdXQ+PGJyLz48YnIvPlxuICAgICAgICAgICAgUGhvbmUgIzogIDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwicGhvbmVOdW1iZXJcIiB0eXBlPVwidGVsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIFBob25lIE51bWJlclwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSBkZWZhdWx0VmFsdWU9e3ZhbHVlcy5waG9uZU51bWJlcn0+PC9pbnB1dD48YnIvPjxici8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV4dFwiID48L2lucHV0PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvVG9QcmV2fT5CYWNrPC9idXR0b24+XG4gICAgICAgICAgey8qIDxzcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1RvTmV4dH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgIDwvc3Bhbj4gKi99XG4gICAgICA8L2Rpdj5cblxuICAgIClcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBTaGlwcGluZ0luZm87Il19