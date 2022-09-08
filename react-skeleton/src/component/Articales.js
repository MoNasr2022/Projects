import React, {useEffect, useState} from "react";
import SkeletonArticale from "../Skeletons/SkeletonArticale";

const Articales = () => {
    const [articals, setarticals] = useState(null);
    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setarticals(data);
             console.log(data);
        }, 5000);
       
    })
    return(
        <div className="articales">
            <h2>Algorizin Questions</h2>

            {articals && articals.map(articale =>(
                <div className="articale" key={articale.id}>
                    <h3>{articale.title}</h3>
                    <p>{articale.body}</p>
                </div>
                
            )) }
            {!articals && [1,2,3,4,5].map(n => <SkeletonArticale key={n}/>)}
        </div>
    )
}


export default Articales;



