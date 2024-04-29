import React from 'react';


class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }
    handleChangeTitleJob(event) {
        console.log("handleChangeTitleJob");
        this.setState({
          title: event.target.value
        })
      }
  
      handleChangeSalary(event) {
        console.log("handleChangeSalary");
        this.setState({
          salary: event.target.value
        })
      }
      
      handleSubmit(event) {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
          alert("Missing required params");
          return;
        }
        this.props.addNewJob({
          id: Math.floor(Math.random()* 1000),
          title: this.state.title,
          salary: this.state.salary
        })
        this.setState({
          title: '',
          salary: ''
        })
      }
    render() {
        return (
            <form>
                <label>Job title:</label><br/>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                /><br/>
                <label>Salary:</label><br/>
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                /><br/><br/>
                <input
                    type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form> 
        );
    }

    // componentDidUpdate(prevProps, prevStates) {
    //   console.log("Mặc cái quần = ", prevProps, prevStates);
    // }
}

export default AddComponent;