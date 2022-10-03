import React from "react";

const EventItem = ({ iconName, mainText, secondaryText }) => {
  return (
    <>
      <div className="event-item">
        <div className="event-item-icon__container">
          <div className="event-item-icon">
            <i className={`${iconName}`}></i>
          </div>
          <div className="event-item-details ml-2">
            <p className="main-text">{mainText}</p>
            <p className="secondary-text">{secondaryText}</p>
          </div>
        </div>
        <div className="event-item-cta-arrow">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
    </>
  );
};

export default EventItem;
