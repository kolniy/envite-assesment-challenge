import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";

import "./createevent.css";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [uplodedImage, setUplodedImage] = useState(null);
  const [eventDetails, setEventDetails] = useState({
    eventname: "",
    hostname: "",
    location: "",
    startdate: "",
    starttime: "",
    enddate: "",
    endtime: "",
    image: null,
  });

  const {
    eventname,
    hostname,
    location,
    startdate,
    starttime,
    enddate,
    endtime,
  } = eventDetails;

  const handleEventDetailsChange = (e) =>
    setEventDetails({
      ...eventDetails,
      [e.target.name]: e.target.value,
    });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(eventDetails);
    navigate("/event");
  };

  const inputRef = useRef(null);

  const handInputOnChange = (e) => {
    if (e.target.files.length > 0) {
      setEventDetails({
        ...eventDetails,
        image: e.target.files[0],
      });

      const reader = new FileReader();
      reader.onload = function (e) {
        setUplodedImage(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleUplaodPhotoCta = () => inputRef.current.click();

  return (
    <div className="page-wrapper">
      <div className="create-event__container">
        <h4 className="create-event__header">Create Event</h4>
        <div className="form-container mt-5">
          <h4>Basic Event Details</h4>
          <p>This section contains the basic details of your event.</p>
          <Form onSubmit={(e) => handleFormSubmit(e)}>
            <FormGroup>
              <Label className="label-style">Event Name</Label>
              <Input
                className="text-input__style"
                placeholder="Event Name"
                name="eventname"
                type="text"
                value={eventname}
                onChange={(e) => handleEventDetailsChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label className="label-style">Host Name</Label>
              <Input
                className="text-input__style"
                placeholder="Host name"
                name="hostname"
                type="text"
                value={hostname}
                onChange={(e) => handleEventDetailsChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label className="label-style">Start Date/Time</Label>
              <div className="date-time-container">
                <Input
                  type="date"
                  name="startdate"
                  id="startdate"
                  placeholder="Start date"
                  className="mr-1"
                  value={startdate}
                  onChange={(e) => handleEventDetailsChange(e)}
                />
                <Input
                  type="time"
                  name="starttime"
                  id="starttime"
                  placeholder="Time"
                  className="ml-1"
                  value={starttime}
                  onChange={(e) => handleEventDetailsChange(e)}
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Label className="label-style">End Date/Time</Label>
              <div className="date-time-container">
                <Input
                  type="date"
                  name="enddate"
                  id="enddate"
                  placeholder="End date"
                  className="mr-1"
                  value={enddate}
                  onChange={(e) => handleEventDetailsChange(e)}
                />
                <Input
                  type="time"
                  name="endtime"
                  id="endtime"
                  placeholder="Time"
                  className="ml-1"
                  value={endtime}
                  onChange={(e) => handleEventDetailsChange(e)}
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Label className="label-style">Location</Label>
              <Input
                className="text-input__style"
                placeholder="Location"
                name="location"
                value={location}
                onChange={(e) => handleEventDetailsChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Upload Photo(s)</Label>
              <div
                onClick={handleUplaodPhotoCta}
                className="upload-photos__cta"
              >
                <i class="fas fa-plus"></i>
              </div>
              <input
                onChange={handInputOnChange}
                type="file"
                ref={inputRef}
                style={{
                  display: "none",
                }}
              />
              {uplodedImage != null && (
                <>
                  <div className="uploaded-photos-container">
                    <img
                      className="img-fluid"
                      src={uplodedImage}
                      alt="uploaded pic"
                    />
                  </div>
                </>
              )}
            </FormGroup>
            <Button type="submit" className="btn-next">
              <i className="fas fa-calendar-plus mr-2"></i>
              Next
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
