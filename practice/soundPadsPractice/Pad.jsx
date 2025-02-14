import { useState } from "react";

export default function Pad(props) {
  const [togglePad, setTogglePad] = useState(props.on);

  return (
    <button
      className={props.on ? "on" : ""}
      style={{ backgroundColor: props.color }}
      onClick={() => props.togglePad(props.id)}
    ></button>
  );
}
