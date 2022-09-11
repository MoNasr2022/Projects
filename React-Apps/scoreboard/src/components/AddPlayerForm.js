import {  useRef } from "react";
import  PropTypes  from "prop-types";
import Counter from "./Counter";

const AddPlayerForm = ({addPlayer}) => {
    // const [value, setValue] = useState("");
    const playerInput = useRef();


    // const formChangeHandler = (event) =>{
    //     setValue(event.target.value)
    // }

    const submitHandler = (event)=>{
        event.preventDefault();
        addPlayer(playerInput.current.value);
        event.currentTarget.reset();
        // setValue('');
    }

    

    return(
        <form onSubmit={submitHandler}>
            <input
                type="text"
                ref={playerInput}
                // value={value}
                placeholder="Enter a player name"
                // onChange={formChangeHandler}
            />
            <input
                type="submit"
                value="Add player"
            />
        </form>

    );
}
Counter.propTypes = {
    id:PropTypes.number,
    score:PropTypes.number,
    changeScore:PropTypes.func
}

export default AddPlayerForm;