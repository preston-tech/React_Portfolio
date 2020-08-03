import React, { Component } from "react";
import axios from "axios";

export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItem: {}
    };
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
    .get(
      `https://prestonphillips.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
      { withCredentials: true }
    )
      .then(response => {
        this.setState({
          portfolioItem: response.data.portfolio_item
        })
      }).catch(error => {
        console.log("getPortfolioitem error", error);
    })
  }
  render() {
    const{
    banner_image_url,
    category,
    description,
    logo_url,
    name, 
    thumb_image_url,
    url
    } = this.state.portfolioItem;

    return (
      <div>
        <h2>{name}</h2>
        <h2>{description}</h2>
      </div>
    )
  }
}