import React from "react";

import Saved from "./Saved"
import Search from "./Search"

class Main extends React.Component { 

  constructor(props) {
    super(props) 
    this.state = {
      display: 'Search'
    } 
    this.toggleDisplay = this.toggleDisplay.bind(this)
  } 

  toggleDisplay(display) {
    this.setState({
      display
    })
  }

	render() {
		return (
			<div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" to="/">Venue Finder</a>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <a> in place of <a> and "to" in place of "href" */}
                  <li> <a onClick={() => this.toggleDisplay('Search')}>Search</a></li>
                  <li> <a onClick={() => this.toggleDisplay('Saved')}>Saved Venues</a></li>
                  <li><a href="https://github.com/KJax101/VenueFinder">Github Repo</a></li>

                </ul>
              </div>
            </div>
          </nav>

          {/* Jumbotron */}
          <div className="jumbotron">
            <h2 className="text-center"><strong>(ReactJS) Venue Finder</strong></h2>
            <h3 className="text-center">Search for and save any venues near you.</h3>
          </div>


          {/* Here will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {/* {this.props.children} */} 


          {
            this.state.display === 'Search' && <Search className="search"/>
          } 

          {
            this.state.display === 'Saved' && <Saved className="saved"/>
          }

          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true"></i>
              Proudly built using React.js
            </p>
          </footer>
        </div>
      </div>
		)

	}
}

export default Main;

