import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import './forms.css';
import Header from'./components/Header';
import Form from './components/Form';



function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/add/:entryId" element={(<Form  />)} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;