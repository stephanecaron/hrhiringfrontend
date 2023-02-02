import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from'./components/Header';
import Form from './components/Form';
import Login from './components/Login';
import './App.css';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/add/:entryId" element={(<Form  />)} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;