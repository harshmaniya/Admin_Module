import React, {useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Card from './Card';
import Cookies from "js-cookie";

const Home = () => {
    const navigate = useNavigate();
    const id = Cookies.get('res_id_admin');
    const nav = (e) =>{
        navigate(e.target.id);
    }
    useEffect(() => {
        if (!id) {
            navigate('/login');
        }
    }, []);


    return (

        <>
            <div className="c_g">
                <div className="container text-center mt-5">
                    <div className="row">
                        <div className="col border border-primary" id="/Mapcard" onClick={nav}>
                            <Card
                                Card_title="Live Session"
                                ditals="10"
                            />
                        </div>
                        <div className="col border border-primary" id="/Maprow" onClick={nav}>
                            <Card
                                Card_title="Pending Session"
                                ditals="10"
                            />
                        </div>
                        <div className="col border border-primary">
                            <Card
                                Card_title="Sales Session"
                                ditals="10"
                            />
                        </div>
                        <div className="col border border-primary">
                            <Card
                                Card_title="Avilable Staff"
                                ditals="10"
                            />
                        </div>
                        <div className="col border border-primary" id="/inventory" onClick={nav}>
                            {/*<div >*/}
                                <Card
                                    Card_title="Inventory"
                                />
                            {/*</div>*/}
                        </div>
                        <div className="col border border-primary" id="/Feedback" onClick={nav}>
                            <Card
                                Card_title="Check feedbacks"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
