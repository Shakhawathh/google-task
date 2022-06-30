import './App.css';
import Nav from './Compunents/Home/Nav';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Compunents/Home/Home';
import Todo from './Compunents/Home/Todo';
import Calendar from './Compunents/Home/Calendar';
import Completed from './Compunents/Completed';
import Blog from './Compunents/Blog';
import Footer from './Compunents/Footer';


function App() {
  return (
    <div>
     <Nav></Nav>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Todo />} />
        <Route path="Calender" element={< Calendar />} />
        <Route path="Completed " element={< Completed />} />
        <Route path="Blog" element={<Blog />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
