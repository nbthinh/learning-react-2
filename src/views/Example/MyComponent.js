import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        // name: "Mặc cái quần",
        // channel: "Hoi Dan IT"
        arrJobs: [
          { id: 'abcJob1', title: 'Developers', salary: '500' },
          { id: 'abcJob2', title: 'Testers', salary: '400' },
          { id: 'abcJob3', title: 'Project Managers', salary: '1000' },
  
        ]
      };
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

    addNewJob = (job) => {
      let currentJobs = this.state.arrJobs;
      currentJobs.push(job);
      this.setState({
        // arrJobs: currentJobs
        arrJobs: [...this.state.arrJobs, job]
      })
    }

    deleteAJob = (job) => {  
      this.setState({
        arrJobs: this.state.arrJobs.filter(item => item !== job)
      })
    }
    

    render() {
      console.log(">>>>> call render: state = ", this.state)
      return (
        <>
          <div>Hello html form</div>
          <AddComponent
            addNewJob={this.addNewJob}
          />

          
          <ChildComponent 
            arrJobs={ this.state.arrJobs }
            deleteAJob={this.deleteAJob}
          />
          {/* <ChildComponent name={'Child two'} />
          <ChildComponent name={'Child three'} /> */}
        </>
      );
    }
  }

export default MyComponent;