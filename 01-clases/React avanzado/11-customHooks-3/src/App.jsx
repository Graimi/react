import './App.css';
import useWindowSize from './hooks/useWindowSize';

function App() {
  // Una forma de obtener los datos
  // return (
  //   <div className="App">
  //     <h3>Window size</h3>
  //     <p>Width: {useWindowSize().width}</p>
  //     <p>Height: {useWindowSize().height}</p>
  //   </div>
  // );
  
  // Y otra más profesional
  const { width, height } = useWindowSize();
  return (
    <div className="App">
      <h3>Window size</h3>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  );
}

export default App;
