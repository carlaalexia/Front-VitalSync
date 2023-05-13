import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import CreateUser from './components/CreateUser'
import Menu from './components/Menu';
import ViewMedAppoint from './components/ViewMedAppoint'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/registro' element={<CreateUser/>}></Route>
        <Route exact path='/menu' element={<Menu/>}></Route>
        <Route exact path='/citas' element={<ViewMedAppoint/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
