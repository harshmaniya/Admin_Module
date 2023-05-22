import React from 'react';
import Tdata from '../Tdata';
import OpenCard from './Opencard';

const Maprow = () => {
    return (
        <>

            <div className="table_main_manu">
                <div className='blo_manu'>
                        <h1>Pending</h1>
                </div>
                <div className="table_border_manu">
                        <table className="table">
                            <thead className="table-head">
                                <tr>
                                    <th scope="col">Table No.</th>
                                    <th scope="col">Time Slot</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">No of Person</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Occasion</th>
                                </tr>
                            </thead>
                            {/* <ATRow /> */}
                            {Tdata.map((val) => {
                                return (
                                    <OpenCard
                                        Table_No={val.Table_No}
                                        Time_Slot={val.Time_Slot}
                                        Name={val.Name}
                                        No_of_Person={val.No_of_Person}
                                        Contact={val.Contact}
                                        Occasion={val.Occasion}
                                    />
                                )
                            })}
                        </table>
                </div>
            </div>

        </>
    );
}

export default Maprow;
