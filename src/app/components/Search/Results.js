import React from "react";
import helpers from "../../utils/helpers";
import { connect } from "react-redux";
import { fetchHours } from "../../actions/hours_actions";

export class Results extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      showModal: false
    }
    this.viewHoursClick = this.viewHoursClick.bind(this);
    this.handleClick = this.handleClick.bind(this);  
    this.renderModal = this.renderModal.bind(this) 
    this.onModalClose = this.onModalClose.bind(this)
  }

  handleClick(place) {
    helpers.postSaved(place.name, place.icon, place.vicinity, place.reference); 
    alert('Successfully Saved')
  }

  viewHoursClick(place) { 
    this.setState({
      showModal: true
    }) 
    console.log(place)
    this.props.fetchHours(place.reference);
  }

  onModalClose() {
    this.setState({
      showModal: false
    }) 
  }

  makePlaceEntry(place, key) { 
    console.log(place)
    return <li key={key} className="result-item">
        <h3>{place.name}</h3>
        <h4>{place.vicinity}</h4>    
        <h4>Open Now: { place.opening_hours.open_now ? "YES" : "No" }</h4>    
        <h4>Rating: {place.rating}</h4>    

        <button class="view-hours-btn" onClick={() => this.viewHoursClick(place)}>
          View Hours
        </button>
        <br />
        <br />
        <button onClick={() => this.handleClick(place)} class="save-btn">Save</button>
      </li>;
  } 

  renderModal() {
    //grab the hours from the props and render it as ul li    
    // alert('render trigerred')  
    console.log(this.props.hours)
    return (
      <div className="hours-modal">  
        <h4>Opening Hours</h4>
        <ul id="hours-table"> 
          {
            this.props.hours.map((hour, i) => (<li className="hour-entry" key={i}>{hour}</li>))
          } 
        </ul> 
        <button class="modal-close-btn" onClick={this.onModalClose}>CLOSE</button>
      </div>
    )
  }

  renderArticles() {
    // should render all places in the results array
    // Each results contains place, name, vicinity

    // Each results has a "SAVE" and "VIEW HOURS" button

    return ( 
      <div>
      {this.state.showModal && this.renderModal()}
      <ul id="result-list">
        {this.props.results.map((place, index) =>
          this.makePlaceEntry(place, index)
        )}
      </ul> 
      </div>
    );
  }

  // A helper method for mapping through articles and outputting some HTML
  // renderArticles() {
  //   return this.props.results.map(
  //     function(place, index) {
  //       return (
  //         <div key={index}>
  //           <li className="list-group-item">
  //             <h3>
  //               <span>
  //                 <h2>{place.name}</h2>
  //               </span>
  //               <br />
  //               <span>
  //                 <em>{place.vicinity}</em>
  //               </span>
  //               <span className="btn-group pull-right">
  //                 <button
  //                   type="button"
  //                   className="btn btn-warning"
  //                   data-toggle="modal"
  //                   data-target="#myModal1"
  //                   onClick={() => this.handleClick(place)}
  //                 >
  //                   Save
  //                 </button>

  //                 <div id="myModal1" className="modal fade" role="dialog">
  //                   <div className="modal-dialog">
  //                     <div className="modal-content">
  //                       <div className="modal-header">
  //                         <button
  //                           type="button"
  //                           className="close"
  //                           data-dismiss="modal"
  //                         >
  //                           &times;
  //                         </button>
  //                         <h2 className="modal-title text-center">
  //                           Restaurant Was Saved!
  //                         </h2>
  //                       </div>
  //                       <div className="modal-body">
  //                         <p>
  //                           Please scroll up and click the Saved link to view
  //                           your saved venues.
  //                         </p>
  //                       </div>
  //                       <div className="modal-footer">
  //                         <button
  //                           type="button"
  //                           className="btn btn-default"
  //                           data-dismiss="modal"
  //                         >
  //                           Close
  //                         </button>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </span>
  //               <span className="btn-group pull-right">
  //                 <button
  //                   data-toggle="modal"
  //                   data-target="#myModal"
  //                   className="btn btn-success view-hours-btn"
  //                   onClick={() => this.viewHoursClick(place)}
  //                 >
  //                   View Hours
  //                 </button>

  //                 <div id="myModal" className="modal fade" role="dialog">
  //                   <div className="modal-dialog">
  //                     <div className="modal-content">
  //                       <div className="modal-header">
  //                         <button
  //                           type="button"
  //                           className="close"
  //                           data-dismiss="modal"
  //                         >
  //                           &times;
  //                         </button>
  //                         <h3 className="modal-title text-center">Hours</h3>
  //                       </div>
  //                       <div className="modal-body">
  //                         <ul>
  //                           <li className="list-group-item">
  //                             <p>{this.props.hours[0]}</p>
  //                           </li>
  //                           <li className="list-group-item">
  //                             <p>{this.props.hours[1]}</p>
  //                           </li>
  //                           <li className="list-group-item">
  //                             <p>{this.props.hours[2]}</p>
  //                           </li>
  //                           <li className="list-group-item">
  //                             <p>{this.props.hours[3]}</p>
  //                           </li>
  //                           <li className="list-group-item">
  //                             <p>{this.props.hours[4]}</p>
  //                           </li>
  //                           <li className="list-group-item">
  //                             <p>{this.props.hours[5]}</p>
  //                           </li>
  //                           <li className="list-group-item">
  //                             <p>{this.props.hours[6]}</p>
  //                           </li>
  //                         </ul>
  //                       </div>
  //                       <div className="modal-footer">
  //                         <button
  //                           type="button"
  //                           className="btn btn-default"
  //                           data-dismiss="modal"
  //                         >
  //                           Close
  //                         </button>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </span>
  //               <span>
  //                 <img src={place.icon} />
  //               </span>
  //             </h3>
  //           </li>
  //         </div>
  //       );
  //     }.bind(this)
  //   );
  // }

  // A helper method for rendering a container to hold all articles
  renderContainer() {
    return (
      <div className="results">
        <h1 className="panel-title">
          <strong>
            <i className="fa fa-list-alt" />
            Results
          </strong>
        </h1>
        {this.renderArticles()}
        
      </div>
    );
  }

  render() {
    // If there no articles in results, render this JSX code
    if (!this.props.results) {
      return (
        <li className="list-group-item">
          <h3>
            <span>
              <em>Enter search terms to begin...</em>
            </span>
          </h3>
        </li>
      );

      // if there are no matches found, return this error message
    } else if (
      this.props.results ==
      "Sorry no matches found, please try a different keyword or radius."
    ) {
      return (
        <li className="list-group-item">
          <h1 className="text-center">
            <span style={{ color: "red" }}>
              <em>
                Sorry, no matches found. Please try a different keyword or
                radius.
              </em>
            </span>
          </h1>
        </li>
      );
    } else {
      // If we have articles, return this.renderContainer() which in turn, returns all the articles
      return <div className="container-wrapper">{this.renderContainer()}</div>;
    }
  }
}

const mapDispatchToProps = dispatch => ({
  fetchHours: reference => dispatch(fetchHours(reference))
});

const mapStateToProps = state => ({
  results: state.searchResults.results,
  hours: state.openTimes.hours
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
