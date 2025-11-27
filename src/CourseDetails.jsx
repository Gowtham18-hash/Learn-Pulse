import { Link } from 'react-router-dom'
import './CourseDetails.css'
function CourseDetails(props) {

    return (
        <>
            <div className="card" >
                <Link to={`/${props.category}/${props.id}`} style={{ textDecoration: "none", color: "black" }}>
                    <div className='content'>
                    <img src={props.image} alt="" />
                        <h3 >{props.name}</h3>
                        <h6 >{props.description}</h6>
                        <p >{props.price}</p>
                        <p >Explore Now</p>
                    </div>
                </Link>
            </div>

        </>

    )
}
export default CourseDetails