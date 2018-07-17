import React from "react";
import {connect} from 'react-redux'
import { fetchSavedVenues } from '../actions/saved_actions' 
import { fetchHours } from '../actions/hours_actions'
import { deleteVenue } from '../actions/saved_actions'


export class Saved extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		}
		this.viewHoursClick = this.viewHoursClick.bind(this);
		this.renderModal = this.renderModal.bind(this)
		this.onModalClose = this.onModalClose.bind(this)
	}

	onModalClose() {
		this.setState({
			showModal: false
		})
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
 

	componentDidMount() {
		this.props.fetchSavedVenues()
	}

	handleClick(place){ 
		this.props.deleteVenue(place)
		alert('Successfully Deleted')
	}

	// viewHoursClick(place){
  //   this.props.fetchHours(place.reference)
	// }

	viewHoursClick(place) {
		this.setState({
			showModal: true
		})
		console.log(place)
		this.props.fetchHours(place.reference);
	}

	// A helper method for rendering the HTML when there are no saved venues
	renderEmpty() {
		return (
		  <li className="list-group-item">
		    <h3>
		      <span>
		        <em>No saved venues yet, save your first venue from search results...</em>
		      </span>
		    </h3>
		  </li>
		);
	}

	// A helper method for rendering a container and all of the venues inside
	renderContainer() {
		return (
			<div className="saved">
				<h1 className="panel-title">
					<strong>
						<i className="fa fa-list-alt" />
						Saved Venues
          </strong>
				</h1>
				{this.renderVenues()}

			</div>
		);
	}

	makePlaceEntry(place, key) {
		return <li key={key} className="result-item">
        <h3>{place.name}</h3>
        <h4>{place.vicinity}</h4>
        <button class="view-hours-btn" onClick={() => this.viewHoursClick(place)}>
          View Hours
        </button>
        <br />
        <br />
        <button class="delete-btn" onClick={() => this.handleClick(place)}>
          Delete
        </button>
      </li>;
	} 
	
	renderVenues() {
		// this.props.savedVenues.map((place, index) => )
		return <div>
        {this.state.showModal && this.renderModal()}
        <ul id="result-list">
          {this.props.savedVenues.map((place, index) =>
            this.makePlaceEntry(place, index)
          )}
        </ul>
      </div>;
	}
	// A helper method for mapping through venues and outputting some HTML
	// renderVenues() { 
	// 	console.log(this.props.hourResults) 
	// 	console.log('FROM RENDER IN SAVED')

	// 	return this.props.savedVenues.map(function(place, index) {

	// 	  return (
	// 	    <div key={index}>
	// 	      <li className="list-group-item">
	// 	        <h3>
	// 	          <span>
	// 	                <h2>{place.name}</h2>
	// 	          </span>
	// 	          <br />
	//               <span>
	//                 <em>{place.address}</em>
	//               </span>
	//               <span>
	//               	<img src={place.icon} />
	//               </span>
	// 	          <span className="btn-group pull-right">
	// 	            <a href={place.url} rel="noopener noreferrer" target="_blank">
	// 	            </a>
	// 	          </span>

	// 	          <span className="btn-group pull-right">
	// 	              	<button type="button" className="btn btn-danger" onClick={() => this.handleClick(place)}>Delete</button>

	// 	          </span>
	// 	              <span className="btn-group pull-right">
	// 	                <button data-toggle="modal" data-target="#myModal" className="btn btn-success" onClick={() => this.viewHoursClick(place)} >View Hours</button>
		              
	// 					<div id="myModal" className="modal fade" role="dialog">
	// 					  <div className="modal-dialog">

						    
	// 					    <div className="modal-content">
	// 					      <div className="modal-header">
	// 					        <button type="button" className="close" data-dismiss="modal">&times;</button>
	// 					        <h3 className="modal-title text-center">Hours</h3>
	// 					      </div>
	// 					      <div className="modal-body">
	// 					        <ul>
	// 					        	<li className="list-group-item">
	// 					        		<p>{this.props.hourResults[0]}</p>
	// 					        	</li>
	// 					        	<li className="list-group-item">
	// 					        		<p>{this.props.hourResults[1]}</p>
	// 					        	</li>
	// 					        	<li className="list-group-item">
	// 					        		<p>{this.props.hourResults[2]}</p>
	// 					        	</li>
	// 					        	<li className="list-group-item">
	// 					        		<p>{this.props.hourResults[3]}</p>
	// 					        	</li>
	// 					        	<li className="list-group-item">
	// 					        		<p>{this.props.hourResults[4]}</p>
	// 					        	</li>
	// 					        	<li className="list-group-item">
	// 					        		<p>{this.props.hourResults[5]}</p>
	// 					        	</li>
	// 					        	<li className="list-group-item">
	// 					        		<p>{this.props.hourResults[6]}</p>
	// 					        	</li>
	// 					        </ul>
	// 					      </div>
	// 					      <div className="modal-footer">
	// 					        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
	// 					      </div>
	// 					    </div>

	// 					  </div>
	// 					</div>
	// 	            </span>
	// 	        </h3>
		        
	// 	      </li>
	// 	    </div>
	// 	  );
	// 	}.bind(this));
	// }

	render() { 
		console.log(this.props)
    // If there are no venues saved, return this.renderEmpty() which in turn returns some HTML
    if (!this.props.savedVenues[0]) {
      return this.renderEmpty();
    }
		// If there are venues saved, return this.renderContainer() which in turn returns all saves Venues 
		// return null;
    return this.renderContainer();
  }
}

const mapStateToProps = state => ({
	savedVenues: state.savedResults.results, 
	hours: state.openTimes.hours
}) 

const mapDispatchToProps = dispatch => ({
	fetchSavedVenues: () => dispatch(fetchSavedVenues()), 
	fetchHours: reference => dispatch(fetchHours(reference)), 
	deleteVenue: place => dispatch(deleteVenue(place))
})

export default connect(mapStateToProps, mapDispatchToProps)(Saved)

