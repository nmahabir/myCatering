import React from "react";

// const imgStyle = {
//     width: '30 px',

// }

const Card = props => (
//   <div
//       className="card"
      
//       value={props.id}
// style={{width: "18rem"}}
//     //   onClick={() => props.handleOnClick(props.id)}
//   >
  
//       <div className="img-container">
//           <img style={{padding: '50px', height: '300px', width: '400px'}} alt={props.name} src={props.image} />
//       </div>
//   </div>

<div className="card">
<img className="card-img-top" style={{padding: '50px', height: '300px', width: '400px'}} src={props.image} alt={props.name}/>
<div className="card-body">
  <p className="card-text" style={{textAlign: "center"}}>{props.name}</p>
</div>
</div>
);

export default Card;
