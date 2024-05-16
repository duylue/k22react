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
import {useNavigate} from "react-router-dom";
import {_http} from "./http";

function Save() {
    const [product, setProduct] = useState({
        pname: '',
        cid: '',
        sid: '',
        price: ''
    })
    const navigate = useNavigate();

    const inputData = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }
    const onSave = () => {
        let data = {
            pname: product.pname,
            cid: product.cid,
            sid: product.sid,
            price: product.price
        }
        _http.post('http://localhost:8080/product/save',data)
            .then(resp=>{
                navigate('/')
            })
    }
    return (
        <div className={'container'} >
            <form>
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
        </div>


    )

}

export default Save;