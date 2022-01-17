import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';

import { useDispatch } from 'react-redux';

import './Register.css'
import userReducer from '../../JS/Reducers/user';
import { register } from '../../JS/Actions/user';

const Register = (history) => {

    // state

    const [newUser, setNewUser] = useState({ name: "", email: "", password: "", phone: "" });

    // dispatch for add

    const dispatch = useDispatch()

    //event

    const handleChangenewUser = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    return (

        <div className="d-flex align-items-center min-vh-100 py-3 py-md-0">
            <div className="container">
                <div className="card login-card">
                    <div className="row no-gutters">
                        <div className="col-md-5">

                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <p className="login-card-description">Create an account</p>
                            </div>
                            <form>

                                <input type="text" name="name" id="name"
                                    className="form-control" placeholder="Name"

                                    value={newUser.name}
                                    onChange={handleChangenewUser}
                                ></input>


                                <input type="email" name="email" id="email"
                                    className="form-control" placeholder="Email"

                                    value={newUser.email}
                                    onChange={handleChangenewUser}
                                ></input>


                                <input type="password" name="password" id="password"
                                    className="form-control" placeholder="password"
                                    value={newUser.password}
                                    onChange={handleChangenewUser}
                                ></input>


                                <input type="text" name="phone" id="phone"
                                    className="form-control" placeholder="phone"

                                    value={newUser.phone}
                                    onChange={handleChangenewUser}
                                ></input>


                                <input name="register" id="register" className="btn btn-block login-btn mb4"
                                    type="button" defaultValue="Register"
                                    onClick={() => dispatch(register(newUser, history))}
                                />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );


}

export default Register