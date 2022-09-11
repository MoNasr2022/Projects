import React,{ useState} from 'react';
import Star from './Star';
const StarRating = () => {
    // Initialize a 'courseRating' state
     const [courseRating, setCoursRating] = useState(0)

    // Write a function that returns 5 Star components
    const renderStars=() =>{
        let stars = [];
        let maxRating = 5 ;
        for (let i = 0; i < maxRating; i++) {
            stars.push(
                <Star
                    isSelected  = {courseRating > i}
                    setRating = { () =>courseRatingHandler(i + 1) }
                    key={i}
                />
            )
            
        }
        return stars
    }
    // Write an event handler that updates the courseRating state.

    // Pass the function to a Star component via props
    const courseRatingHandler = (rating) => {
       if(courseRating === rating){
         setCoursRating(0)
       }else{
        setCoursRating(rating)
       }
    }
  


    return (
        <ul className='course--stars'>
            {/* Render the Star components */}
            {renderStars()}
           
        </ul>
    );
}

export default StarRating;