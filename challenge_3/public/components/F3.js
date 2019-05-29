class BillingInfo extends React.Component {
  render() {
    const {
      values,
      handleChange,
      goToNext,
      goToPrev
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
    }), React.createElement("br", null), React.createElement("br", null)), React.createElement("br", null), React.createElement("br", null), React.createElement("button", {
      onClick: goToNext
    }, "Next"), React.createElement("span", null, React.createElement("button", {
      onClick: goToPrev
    }, "Back")));
  }

}

export default BillingInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0YzLmpzeCJdLCJuYW1lcyI6WyJCaWxsaW5nSW5mbyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIiwidmFsdWVzIiwiaGFuZGxlQ2hhbmdlIiwiZ29Ub05leHQiLCJnb1RvUHJldiIsInByb3BzIiwiZSIsImNyZWRpdENhcmQiLCJleHBpcnlEYXRlIiwiQ1ZWIiwiYmlsbGluZ1ppcCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBT0EsV0FBUCxTQUEyQkMsS0FBSyxDQUFDQyxTQUFqQyxDQUEyQztBQUN6Q0MsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFDQyxNQUFBQSxNQUFEO0FBQVNDLE1BQUFBLFlBQVQ7QUFBc0JDLE1BQUFBLFFBQXRCO0FBQWdDQyxNQUFBQTtBQUFoQyxRQUE0QyxLQUFLQyxLQUF2RDtBQUNBLFdBQ0UsaUNBQ0UsNERBREYsRUFFSSxrQ0FDRSwrQkFERiwwQkFFc0I7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLFlBQXRCO0FBQW1DLE1BQUEsSUFBSSxFQUFDLE1BQXhDO0FBQStDLE1BQUEsV0FBVyxFQUFDLDBCQUEzRDtBQUFzRixNQUFBLFFBQVEsRUFBR0MsQ0FBRCxJQUFPSixZQUFZLENBQUNJLENBQUQsQ0FBbkg7QUFBd0gsTUFBQSxZQUFZLEVBQUVMLE1BQU0sQ0FBQ007QUFBN0ksTUFGdEIsRUFFdUwsK0JBRnZMLEVBRTRMLCtCQUY1TCwwQkFHc0I7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLFlBQXRCO0FBQW1DLE1BQUEsSUFBSSxFQUFDLE1BQXhDO0FBQStDLE1BQUEsV0FBVyxFQUFDLHdCQUEzRDtBQUFvRixNQUFBLFFBQVEsRUFBR0QsQ0FBRCxJQUFPSixZQUFZLENBQUNJLENBQUQsQ0FBakg7QUFBc0gsTUFBQSxZQUFZLEVBQUVMLE1BQU0sQ0FBQ087QUFBM0ksTUFIdEIsRUFHcUwsK0JBSHJMLEVBRzBMLCtCQUgxTCwwQkFJc0I7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLEtBQXRCO0FBQTRCLE1BQUEsSUFBSSxFQUFDLFFBQWpDO0FBQTBDLE1BQUEsV0FBVyxFQUFDLGdDQUF0RDtBQUF1RixNQUFBLFFBQVEsRUFBR0YsQ0FBRCxJQUFPSixZQUFZLENBQUNJLENBQUQsQ0FBcEg7QUFBeUgsTUFBQSxZQUFZLEVBQUVMLE1BQU0sQ0FBQ1E7QUFBOUksTUFKdEIsRUFJaUwsK0JBSmpMLEVBSXNMLCtCQUp0TCwwQkFLc0I7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLFlBQXRCO0FBQW1DLE1BQUEsSUFBSSxFQUFDLFFBQXhDO0FBQWlELE1BQUEsV0FBVyxFQUFDLGtDQUE3RDtBQUFnRyxNQUFBLFFBQVEsRUFBR0gsQ0FBRCxJQUFPSixZQUFZLENBQUNJLENBQUQsQ0FBN0g7QUFBa0ksTUFBQSxZQUFZLEVBQUVMLE1BQU0sQ0FBQ1M7QUFBdkosTUFMdEIsRUFLaU0sK0JBTGpNLEVBS3NNLCtCQUx0TSxDQUZKLEVBU1csK0JBVFgsRUFTZ0IsK0JBVGhCLEVBVUk7QUFBUSxNQUFBLE9BQU8sRUFBRVA7QUFBakIsY0FWSixFQVdJLGtDQUNFO0FBQVEsTUFBQSxPQUFPLEVBQUVDO0FBQWpCLGNBREYsQ0FYSixDQURGO0FBa0JEOztBQXJCd0M7O0FBd0IzQyxlQUFlUCxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgIEJpbGxpbmdJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt2YWx1ZXMsIGhhbmRsZUNoYW5nZSxnb1RvTmV4dCwgZ29Ub1ByZXZ9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkVudGVyIEJpbGxpbmcgSW5mb3JtYXRpb248L2gxPlxuICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIENyZWRpdCBDYXJkIE51bWJlcjogPGlucHV0IHNpemU9XCIzMFwiIG5hbWU9XCJjcmVkaXRDYXJkXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIENyZWRpdCBDYXJkIE51bWJlclwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSBkZWZhdWx0VmFsdWU9e3ZhbHVlcy5jcmVkaXRDYXJkfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICAgIENyZWRpdCBFeHBpcnkgRGF0ZTogPGlucHV0IHNpemU9XCIzMFwiIG5hbWU9XCJleHBpcnlEYXRlXCIgdHlwZT1cImRhdGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIENhcmQgRXhwaXJ5IERhdGVcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMuZXhwaXJ5RGF0ZX0+PC9pbnB1dD48YnIvPjxici8+XG4gICAgICAgICAgICBDVlYgTnVtYmVyOiAgICAgICAgIDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwiQ1ZWXCIgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2FyZCBWZXJpZmljYXRpb24gTnVtYmVyXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLkNWVn0+PC9pbnB1dD48YnIvPjxici8+XG4gICAgICAgICAgICBCaWxsaW5nIFppcCBDb2RlOiAgIDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwiYmlsbGluZ1ppcFwiIHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIEJpbGxpbmcgWmlwIE9mIENyZWRpdCBDYXJkXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLmJpbGxpbmdaaXB9PjwvaW5wdXQ+PGJyLz48YnIvPlxuICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25TdWJtaXQ9eyhlKT0+IHRoaXMuY29udGludWV9PjwvaW5wdXQ+ICovfVxuICAgICAgICAgIDwvZm9ybT48YnIvPjxici8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1RvTmV4dH0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1RvUHJldn0+QmFjazwvYnV0dG9uPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEJpbGxpbmdJbmZvOyJdfQ==