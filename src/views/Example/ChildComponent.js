import React from 'react';
import './Demo.scss';
class ChildComponent extends React.Component {
    state = {
      showJobs: false
    }

    handleShowHide() {
      this.setState({
        showJobs: !this.state.showJobs
      })
    }
    handleOnclickDelete = (job) => {
      console.log(">>> handleOnclickDelete = ", job)
      this.props.deleteAJob(job);
    }

    render() {
      let { arrJobs } = this.props;
      let { showJobs } = this.state;
      // let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
      // console.log('>>> check showJobs = ', check);
      let a = '';
      return (
        <>
          {
            !showJobs ?
              <div>
                <button
                  className="btn-show"
                  onClick={() => this.handleShowHide()}
                >Show</button>
              </div>
            :
              <>
                <div className="job-lists">
                  {
                    a = arrJobs.map((item, index) => {
                      // if (item.salary >=500){
                      if (true){
                        return (
                          <>
                            <div key={item.id}>{item.title} - {item.salary} <></> <span style={{cursor: "pointer"}} onClick={() => this.handleOnclickDelete(item)}>x</span></div>
                          </>
                        );
                      }
                    })
                  }
                  {console.log(">>> check map = ", a)}
                </div>
                <div><button onClick={() => this.handleShowHide()} >Hide</button></div>
              </>
          }
          

        </>
      );
    }
  }

// const ChildComponent = (props) => {
//   console.log(">>> check props = ", props);
//   let {arrJobs} = props;
//   return (
//     <>
//       <div className="job-lists">
//         {
//           arrJobs.map((item, index) => {
//             if (item.salary >= 500) {
//               return (<div key={item.id}>{item.title} - {item.salary} $</div>);
//             }
//           })
//         }
//       </div>
//     </>
//   );
// } 

export default ChildComponent;