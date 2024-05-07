import {Route, Routes} from "react-router-dom";
import Table from "../pages/Table";
import Home from "../pages/Home";
import Save from "../pages/Save";
import Edit from "../pages/Edit";

function MyRouter (){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/list" element={<Table/>} />
            <Route path="/save" element={<Save/>} />
            <Route path="/edit/:pid" element={<Edit/>} />
        </Routes>

    )
}
export default MyRouter