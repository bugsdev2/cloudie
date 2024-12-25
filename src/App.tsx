import { getCurrentWeather } from './api/getCurrentWeather';
import './App.css';

function App() {
  const getData = async () => {
    const testData = await getCurrentWeather(15, 17);
    console.log(testData);
  };

  getData();

  return (
    <>
      <div className="bg-base text-text">Hello</div>
    </>
  );
}

export default App;
