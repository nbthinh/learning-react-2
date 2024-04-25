import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
      // name: "Mặc cái quần",
      // channel: "Hoi Dan IT"
      firstName: "",
      lastName: "",
      arrJobs: [
        { id: 'abcJob1', title: 'Developers', salary: '500 $' },
        { id: 'abcJob2', title: 'Testers', salary: '400 $' },
        { id: 'abcJob3', title: 'Project Managers', salary: '1000 $' },

      ]
    }
    // handleOnChangeInput(event) {
    //   this.setState({
    //     name: event.target.value,
    //     channel: "Hello world"
    //   })
    //   // console.log("this.state.name = ", this.state.name);
    // }
    // handleClickMe() {
    //   alert("Hello world");
    // }

    handleChangeFirstName(event) {
      console.log("handleChangeFirstName");
      this.setState({
        firstName: event.target.value
      })
    }

    handleChangeLastName(event) {
      console.log("handleChangeFirstName");
      this.setState({
        lastName: event.target.value
      })
    }
    
    handleSubmit(event) {
      event.preventDefault();
      console.log("Hello world = ", this.state)
    }

    render() {
      console.log(">>>>> call render: state = ", this.state)
      return (
        <>
          <div>Hello html form</div>
          <form>
            <label>First name:</label><br/>
            <input
              type="text"
              value={this.state.firstName}
              onChange={(event) => this.handleChangeFirstName(event)}
            /><br/>
            <label>Last name:</label><br/>
            <input
              type="text"
              value={this.state.lastName}
              onChange={(event) => this.handleChangeLastName(event)}
            /><br/><br/>
            <input
              type="submit"
              onClick={(event) => this.handleSubmit(event)}
            />
          </form> 
          <ChildComponent 
            name={this.state.firstName} 
            age={"25"} 
            address={"Hà Nội"} 
            arrJobs={ this.state.arrJobs }
          s/>
          {/* <ChildComponent name={'Child two'} />
          <ChildComponent name={'Child three'} /> */}
        </>
      );
    }
  }

export default MyComponent;