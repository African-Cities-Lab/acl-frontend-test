import './App.css';
import {
  BrowserRouter,
  Route, Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SingleCourse from "./pages/SingleCourse";


function App(props) {
  return (
      <div className={'AppShell'} id={'AppShell'}>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/courses/:code" element={<SingleCourse/>} /> 
          </Routes>
        </BrowserRouter> 
      </div>
  );
} 

export default App;
