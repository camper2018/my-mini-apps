//import React,{Component} from "react";
//import ReactDOM from "react-dom";

class PersonalInfo extends React.Component {

  render() {
    const {values, handleChange,goToNext, goToPrev} = this.props;
    return (
      <div>
        <h1>Enter Your Personal Information</h1>
        <form>
          Name: <input size="30" name="name" type="text" placeholder="Enter Your Full Name" onChange={(e) => handleChange(e)} defaultValue={values.name}></input><br/><br/>
          Email Adress: <input size="30" name="email" type="email" placeholder="Enter Your Email Adress" onChange={(e) => handleChange(e)} defaultValue={values.email}></input><br/><br/>
          Password: <input size="30" name="password" type="password" placeholder="Enter Your Password" onChange={(e) => handleChange(e)} defaultValue={values.password}></input>
          {/* <input type="submit" value="Next" onSubmit={(e)=> this.continue}></input> */}
        </form><br/><br/>
        <button onClick={goToNext}>Next</button>
        <span>
          <button onClick={goToPrev}>Back</button>
        </span>

      </div>

    )
  }
}
export default PersonalInfo;

