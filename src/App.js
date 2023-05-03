import React from "react";
import "./styles.css";

import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit";

export default function App() {
  const [value, setValue] = React.useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    }
  });

  const { speak } = useSpeechSynthesis();

  return (
    <div className="App">
      <div>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button onMouseDown={listen} onMouseUp={stop}>
          keep pressed and speak, to listen
        </button>
        {listening && <div>Go ahead I'm listening</div>}
        <button onClick={() => speak({ text: value })}>click to read</button>
      </div>
    </div>
  );
}
