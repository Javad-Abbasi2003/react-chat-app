import { Route, Routes } from 'react-router-dom';

//Components
import Login from './components/Login';
import Chat from './components/Chat';

//Context
import AuthContextProvider from "./contexts/AuthContextProvider"

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
