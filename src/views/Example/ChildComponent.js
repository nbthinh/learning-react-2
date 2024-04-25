import React from 'react';

class ChildComponent extends React.Component {
    state = {
      // name: "Mặc cái quần",
      // channel: "Hoi Dan IT"
      firstName: "",
      lastName: ""
    }

    render() {
      // let name = this.props.name || "no name";
      // let age = this.props.age || "no age";
      let {name, age, address, arrJobs } = this.props;
      console.log(">>>>> this.props = ", this.props, name, age, arrJobs);
      let a = '';
      return (
        <>
          <div className="job-lists">
            {
              a = arrJobs.map((item, index) => {
                return (<div key={item.id}>{item.title} - {item.salary}</div>);
              })
            }
            {console.log(">>> check map = ", a)}
          </div>
        </>
      );
    }
  }

export default ChildComponent;