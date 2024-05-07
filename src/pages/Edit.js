import React, {useEffect, useState} from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function Edit() {
    const {pid} = useParams()
    const [id,setId] = useState('')

    const [product, setProduct] = useState({
        pid: '',
        pname: '',
        cid: '',
        sid: '',
        price: ''
    })
    const navigate = useNavigate();

    const getProduct = () => {
        let url = 'http://localhost:8080/product/findById?pid=' + pid
        axios.get(url)
            .then(resp => {
                setProduct(resp.data.data)
            })
    }
    useEffect(() => {
        getProduct()
    }, [])
    const inputData = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }
    const onSave = () => {
        let data = {
            pid:product.pid,
            pname: product.pname,
            cid: product.cid,
            sid: product.sid,
            price: product.price
        }
        axios.post('http://localhost:8080/product/save', data)
            .then(resp => {
                navigate('/')
            })
    }
    return (

        <form className={'container'}>
            <p> {pid}</p>
            <MDBRow className='mb-4'>
                <MDBCol>
                    <MDBInput name={'pname'} value={product.pname} onChange={inputData} label='productName'/>
                </MDBCol>
                <MDBCol>
                    <MDBInput name={'price'} value={product.price} id='form3Example2' onChange={inputData}
                              label='price'/>
                </MDBCol>
            </MDBRow>
            <MDBInput className='mb-4' name={'cid'} value={product.cid} onChange={inputData} id='form3Example3'
                      label='category'/>
            <MDBInput className='mb-4' name={'sid'} value={product.sid} onChange={inputData} id='form3Example4'
                      label='status'/>

            <MDBBtn type='button' onClick={onSave} className='mb-4' block>
                Sign in
            </MDBBtn>

            <div className='text-center'>
                <p>
                    Not a member? <a href='#!'>Register</a>
                </p>
                <p>or sign up with:</p>

                <MDBBtn floating color="secondary" className='mx-1'>
                    <MDBIcon fab icon='facebook-f'/>
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1'>
                    <MDBIcon fab icon='google'/>
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1'>
                    <MDBIcon fab icon='twitter'/>
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1'>
                    <MDBIcon fab icon='github'/>
                </MDBBtn>
            </div>
        </form>
    )
}

export default Edit;