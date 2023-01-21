import './App.css';
import Food from './components/Food';

function App() {
  const foods = [
    {
      name: 'pizza',
      calories: 1400,
      description: 'Meter en el horno y a esperar',
    },
    {
      name: 'hamburger',
      calories: 1000,
      description: 'Vuelta y vuelta y al pan',
    },
    {
      name: 'fish and chips',
      calories: 600,
      description: 'No te hagas daño de esa manera',
    },
    { name: 'salad', calories: 400, description: 'Infinitas opciones' },
  ];

  return (
    <div className="App">
      <ul>
        {foods.map((food) => (
          <li>
            <Food
              name={food.name.toUpperCase()}
              calories={food.calories}
              description={food.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
