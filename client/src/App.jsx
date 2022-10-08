import React from "react";
import LongPulling from "./LongPulling";
import "./App.css";
import EventSourcing from "./EventSourcing";
import WebSocket from "./WebSocket";

function App() {
  return (
    <div>
       {/*<LongPulling />*/}
       {/*<EventSourcing />*/}
      <WebSocket />
    </div>
  );
}

export default App;

