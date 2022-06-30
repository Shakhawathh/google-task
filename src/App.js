import './App.css';
import Nav from './Compunents/Home/Nav';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Compunents/Home/Home';
import Todo from './Compunents/Home/Todo';
import Blog from './Compunents/Blog';
import Footer from './Compunents/Footer';
import Completed_Tasks from './Compunents/Completed_Tasks';
import Calendar from './Compunents/Home/Calendar';
import NotFound from './Compunents/NotFound';


function App() {
  return (
    <div>
     <Nav></Nav>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Todo" element={<Todo />} />
        <Route path="Calendar" element={< Calendar/>} />
        <Route path="Completed_Tasks" element={<  Completed_Tasks/>} />
        <Route path="Blog" element={<Blog />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
