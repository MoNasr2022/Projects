import Articales from "./component/Articales";
import User from "./component/User";

function App() {
  return (
    <div className="App">
     <header>
      <h1>Algorizin</h1>
     </header>
     <div className="content">
      <Articales/>
      <User/>
     </div>
    </div>
  );
}

export default App;
