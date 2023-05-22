import React from 'react';
import Sdata from '../Sdata';
import Menucard from './Menucard';
import { Link } from 'react-router-dom';


const Mapcard = () => {
    return (
        // live session
        <div className="main-div-ls">
            <div className="sub-div-ls">
            {Sdata.map((val) => {
                return (
                        <div className="container">
                                <div className="row grid">
                                        <Menucard
                                            table_id={val.table_id}
                                            pending={val.pending}
                                            accsept={val.accsept}
                                            delivered={val.delivered}
                                        />
                                </div>
                        </div>
                );
            })}
            </div>
        </div>
    );
}

export default Mapcard;
