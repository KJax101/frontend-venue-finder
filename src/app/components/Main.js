import React from "react";

import Saved from "./Saved";
import Search from "./Search";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Search"
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay(display) {
    this.setState({
      display
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar" role="navigation">
            <div className="logo">Venue Finder</div>

            <div className="navbar-links">
              <div className="nav-search">
                <a onClick={() => this.toggleDisplay("Search")}>Search</a>
              </div>

              <div className="nav-saved">
                <a onClick={() => this.toggleDisplay("Saved")}>Saved Venues</a>
              </div>

              <div className="nav-github">
                <a href="https://github.com/KJax101/VenueFinder">Github Repo</a>
              </div>
            </div>
          </nav>

          {/* Jumbotron */}
          <div className="jumbotron">
            <h2 className="text-center">
              <strong>(ReactJS) Venue Finder</strong>
            </h2>
            <h3 className="text-center">
              Search for and save any venues near you.
            </h3>
          </div>

          {this.state.display === "Search" && <Search className="search" />}

          {this.state.display === "Saved" && <Saved className="saved" />}

          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-github" aria-hidden="true" />
              Created by KJG for Thinkful
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Main;
