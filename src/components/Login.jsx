import React, {useState} from 'react';
import Home from './Home';
import {Link, useNavigate} from 'react-router-dom';
import Cookies from "js-cookie";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:9000/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password})
            });
            const result = await response;
            const ri = await result.json();
            console.log(result)
            if (result.status === 200) {

                Cookies.set('res_id_admin', ri.res_id);
                navigate("/home");
            } else {
                alert("Wrong Password");
            }
        } catch (err) {
            alert(err.message);
        }

    };

    return (
        <>
            <div className="main-div-login">
                <div className='l_m'>
                    <div className="login_main">
                        <div className="e_a">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={email}
                                   placeholder="admin@gmil.com"
                                   onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </div>
                        <div className="pa mt-2">
                            <label for="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" value={password}
                                   onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <div className='b_l'>
                                <button className='btn btn-primary mb-2' onClick={handleSubmit}>Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;