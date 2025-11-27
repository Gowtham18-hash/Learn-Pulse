import { useState,useEffect } from "react";
import CourseDetails from "./CourseDetails";
import { Link } from "react-router-dom";
function IT() {

    const [courses, setCourses] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/IT")
            .then(response => {
                return response.json()
            })
            .then(data => setCourses(data))
    }, [])

    if (!courses) {
        return <></>
    }

    const CourseList = courses.map(
        (courses) =>
           <CourseDetails key={courses.id}
                name={courses.name}
                // price={courses.price}
                image={courses.image1}
                id={courses.id}
                category="IT"
            />
    )
    return (
        <>
        <div>
            <h1>Learn, code, and create your path in the world of technology
</h1>
        </div>
        <div id="group">
             {CourseList }
        </div>
        </>
       
    );
}

export default IT