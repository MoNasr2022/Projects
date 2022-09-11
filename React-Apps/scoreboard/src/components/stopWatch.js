import { useState, useEffect } from "react"

const StopWatch = () => {
    const [isRunning, setIsrunning] = useState(false);
    const isRunningHanler = () =>{
        setIsrunning((prevValue) => !prevValue)
    }
    const[timer, setTimer] = useState(0)
    const timeHandler = () => {
        setTimer(0)
    }
    useEffect(() => {
        let id;
        if (isRunning){
            id = setInterval(() => setTimer((prevtime) => prevtime + 1),1000)
        }
        return () => clearInterval(id)
    },[isRunning])

    return(
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">{timer}</span>
            <button onClick={isRunningHanler}>
                {/* turnary operator */}
                {isRunning ? "Stop" : "Start"}
                </button>
            <button
            onClick={timeHandler}
            >Reset</button>
        </div>
    )
}

export default StopWatch