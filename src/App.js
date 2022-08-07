import { Route, Routes } from 'react-router-dom';

//Components
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
