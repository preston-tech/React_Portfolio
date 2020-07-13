  
import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      data: [
        {title: "JCC", category: "Lifeguard"}, 
        {title: "Jiffy Lube", category: "UpperBay Technician"},
        {title: "Brighton", category: "Board Instructor"}
      ]
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

  portfolioItems() {

    return data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} />;
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter('Lifeguard')}>Lifeguard</button>
        <button onClick={() => this.handleFilter('UpperBay Technician')}>UpperBay Technician</button>
        <button onClick={() => this.handleFilter('Board Instructor')}>Board Instructor</button>

        {this.portfolioItems()}

      </div>
    );
  }
}