import logo from './logo.svg';
import './App.css';
import Table from "./pages/Table";
import Home from "./pages/Home";
import {Link} from "react-router-dom";
import MyRouter from "./rout/Router";
import Nac from "./pages/Nac";

function App() {
    return (
        <div>
            <Nac/>
            <div style={{marginTop : 100}}>
                <MyRouter/>
            </div>

        </div>

    );
}

export default App;
