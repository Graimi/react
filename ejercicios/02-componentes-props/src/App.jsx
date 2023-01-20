import './App.css';
import Title from './components/Title';
import Paragraph from './components/Paragraph';

function App() {
  const pageTitle = '¡Bienvenid@s a Rock{theCode}!';

  return (
    <div className="App">
      <Title text={pageTitle} />
      <Paragraph text={pageTitle} />
    </div>
  );
}

export default App;
