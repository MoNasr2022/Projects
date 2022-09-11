import React from 'react'
import  PropTypes  from "prop-types";
import Stats from './Stats';
import StopWatch from './stopWatch';



const Header = ({players,title}) => {
  return (
    <header>
      <Stats players ={players} playerPoints={players.playerScore}/>
      <h1>{title}</h1>
      <StopWatch/>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object)
}
export default Header;