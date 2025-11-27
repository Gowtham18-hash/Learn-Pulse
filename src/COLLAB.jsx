import { useState,useEffect } from "react";
import CourseDetails from "./CourseDetails";
function COLLAB() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/COLLAB")
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
                // description={courses.description}
                // price={courses.price}
                image={courses.image1}
                id={courses.id}
                category="COLLAB"
            />
    )
    return (
        <>
        <div>
            <h1>
"                Where coding meets collaboration and ideas become projects.
"            </h1>
        </div>
        <div id="group">
             {CourseList }
        </div>
        </>
    );
}

export default COLLAB