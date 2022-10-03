import React from "react";
import "./event.css";

import EventItem from "./EventItem";

const EventDetails = () => {
  return (
    <div className="page-wrapper">
      <div className="page-container">
        <div className="event-item__container">
          <EventItem
            iconName="fas fa-calendar-alt"
            mainText="18 August 6:00PM"
            secondaryText="to 19 August 1:00PM UTC +10"
          />
          <EventItem
            iconName="fas fa-map-marker-alt"
            mainText="Street Name"
            secondaryText="Suburb, State, Postcode"
          />
        </div>

        <div className="event-details__container">
          <h3 className="event-name">Birthday Bash</h3>
          <p className="host-name">Hosted by Elysia</p>
        </div>
        <div className="image-container__section">
          <img
            src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T110250Z&X-Amz-Expires=86400&X-Amz-Signature=f057aa5605b41cb334905236100fa5a0a7159858993721b34dcd4f232c367c32&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
            alt="..."
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
