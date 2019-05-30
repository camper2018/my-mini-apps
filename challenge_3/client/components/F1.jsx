//import React,{Component} from "react";
//import ReactDOM from "react-dom";

class PersonalInfo extends React.Component {

  render() {
    const {values, handleChange,goToNext, goToPrev, handleSubmit} = this.props;
    return (
      <div>
        <h1>Enter Your Personal Information</h1>
        <form id="F1" name="F1">
          Name: <input size="30" name="name" type="text" placeholder="Enter Your Full Name" onChange={(e) => handleChange(e)} defaultValue={values.name}></input><br/><br/>
          Email Adress: <input size="30" name="email" type="email" placeholder="Enter Your Email Adress" onChange={(e) => handleChange(e)} defaultValue={values.email}></input><br/><br/>
          Password: <input size="30" name="password" type="password" placeholder="Enter Your Password" onChange={(e) => handleChange(e)} defaultValue={values.password}></input><br/><br/>
          <input type="submit" value="Next" onClick={(e)=>handleSubmit(e)}></input>
        </form>
        <button onClick={goToPrev}>Back</button>
        </div>

    )
  }
}
export default PersonalInfo;

