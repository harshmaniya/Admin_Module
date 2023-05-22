import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <div className="card_home_page">
        <div className="card-body">
          <h5 className="card-title">{props.Card_title}</h5>
          {/* <h6 className="card-subtitle mb-2 text-muted">{props.Card_subtitle}</h6> */}
          <h4 className="card-text">{props.ditals}</h4>
          {/* <div className="btn">
            <Link to=""><button type="button" className="btn btn-primary">Click</button></Link>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Card;