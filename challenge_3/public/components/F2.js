class ShippingInfo extends React.Component {
  render() {
    const {
      values,
      handleChange,
      goToNext,
      goToPrev,
      handleSubmit,
      insertId
    } = this.props;
    return React.createElement("div", null, React.createElement("h1", null, "Enter Shipping Information"), React.createElement("form", null, React.createElement("br", null), React.createElement("h4", null, "Shipping Adress:"), "Line 1:   ", React.createElement("input", {
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
      value: "Next",
      onClick: e => handleSubmit(e)
    })), React.createElement("button", {
      onClick: goToPrev
    }, "Back"));
  }

}

export default ShippingInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0YyLmpzeCJdLCJuYW1lcyI6WyJTaGlwcGluZ0luZm8iLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImdvVG9OZXh0IiwiZ29Ub1ByZXYiLCJoYW5kbGVTdWJtaXQiLCJpbnNlcnRJZCIsInByb3BzIiwiZSIsInNoaXBwaW5nX2xpbmUxIiwic2hpcHBpbmdfbGluZTIiLCJzaGlwcGluZ19jaXR5Iiwic2hpcHBpbmdfc3RhdGUiLCJzaGlwcGluZ196aXAiLCJwaG9uZU51bWJlciJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBT0EsWUFBUCxTQUE0QkMsS0FBSyxDQUFDQyxTQUFsQyxDQUE0QztBQUUxQ0MsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFDQyxNQUFBQSxNQUFEO0FBQVNDLE1BQUFBLFlBQVQ7QUFBc0JDLE1BQUFBLFFBQXRCO0FBQWdDQyxNQUFBQSxRQUFoQztBQUF5Q0MsTUFBQUEsWUFBekM7QUFBdURDLE1BQUFBO0FBQXZELFFBQW1FLEtBQUtDLEtBQTlFO0FBQ0EsV0FDRSxpQ0FDRSw2REFERixFQUVJLGtDQUNFLCtCQURGLEVBRUUsbURBRkYsZ0JBR1k7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLGdCQUF0QjtBQUF1QyxNQUFBLElBQUksRUFBQyxNQUE1QztBQUFtRCxNQUFBLFdBQVcsRUFBQyxzQkFBL0Q7QUFBc0YsTUFBQSxRQUFRLEVBQUdDLENBQUQsSUFBT04sWUFBWSxDQUFDTSxDQUFELENBQW5IO0FBQXdILE1BQUEsWUFBWSxFQUFFUCxNQUFNLENBQUNRO0FBQTdJLE1BSFosRUFHaUwsK0JBSGpMLEVBR3NMLCtCQUh0TCxnQkFJWTtBQUFPLE1BQUEsSUFBSSxFQUFDLElBQVo7QUFBaUIsTUFBQSxJQUFJLEVBQUMsZ0JBQXRCO0FBQXVDLE1BQUEsSUFBSSxFQUFDLE1BQTVDO0FBQW1ELE1BQUEsV0FBVyxFQUFDLHNCQUEvRDtBQUFzRixNQUFBLFFBQVEsRUFBR0QsQ0FBRCxJQUFPTixZQUFZLENBQUNNLENBQUQsQ0FBbkg7QUFBd0gsTUFBQSxZQUFZLEVBQUVQLE1BQU0sQ0FBQ1M7QUFBN0ksTUFKWixFQUlpTCwrQkFKakwsRUFJc0wsK0JBSnRMLGdCQUtZO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxlQUF0QjtBQUFzQyxNQUFBLElBQUksRUFBQyxNQUEzQztBQUFrRCxNQUFBLFdBQVcsRUFBQyxpQkFBOUQ7QUFBZ0YsTUFBQSxRQUFRLEVBQUdGLENBQUQsSUFBT04sWUFBWSxDQUFDTSxDQUFELENBQTdHO0FBQWtILE1BQUEsWUFBWSxFQUFFUCxNQUFNLENBQUNVO0FBQXZJLE1BTFosRUFLMEssK0JBTDFLLEVBSytLLCtCQUwvSyxnQkFNWTtBQUFPLE1BQUEsSUFBSSxFQUFDLElBQVo7QUFBaUIsTUFBQSxJQUFJLEVBQUMsZ0JBQXRCO0FBQXVDLE1BQUEsSUFBSSxFQUFDLE1BQTVDO0FBQW1ELE1BQUEsV0FBVyxFQUFDLGtCQUEvRDtBQUFrRixNQUFBLFFBQVEsRUFBR0gsQ0FBRCxJQUFPTixZQUFZLENBQUNNLENBQUQsQ0FBL0c7QUFBb0gsTUFBQSxZQUFZLEVBQUVQLE1BQU0sQ0FBQ1c7QUFBekksTUFOWixFQU02SywrQkFON0ssRUFNa0wsK0JBTmxMLGdCQU9ZO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxnQkFBdEI7QUFBdUMsTUFBQSxJQUFJLEVBQUMsUUFBNUM7QUFBcUQsTUFBQSxXQUFXLEVBQUMscUJBQWpFO0FBQXVGLE1BQUEsUUFBUSxFQUFHSixDQUFELElBQU9OLFlBQVksQ0FBQ00sQ0FBRCxDQUFwSDtBQUF5SCxNQUFBLFlBQVksRUFBRVAsTUFBTSxDQUFDWTtBQUE5SSxNQVBaLEVBT2dMLCtCQVBoTCxFQU9xTCwrQkFQckwsZ0JBUVk7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLGFBQXRCO0FBQW9DLE1BQUEsSUFBSSxFQUFDLEtBQXpDO0FBQStDLE1BQUEsV0FBVyxFQUFDLHlCQUEzRDtBQUFxRixNQUFBLFFBQVEsRUFBR0wsQ0FBRCxJQUFPTixZQUFZLENBQUNNLENBQUQsQ0FBbEg7QUFBdUgsTUFBQSxZQUFZLEVBQUVQLE1BQU0sQ0FBQ2E7QUFBNUksTUFSWixFQVE2SywrQkFSN0ssRUFRa0wsK0JBUmxMLEVBU0U7QUFBTyxNQUFBLElBQUksRUFBQyxRQUFaO0FBQXFCLE1BQUEsS0FBSyxFQUFDLE1BQTNCO0FBQWtDLE1BQUEsT0FBTyxFQUFHTixDQUFELElBQU1ILFlBQVksQ0FBQ0csQ0FBRDtBQUE3RCxNQVRGLENBRkosRUFhSTtBQUFRLE1BQUEsT0FBTyxFQUFFSjtBQUFqQixjQWJKLENBREY7QUFrQkQ7O0FBdEJ5Qzs7QUF5QjVDLGVBQWVQLFlBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyAgU2hpcHBpbmdJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3ZhbHVlcywgaGFuZGxlQ2hhbmdlLGdvVG9OZXh0LCBnb1RvUHJldixoYW5kbGVTdWJtaXQsIGluc2VydElkfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5FbnRlciBTaGlwcGluZyBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgICAgPGZvcm0gPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxoND5TaGlwcGluZyBBZHJlc3M6PC9oND5cbiAgICAgICAgICAgIExpbmUgMTogICA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cInNoaXBwaW5nX2xpbmUxXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFN0cmVldCBBZGRyZXNzXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLnNoaXBwaW5nX2xpbmUxfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICAgIExpbmUgMjogICA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cInNoaXBwaW5nX2xpbmUyXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFN0cmVldCBBZGRyZXNzXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLnNoaXBwaW5nX2xpbmUyfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICAgIENpdHk6ICAgICA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cInNoaXBwaW5nX2NpdHlcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2l0eSBOYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLnNoaXBwaW5nX2NpdHl9PjwvaW5wdXQ+PGJyLz48YnIvPlxuICAgICAgICAgICAgU3RhdGU6ICAgIDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwic2hpcHBpbmdfc3RhdGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgU3RhdGUgTmFtZVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSBkZWZhdWx0VmFsdWU9e3ZhbHVlcy5zaGlwcGluZ19zdGF0ZX0+PC9pbnB1dD48YnIvPjxici8+XG4gICAgICAgICAgICBaaXAgY29kZTogPGlucHV0IHNpemU9XCIzMFwiIG5hbWU9XCJzaGlwcGluZ19zdGF0ZVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgWmlwIENvZGVcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMuc2hpcHBpbmdfemlwfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICAgIFBob25lICM6ICA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cInBob25lTnVtYmVyXCIgdHlwZT1cInRlbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBQaG9uZSBOdW1iZXJcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMucGhvbmVOdW1iZXJ9PjwvaW5wdXQ+PGJyLz48YnIvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvbkNsaWNrPXsoZSk9PiBoYW5kbGVTdWJtaXQoZSl9PjwvaW5wdXQ+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z29Ub1ByZXZ9PkJhY2s8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNoaXBwaW5nSW5mbzsiXX0=