// import React,{Component} from "react";
// import ReactDOM from "react-dom";
import React from "https://unpkg.com/react@16/umd/react.development.js";
import ReactDOM from "https://unpkg.com/react-dom@16/umd/react-dom.development.js"
import CheckoutForm from './components/F1';
console.log(CheckoutForm);
class App extends React.Component {
  render() {
    return (
    <div className="App">
      <h1>shopping checkout page</h1>
      {/* <CheckoutForm/> */}
    </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

