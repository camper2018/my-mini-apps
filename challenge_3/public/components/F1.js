//import React,{Component} from "react";
//import ReactDOM from "react-dom";
class PersonalInfo extends React.Component {
  render() {
    const {
      values,
      handleChange,
      goToNext,
      goToPrev
    } = this.props;
    return React.createElement("div", null, React.createElement("h1", null, "Enter Your Personal Information"), React.createElement("form", null, "Name: ", React.createElement("input", {
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
    })), React.createElement("br", null), React.createElement("br", null), React.createElement("button", {
      onClick: goToNext
    }, "Next"), React.createElement("span", null, React.createElement("button", {
      onClick: goToPrev
    }, "Back")));
  }

}

export default PersonalInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0YxLmpzeCJdLCJuYW1lcyI6WyJQZXJzb25hbEluZm8iLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsInZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImdvVG9OZXh0IiwiZ29Ub1ByZXYiLCJwcm9wcyIsImUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUVBLE1BQU1BLFlBQU4sU0FBMkJDLEtBQUssQ0FBQ0MsU0FBakMsQ0FBMkM7QUFFekNDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU07QUFBQ0MsTUFBQUEsTUFBRDtBQUFTQyxNQUFBQSxZQUFUO0FBQXNCQyxNQUFBQSxRQUF0QjtBQUFnQ0MsTUFBQUE7QUFBaEMsUUFBNEMsS0FBS0MsS0FBdkQ7QUFDQSxXQUNFLGlDQUNFLGtFQURGLEVBRUUsNENBQ1E7QUFBTyxNQUFBLElBQUksRUFBQyxJQUFaO0FBQWlCLE1BQUEsSUFBSSxFQUFDLE1BQXRCO0FBQTZCLE1BQUEsSUFBSSxFQUFDLE1BQWxDO0FBQXlDLE1BQUEsV0FBVyxFQUFDLHNCQUFyRDtBQUE0RSxNQUFBLFFBQVEsRUFBR0MsQ0FBRCxJQUFPSixZQUFZLENBQUNJLENBQUQsQ0FBekc7QUFBOEcsTUFBQSxZQUFZLEVBQUVMLE1BQU0sQ0FBQ007QUFBbkksTUFEUixFQUN5SiwrQkFEekosRUFDOEosK0JBRDlKLG9CQUVnQjtBQUFPLE1BQUEsSUFBSSxFQUFDLElBQVo7QUFBaUIsTUFBQSxJQUFJLEVBQUMsT0FBdEI7QUFBOEIsTUFBQSxJQUFJLEVBQUMsT0FBbkM7QUFBMkMsTUFBQSxXQUFXLEVBQUMseUJBQXZEO0FBQWlGLE1BQUEsUUFBUSxFQUFHRCxDQUFELElBQU9KLFlBQVksQ0FBQ0ksQ0FBRCxDQUE5RztBQUFtSCxNQUFBLFlBQVksRUFBRUwsTUFBTSxDQUFDTztBQUF4SSxNQUZoQixFQUV1SywrQkFGdkssRUFFNEssK0JBRjVLLGdCQUdZO0FBQU8sTUFBQSxJQUFJLEVBQUMsSUFBWjtBQUFpQixNQUFBLElBQUksRUFBQyxVQUF0QjtBQUFpQyxNQUFBLElBQUksRUFBQyxVQUF0QztBQUFpRCxNQUFBLFdBQVcsRUFBQyxxQkFBN0Q7QUFBbUYsTUFBQSxRQUFRLEVBQUdGLENBQUQsSUFBT0osWUFBWSxDQUFDSSxDQUFELENBQWhIO0FBQXFILE1BQUEsWUFBWSxFQUFFTCxNQUFNLENBQUNRO0FBQTFJLE1BSFosQ0FGRixFQU9TLCtCQVBULEVBT2MsK0JBUGQsRUFRRTtBQUFRLE1BQUEsT0FBTyxFQUFFTjtBQUFqQixjQVJGLEVBU0Usa0NBQ0U7QUFBUSxNQUFBLE9BQU8sRUFBRUM7QUFBakIsY0FERixDQVRGLENBREY7QUFpQkQ7O0FBckJ3Qzs7QUF1QjNDLGVBQWVQLFlBQWYiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbi8vaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuY2xhc3MgUGVyc29uYWxJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3ZhbHVlcywgaGFuZGxlQ2hhbmdlLGdvVG9OZXh0LCBnb1RvUHJldn0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RW50ZXIgWW91ciBQZXJzb25hbCBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgIE5hbWU6IDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIEZ1bGwgTmFtZVwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSBkZWZhdWx0VmFsdWU9e3ZhbHVlcy5uYW1lfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICBFbWFpbCBBZHJlc3M6IDxpbnB1dCBzaXplPVwiMzBcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWwgQWRyZXNzXCIgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9IGRlZmF1bHRWYWx1ZT17dmFsdWVzLmVtYWlsfT48L2lucHV0Pjxici8+PGJyLz5cbiAgICAgICAgICBQYXNzd29yZDogPGlucHV0IHNpemU9XCIzMFwiIG5hbWU9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBQYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUpfSBkZWZhdWx0VmFsdWU9e3ZhbHVlcy5wYXNzd29yZH0+PC9pbnB1dD5cbiAgICAgICAgICB7LyogPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIk5leHRcIiBvblN1Ym1pdD17KGUpPT4gdGhpcy5jb250aW51ZX0+PC9pbnB1dD4gKi99XG4gICAgICAgIDwvZm9ybT48YnIvPjxici8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z29Ub05leHR9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb1RvUHJldn0+QmFjazwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQZXJzb25hbEluZm87XG5cbiJdfQ==