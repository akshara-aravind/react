// *******list****
//
function ListItems(props){
    return <li>{props.numbers}</li>
  }
  function App() {
    const numbers=[1,2,3,4,5,6,7,8,9,10];
    return (
      <ul>
      {
        numbers.map((numbers)=>
        <ListItems numbers={numbers} key={numbers.toString()}/>)
      }
      </ul>
    );
  }


//   Keys help React identify which items have changed, are added, or are removed.


// ***forms**
import React from "react";

function App() {
  return (<div><NameForm/></div>);
}
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:'',
                  email:'',
                  password:'',
                  conpassword:''};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleConfirmPasswordChange(event) {
    this.setState({conpassword: event.target.value});
  }

  handleSubmit(event) {
   
    if(this.state.name.length===0 || this.state.email.length===0 || this.state.password.length===0 || this.state.conpassword.length===0){
      alert('All the fields must be filled');
    }
    else if(!isValidEmail(this.state.email)){
      alert('Enter a valid Email');
    }

    else if(this.state.password!==this.state.conpassword){
      alert('your password and confirm password should match');
    }
    else
    alert(`Welcome ${this.state.name}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </label>
        <label>
          E-mail:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
        </label>
        <label>
          confirm password:
          <input type="text" value={this.state.conpassword} onChange={this.handleConfirmPasswordChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}




