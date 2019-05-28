// import React,{Component} from "react";
// import ReactDOM from "react-dom";

import CheckoutForm from './components/F1.js';
class App extends React.Component {
  render() {
    return (
    <div className="App">
      <h1>shopping checkout page</h1>
      <CheckoutForm/>
    </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

