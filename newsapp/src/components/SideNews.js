import React, { Component } from "react";
import SingleSide from "./SingleSide";
import Error from "./Error";

class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_API}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ sidenews: data.articles });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }

  renderSingleSide() {
    if (!this.state.error) {
      return this.state.sidenews.map((item) => (
        <SingleSide key={item.url} item={item} />
      ));
    } else {
      return <Error source="Sidebar" />;
    }
  }

  render() {
    return <div className="row">{this.renderSingleSide()}</div>;
  }
}

export default SideNews;
