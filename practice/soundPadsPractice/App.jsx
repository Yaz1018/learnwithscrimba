import React from "react";
import Pad from "./Pad";
import padsData from "./pads";

export default function App() {
  const [pads, setPads] = React.useState(padsData);

  function togglePad(id) {
    setPads((items) =>
      items.map((item) => (id === item.id ? { ...item, on: !item.on } : item))
    );
  }

  const buttonElements = pads.map(function (pad) {
    return (
      <Pad
        color={pad.color}
        id={pad.id}
        key={pad.id}
        on={pad.on}
        togglePad={togglePad}
      />
    );
  });

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
