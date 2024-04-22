import React from 'react';

class MyComponent extends React.Component {
    state = {
      name: "Mặc cái quần",
      channel: "Hoi Dan IT"
    }
    handleOnChangeInput(event) {
      this.setState({
        name: event.target.value,
        channel: "Hello world"
      })
      // console.log("this.state.name = ", this.state.name);
    }
    handleClickMe() {
      alert("Hello world");
    }

    render() {
      console.log(">>>>> call render: state = ", this.state)
      return (
        <>
          <div className="first">
            {/* {
              console.log("Mặc cái quần")
            } */}
            <input type="text" value={this.state.name} onChange = {(event) => this.handleOnChangeInput(event)} />
            My nickname is : {this.state.name}
          </div>
          <div className="second">
            My youtube channel is: {this.state.channel}
          </div>
          <button className="btn btn-primary" onClick={() => this.handleClickMe()}>Click Me</button>
        </>
      );
    }
  }

export default MyComponent;