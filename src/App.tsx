import { Routes, Route } from 'react-router-dom';
import { Header } from './header/header';
import CurrentWeather from './screens/currentWeather';

function App() {
  return (
    <div className="bg-base min-h-[100vh] p-10">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<CurrentWeather />}
        />
      </Routes>
    </div>
  );
}

export default App;
