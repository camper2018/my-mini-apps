//import React,{Component} from "react";
//import ReactDOM from "react-dom";
class PersonalInfo extends React.Component {
  render() {
    const {
      values,
      handleChange,
      goToNext,
      goToPrev,
      handleSubmit,
      insertId
    } = this.props;
    return React.createElement("div", null, React.createElement("h1", null, "Enter Your Personal Information"), React.createElement("form", {
      id: "F1",
      name: "F1"
    }, "Name: ", React.createElement("input", {
      size: "30",
      name: "name",
      type: "text",
      placeholder: "Enter Your Full Name",
      onChange: e => handleChange(e),
      defaultValue: values.name
    }), React.createElement("br", null), React.createElement("br", null), "Email Adress: ", React.createElement("input", {
      size: "30",
      name: "email",
      type: "email",
      placeholder: "Enter Your Email Adress",
      onChange: e => handleChange(e),
      defaultValue: values.email
    }), React.createElement("br", null), React.createElement("br", null), "Password: ", React.createElement("input", {
      size: "30",
      name: "password",
      type: "password",
      placeholder: "Enter Your Password",
      onChange: e => handleChange(e),
      defaultValue: values.password
    }), React.createElement("br", null), React.createElement("br", null), React.createElement("input", {
      type: "submit",
      value: "Next",
      onClick: e => handleSubmit(e)
    })), React.createElement("button", {
      onClick: goToPrev
    }, "Back"));
  }

}

export default PersonalInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0YxLmpzeCJdLCJuYW1lcyI6WyJQZXJzb25hbEluZm8iLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImdvVG9OZXh0IiwiZ29Ub1ByZXYiLCJoYW5kbGVTdWJtaXQiLCJpbnNlcnRJZCIsInByb3BzIiwiZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBRUEsTUFBTUEsWUFBTixTQUEyQkMsS0FBSyxDQUFDQyxTQUFqQyxDQUEyQztBQUV6Q0MsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFDQyxNQUFBQSxNQUFEO0FBQVNDLE1BQUFBLFlBQVQ7QUFBc0JDLE1BQUFBLFFBQXRCO0FBQWdDQyxNQUFBQSxRQUFoQztBQUEwQ0MsTUFBQUEsWUFBMUM7QUFBdURDLE1BQUFBO0FBQXZELFFBQW1FLEtBQUtDLEtBQTlFO0FBQ0EsV0FDRSxpQ0FDRSxrRUFERixFQUVFO0FBQU0sTUFBQSxFQUFFLEVBQUMsSUFBVDtBQUFjLE1BQUEsSUFBSSxFQUFDO0FBQW5CLGlCQUNRO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxNQUF0QjtBQUE2QixNQUFBLElBQUksRUFBQyxNQUFsQztBQUF5QyxNQUFBLFdBQVcsRUFBQyxzQkFBckQ7QUFBNEUsTUFBQSxRQUFRLEVBQUdDLENBQUQsSUFBT04sWUFBWSxDQUFDTSxDQUFELENBQXpHO0FBQThHLE1BQUEsWUFBWSxFQUFFUCxNQUFNLENBQUNRO0FBQW5JLE1BRFIsRUFDeUosK0JBRHpKLEVBQzhKLCtCQUQ5SixvQkFFZ0I7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLE9BQXRCO0FBQThCLE1BQUEsSUFBSSxFQUFDLE9BQW5DO0FBQTJDLE1BQUEsV0FBVyxFQUFDLHlCQUF2RDtBQUFpRixNQUFBLFFBQVEsRUFBR0QsQ0FBRCxJQUFPTixZQUFZLENBQUNNLENBQUQsQ0FBOUc7QUFBbUgsTUFBQSxZQUFZLEVBQUVQLE1BQU0sQ0FBQ1M7QUFBeEksTUFGaEIsRUFFdUssK0JBRnZLLEVBRTRLLCtCQUY1SyxnQkFHWTtBQUFPLE1BQUEsSUFBSSxFQUFDLElBQVo7QUFBaUIsTUFBQSxJQUFJLEVBQUMsVUFBdEI7QUFBaUMsTUFBQSxJQUFJLEVBQUMsVUFBdEM7QUFBaUQsTUFBQSxXQUFXLEVBQUMscUJBQTdEO0FBQW1GLE1BQUEsUUFBUSxFQUFHRixDQUFELElBQU9OLFlBQVksQ0FBQ00sQ0FBRCxDQUFoSDtBQUFxSCxNQUFBLFlBQVksRUFBRVAsTUFBTSxDQUFDVTtBQUExSSxNQUhaLEVBR3dLLCtCQUh4SyxFQUc2SywrQkFIN0ssRUFJRTtBQUFPLE1BQUEsSUFBSSxFQUFDLFFBQVo7QUFBcUIsTUFBQSxLQUFLLEVBQUMsTUFBM0I7QUFBa0MsTUFBQSxPQUFPLEVBQUdILENBQUQsSUFBS0gsWUFBWSxDQUFDRyxDQUFEO0FBQTVELE1BSkYsQ0FGRixFQVFFO0FBQVEsTUFBQSxPQUFPLEVBQUVKO0FBQWpCLGNBUkYsQ0FERjtBQWFEOztBQWpCd0M7O0FBbUIzQyxlQUFlUCxZQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNsYXNzIFBlcnNvbmFsSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt2YWx1ZXMsIGhhbmRsZUNoYW5nZSxnb1RvTmV4dCwgZ29Ub1ByZXYsIGhhbmRsZVN1Ym1pdCxpbnNlcnRJZH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RW50ZXIgWW91ciBQZXJzb25hbCBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgIDxmb3JtIGlkPVwiRjFcIiBuYW1lPVwiRjFcIj5cbiAgICAgICAgICBOYW1lOiA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBGdWxsIE5hbWVcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMubmFtZX0+PC9pbnB1dD48YnIvPjxici8+XG4gICAgICAgICAgRW1haWwgQWRyZXNzOiA8aW5wdXQgc2l6ZT1cIjMwXCIgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIEVtYWlsIEFkcmVzc1wiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSBkZWZhdWx0VmFsdWU9e3ZhbHVlcy5lbWFpbH0+PC9pbnB1dD48YnIvPjxici8+XG4gICAgICAgICAgUGFzc3dvcmQ6IDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgUGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlKX0gZGVmYXVsdFZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9PjwvaW5wdXQ+PGJyLz48YnIvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXh0XCIgb25DbGljaz17KGUpPT5oYW5kbGVTdWJtaXQoZSl9PjwvaW5wdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1RvUHJldn0+QmFjazwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUGVyc29uYWxJbmZvO1xuXG4iXX0=