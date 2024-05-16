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
function Login(){
    const [user, setUser] = useState({
        username: '',
        password: '',
        roles: []
    })
    const navigate = useNavigate();
    const inputData = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onSave = async () => {
        let data = {
            username: user.username,
            password: user.password
        }
        try {
         const resp = await axios.post('http://localhost:8080/login',data)
            console.log(resp)
            localStorage.setItem('token',resp.data.data)
            navigate('/dialog')
        }catch (ex){
            console.log(ex)
        }

    }
    return (

        <form className={'container'} >
            <MDBRow className='mb-4'>
                <MDBCol>
                    <MDBInput name={'username'} value={user.username} onChange={inputData} label='username'/>
                </MDBCol>
                <MDBCol>
                    <MDBInput name={'password'} value={user.password} id='form3Example2' onChange={inputData}
                              label='password'/>
                </MDBCol>
            </MDBRow>

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
export default Login;