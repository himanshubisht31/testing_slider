import React, { useState } from "react";
import { data } from "../data.js";
import Question from "./Question";

export default function Slider() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Question ele={data[index]} />
      <button onClick={() => setIndex(Math.max(index - 1, 0))}>Previous</button>

      <button onClick={() => setIndex(Math.min(index + 1, data.length - 1))}>
        Next
      </button>

      <h1  data-testid="count">{index} </h1>
    </div>
  );
}
