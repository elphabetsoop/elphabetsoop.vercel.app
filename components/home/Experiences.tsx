import { Chrono } from "react-chrono";

const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: "On 10 May 1940, Hitler began his long-awaited offensive in the west..."
  }, {
    // Additional items...
  }];

 const Experiences = () => {
    return (
      <div style={{ width: "500px", height: "400px" }}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" />
      </div>
    );
  };

export default Experiences;
