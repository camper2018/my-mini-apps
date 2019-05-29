class ShippingInfo extends React.Component {
  // handleAddress(e) {
  //   let address = e.target.value;
  //   console.log(address)
  //   this.setState({
  //     shipping_line: this.state.shipping_line + " " + address
  //   });
  // }
  render() {
    const {
      values,
      handleChange,
      goToNext,
      goToPrev
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
    })), React.createElement("br", null), React.createElement("br", null), React.createElement("button", {
      onClick: goToNext
    }, "Next"), React.createElement("span", null, React.createElement("button", {
      onClick: goToPrev
    }, "Back")));
  }

}

export default ShippingInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0YyLmpzeCJdLCJuYW1lcyI6WyJTaGlwcGluZ0luZm8iLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImdvVG9OZXh0IiwiZ29Ub1ByZXYiLCJwcm9wcyIsImUiLCJzaGlwcGluZ19saW5lMSIsInNoaXBwaW5nX2xpbmUyIiwic2hpcHBpbmdfY2l0eSIsInNoaXBwaW5nX3N0YXRlIiwic2hpcHBpbmdfemlwIiwicGhvbmVOdW1iZXIiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU9BLFlBQVAsU0FBNEJDLEtBQUssQ0FBQ0MsU0FBbEMsQ0FBNEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFDQyxNQUFBQSxNQUFEO0FBQVNDLE1BQUFBLFlBQVQ7QUFBc0JDLE1BQUFBLFFBQXRCO0FBQWdDQyxNQUFBQTtBQUFoQyxRQUE0QyxLQUFLQyxLQUF2RDtBQUNBLFdBQ0UsaUNBQ0UsNkRBREYsRUFFSSxrQ0FDRSwrQkFERixFQUVFLG1EQUZGLGdCQUdZO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxnQkFBdEI7QUFBdUMsTUFBQSxJQUFJLEVBQUMsTUFBNUM7QUFBbUQsTUFBQSxXQUFXLEVBQUMsc0JBQS9EO0FBQXNGLE1BQUEsUUFBUSxFQUFHQyxDQUFELElBQU9KLFlBQVksQ0FBQ0ksQ0FBRCxDQUFuSDtBQUF3SCxNQUFBLFlBQVksRUFBRUwsTUFBTSxDQUFDTTtBQUE3SSxNQUhaLEVBR2lMLCtCQUhqTCxFQUdzTCwrQkFIdEwsZ0JBSVk7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLGdCQUF0QjtBQUF1QyxNQUFBLElBQUksRUFBQyxNQUE1QztBQUFtRCxNQUFBLFdBQVcsRUFBQyxzQkFBL0Q7QUFBc0YsTUFBQSxRQUFRLEVBQUdELENBQUQsSUFBT0osWUFBWSxDQUFDSSxDQUFELENBQW5IO0FBQXdILE1BQUEsWUFBWSxFQUFFTCxNQUFNLENBQUNPO0FBQTdJLE1BSlosRUFJaUwsK0JBSmpMLEVBSXNMLCtCQUp0TCxnQkFLWTtBQUFPLE1BQUEsSUFBSSxFQUFDLElBQVo7QUFBaUIsTUFBQSxJQUFJLEVBQUMsZUFBdEI7QUFBc0MsTUFBQSxJQUFJLEVBQUMsTUFBM0M7QUFBa0QsTUFBQSxXQUFXLEVBQUMsaUJBQTlEO0FBQWdGLE1BQUEsUUFBUSxFQUFHRixDQUFELElBQU9KLFlBQVksQ0FBQ0ksQ0FBRCxDQUE3RztBQUFrSCxNQUFBLFlBQVksRUFBRUwsTUFBTSxDQUFDUTtBQUF2SSxNQUxaLEVBSzBLLCtCQUwxSyxFQUsrSywrQkFML0ssZ0JBTVk7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLGdCQUF0QjtBQUF1QyxNQUFBLElBQUksRUFBQyxNQUE1QztBQUFtRCxNQUFBLFdBQVcsRUFBQyxrQkFBL0Q7QUFBa0YsTUFBQSxRQUFRLEVBQUdILENBQUQsSUFBT0osWUFBWSxDQUFDSSxDQUFELENBQS9HO0FBQW9ILE1BQUEsWUFBWSxFQUFFTCxNQUFNLENBQUNTO0FBQXpJLE1BTlosRUFNNkssK0JBTjdLLEVBTWtMLCtCQU5sTCxnQkFPWTtBQUFPLE1BQUEsSUFBSSxFQUFDLElBQVo7QUFBaUIsTUFBQSxJQUFJLEVBQUMsZ0JBQXRCO0FBQXVDLE1BQUEsSUFBSSxFQUFDLFFBQTVDO0FBQXFELE1BQUEsV0FBVyxFQUFDLHFCQUFqRTtBQUF1RixNQUFBLFFBQVEsRUFBR0osQ0FBRCxJQUFPSixZQUFZLENBQUNJLENBQUQsQ0FBcEg7QUFBeUgsTUFBQSxZQUFZLEVBQUVMLE1BQU0sQ0FBQ1U7QUFBOUksTUFQWixFQU9nTCwrQkFQaEwsRUFPcUwsK0JBUHJMLGdCQVFZO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxhQUF0QjtBQUFvQyxNQUFBLElBQUksRUFBQyxLQUF6QztBQUErQyxNQUFBLFdBQVcsRUFBQyx5QkFBM0Q7QUFBcUYsTUFBQSxRQUFRLEVBQUdMLENBQUQsSUFBT0osWUFBWSxDQUFDSSxDQUFELENBQWxIO0FBQXVILE1BQUEsWUFBWSxFQUFFTCxNQUFNLENBQUNXO0FBQTVJLE1BUlosQ0FGSixFQVlXLCtCQVpYLEVBWWdCLCtCQVpoQixFQWFJO0FBQVEsTUFBQSxPQUFPLEVBQUVUO0FBQWpCLGNBYkosRUFjSSxrQ0FDRTtBQUFRLE1BQUEsT0FBTyxFQUFFQztBQUFqQixjQURGLENBZEosQ0FERjtBQXFCRDs7QUEvQnlDOztBQWtDNUMsZUFBZVAsWUFBZiIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzICBTaGlwcGluZ0luZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvLyBoYW5kbGVBZGRyZXNzKGUpIHtcbiAgLy8gICBsZXQgYWRkcmVzcyA9IGUudGFyZ2V0LnZhbHVlO1xuICAvLyAgIGNvbnNvbGUubG9nKGFkZHJlc3MpXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBzaGlwcGluZ19saW5lOiB0aGlzLnN0YXRlLnNoaXBwaW5nX2xpbmUgKyBcIiBcIiArIGFkZHJlc3NcbiAgLy8gICB9KTtcbiAgLy8gfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3ZhbHVlcywgaGFuZGxlQ2hhbmdlLGdvVG9OZXh0LCBnb1RvUHJldn0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RW50ZXIgU2hpcHBpbmcgSW5mb3JtYXRpb248L2gxPlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxoND5TaGlwcGluZyBBZHJlc3M6PC9oND5cbiAgICAgICAgICAgIExpbmUgMTogICA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cInNoaXBwaW5nX2xpbmUxXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFN0cmVldCBBZGRyZXNzXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLnNoaXBwaW5nX2xpbmUxfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICAgIExpbmUgMjogICA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cInNoaXBwaW5nX2xpbmUyXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFN0cmVldCBBZGRyZXNzXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLnNoaXBwaW5nX2xpbmUyfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICAgIENpdHk6ICAgICA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cInNoaXBwaW5nX2NpdHlcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2l0eSBOYW1lXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLnNoaXBwaW5nX2NpdHl9PjwvaW5wdXQ+PGJyLz48YnIvPlxuICAgICAgICAgICAgU3RhdGU6ICAgIDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwic2hpcHBpbmdfc3RhdGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgU3RhdGUgTmFtZVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSBkZWZhdWx0VmFsdWU9e3ZhbHVlcy5zaGlwcGluZ19zdGF0ZX0+PC9pbnB1dD48YnIvPjxici8+XG4gICAgICAgICAgICBaaXAgY29kZTogPGlucHV0IHNpemU9XCIzMFwiIG5hbWU9XCJzaGlwcGluZ19zdGF0ZVwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgWmlwIENvZGVcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMuc2hpcHBpbmdfemlwfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICAgIFBob25lICM6ICA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cInBob25lTnVtYmVyXCIgdHlwZT1cInRlbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBQaG9uZSBOdW1iZXJcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMucGhvbmVOdW1iZXJ9PjwvaW5wdXQ+XG4gICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvblN1Ym1pdD17KGUpPT4gdGhpcy5jb250aW51ZX0+PC9pbnB1dD4gKi99XG4gICAgICAgICAgPC9mb3JtPjxici8+PGJyLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvVG9OZXh0fT5OZXh0PC9idXR0b24+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvVG9QcmV2fT5CYWNrPC9idXR0b24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG5cbiAgICApXG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgU2hpcHBpbmdJbmZvOyJdfQ==