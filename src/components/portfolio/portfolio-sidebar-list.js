import React from "react";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSidebarList = props => {
const portfolioList = props.data.map(portfolioItem => {
  return (
    <div key={portfolioItem.id} className="portfolio-item-thumb">
      <div className="portfolio-thumb-img">
        <img src={portfolioItem.thumb_image_url} />
      </div>

      <div className="text-content">
        <h1 className="title">{portfolioItem.name}</h1>
        <h2>{portfolioItem.id}</h2>
        <a className="delete-icon" onClick={() => props.handleDeleteClick(portfolioItem)}>Delete
          <FontAwesomeIcon icon="trash" />
        </a>
      </div>
    </div>
  );
});

return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;