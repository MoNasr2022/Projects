import React from "react";


const Counter = ({score,changeScore,id}) => {

//   const incrementScore = () => {
//     setScore(score + 1);
//   }

//   const decrementScore = () => {
//     setScore(prevScore => prevScore - 1);
//   }

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={()=> changeScore(id ,-1)}> - </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={()=> changeScore(id ,1)}> + </button>
    </div>
  );

}

export default Counter;