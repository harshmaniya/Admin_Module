import React from 'react';
import Sdata from '../Sdata';

export default function MenuCard(props) {
  return (
    <>
      <div className="main">
        <div className="grid text-center">
          <div className="table_num">
            <div className="table_id">
              <p>#{props.table_id}</p>
            </div>
          </div>
          <div className="task_name">
            <div className="pending">
              <h3 id="task">pending</h3>
              <h3 id="num">{props.pending}</h3>
            </div>
            <div className="accepted">
              <h3 id="task">accepted</h3>
              <h3 id="num">{props.accsept}</h3>
            </div>
            <div className="delivered">
              <h3 id="task">delivered</h3>
              <h3 id="num">{props.delivered}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}   