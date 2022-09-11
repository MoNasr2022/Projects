import SkeletonElement from "./SkeletonElement"
import './Sketeton.css'

const SkeletonArticale = () =>{
    return(
        <div className="skeleton-wrapper">
            <div className="skeleton-Element">
                <SkeletonElement type="title"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
                
            </div>
        </div>
    )
}

export default SkeletonArticale