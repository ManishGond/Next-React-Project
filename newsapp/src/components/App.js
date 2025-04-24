import "./App.css";
import News from "./News";
import React, { Component } from "react";
import SideNews from "./SideNews";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "sources=bbc-news",
      },
      news2: {
        type: "everything",
        query: "sources=techcrunch",
      },
      news3: {
        type: "everything",
        query: "domains=wsj.com",
      },
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                My Feed
              </a>
            </div>
          </nav>
        </div>

        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} label="BBC Feed" />
            <News news={this.state.news2} label="TechCrunch Feed" />
          </div>
          <div className="col s4">
            <SideNews news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
