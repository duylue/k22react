import logo from './logo.svg';
import './App.css';
import Table from "./pages/Table";
import Home from "./pages/Home";
import {Link} from "react-router-dom";
import MyRouter from "./rout/Router";

function App() {
    let x = 1;
    let c = 7;
    return (
        <div>
            {}
            <Link to="/list"> Go List </Link>
            <Link to="/save">Create</Link>
            <MyRouter/>
        </div>

    );
}

export default App;
