import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const handleInput = (e) => setText(e.target.value);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={handleInput}
          placeholder="type yout name"
        />
        <h1>Hello {text}</h1>
      </div>
      <img
        data-testid="giphy"
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTFmYWUyNGQ1NjdiNzRhNzFjNTM3ZjVlZDAyMDc2YTlmN2IxNTJiNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/kHOts8xerNiFI6KdCO/giphy.gif"
        alt="giphy"
      />

      {/* <iframe
        src="https://giphy.com/embed/kHOts8xerNiFI6KdCO"
        width="480"
        height="360"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/rhinorecords-the-best-tina-turner-simply-kHOts8xerNiFI6KdCO">
          via GIPHY
        </a>
      </p> */}
    </div>
  );
}

export default App;
