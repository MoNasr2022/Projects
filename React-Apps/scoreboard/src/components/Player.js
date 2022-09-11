import React,{memo}  from "react";
import PropTypes from 'prop-types'
import CrownIcon from "./CrownIcon";
import Counter from "./Counter";

const Player = (props) => {
    
  return (
    <div className="player">
      
      <span className="player-name">
        <button className="remove-player" onClick={props.removePlayer}>✖</button>
        <CrownIcon isHighScore ={props.isHighScore}/>
        {props.name}
      </span>

      <Counter 
      score = {props.score}
      id = {props.id}
      changeScore={props.changeScore}  />
    </div>
  );
}
Player.propTypes = {
  name : PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  id: PropTypes.number,
  changeScore: PropTypes.func,
  removePlayer:PropTypes.func
}

const playerPropsAreEqual = (prevProps, nextProps) =>{
  return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore
}

export default memo(Player, playerPropsAreEqual);