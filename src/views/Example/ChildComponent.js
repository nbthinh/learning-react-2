import React from 'react';

class ChildComponent extends React.Component {
    state = {
      // name: "Mặc cái quần",
      // channel: "Hoi Dan IT"
      firstName: "",
      lastName: ""
    }

    render() {
      return (
        <>
          <div>Child component: Đái trong quần: {this.props.name}</div>
        </>
      );
    }
  }

export default ChildComponent;