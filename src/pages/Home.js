import {MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {_http} from "./http";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Button} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function Home() {
    const [product, setProduct] = useState([])
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const [productId, setProductId] = React.useState(0);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const agree = () => {
        del()
        setOpen(false);
    };
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'pid', headerName: 'PID', width: 70 },
        { field: 'pname', headerName: 'product name', width: 230 },
        { field: 'price', headerName: 'price',type :'float', width: 130 },
        {
            field: 'cname',
            headerName: 'category',
            width: 90,
        },
        {
            field: 'sname',
            headerName: 'status',
            width: 90,
        },
        {
            width: 190,
            field: "action",
            headerName: "Action",
            sortable: false,
            renderCell: (params) => {
                return (
                    <strong>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{ marginLeft: 16 }}
                            onClick={() => {
                                setProductId(params.id)
                              handleClickOpen()
                            }}
                        >
                            More Info
                        </Button>
                    </strong>
                )
            }
        }
    ];
    useEffect(() => {
        getList()

    }, [])
    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    const getList = () => {
        let token = localStorage.getItem('token')
        const   headers= {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "Application/json",
            "Authorization": `Bearer ${token}`
        }
        axios.get("http://localhost:8080/product/list",{headers})
            .then(resp => {
                setProduct(resp.data.data)
                console.log(product)
            }).catch(e => {
            console.log(e)
            navigate("/login")
        })
    }
    const del = () => {
        const url = '/product/del?pid='+productId
        console.log(url)
        _http.get(url)
            .then(resp => {
                getList()
            }).catch(e => {
            console.log(e)

        })
    }


    return (
        <div style={{ height: 400}} className={'container'}>
            <DataGrid
                rows={product}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={agree} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Home;