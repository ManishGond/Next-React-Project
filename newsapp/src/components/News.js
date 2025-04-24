import React, { Component } from "react";
import NewSingle from "./NewSingle";
import Error from "./Error";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${process.env.REACT_APP_API}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ news: data.articles });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }

  renderNewSingle() {
    if (!this.state.error) {
      return this.state.news.map((item) => (
        <NewSingle key={item.url} item={item} />
      ));
    } else {
      return <Error source={this.props.label} />;
    }
  }

  render() {
    return <div className="row">{this.renderNewSingle()}</div>;
  }
}

export default News;
