import React from "react";

// const imgStyle = {
//     width: '30 px',

// }

const Card = props => (
  <div
      className="card"
      
      value={props.id}
    //   onClick={() => props.handleOnClick(props.id)}
  >
      <div className="img-container">
          <img style={{padding: '50px', height: '300px', width: '400px'}} alt={props.name} src={props.image} />
      </div>
  </div>
);

export default Card;
