import {MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Home() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        getList()
    },[])

    const getList = () => {
        axios.get('http://localhost:8080/product/list')
            .then(resp => {
                setProduct(resp.data.data)
            }).catch(e => {
            console.log(e)
        })
    }
    const list  = product.map((e,k) =>
        <tr >
            <td>{e.pid}</td>
            <td>{e.pname}</td>
            <td>{e.price}</td>
            <td>{e.sname}</td>
            <td>{e.cname}</td>
            <td><Link to={`/edit/${e.pid}`}>edit</Link></td>
            <td>Delete</td>
        </tr>

    )

    return (
        <MDBTable>
            <MDBTableHead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>First</th>
                    <th scope='col'>Last</th>
                    <th scope='col'>Handle</th>
                    <th scope='col'>#</th>
                    <th scope='col'>First</th>
                    <th scope='col'>Last</th>
                    <th scope='col'>Handle</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {list}
            </MDBTableBody>
        </MDBTable>
    )
}

export default Home;