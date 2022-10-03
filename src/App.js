import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./component/Landing/Landing";
import CreateEvent from "./component/CreateEvent/CreateEvent";
import EventDetails from "./component/Event/EventDetails";

import "./App.css";
import "./styles/argon-design-system-react.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/event" element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
