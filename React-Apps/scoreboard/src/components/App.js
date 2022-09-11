import React,{useState ,useRef,useEffect} from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";





const App = (props) => {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ]);
  

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  const handleScoreChange = (id, delta) => {
      setPlayers(score => score.map(player=>{
        if(player.id=== id){
          return{
            name: player.name,
            score: player.score + delta,
            id: player.id
          }
        }
        return player
      }));
    
  }
  const [highScore, setHightScore]= useState();
  useEffect(()=>{
    const scores = players.map(player => player.score);
    setHightScore(Math.max(...scores));
  },[players])


  const nextPlayerId = useRef(5)
  const addPlayerHandler =(name) => {
    setPlayers( prevPlayers => [
      ...prevPlayers,
      {
        name,
        score:0,
        id:nextPlayerId.current++
      }
    ] )
  
  }


  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        players={players}
      />

      {/* Players list */}
      {players.map(player =>
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
          changeScore={handleScoreChange}
          isHighScore = {player.score === highScore && highScore !==0}
        />
      )}
      <AddPlayerForm addPlayer={addPlayerHandler}/>
    </div>
  );

}

export default App;
