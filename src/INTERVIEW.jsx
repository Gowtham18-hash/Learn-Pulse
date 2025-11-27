import { useState,useEffect } from "react";
import CourseDetails from "./CourseDetails";
function INTERVIEW() {

    const [courses, setCourses] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/INTERVIEW")
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
                category="INTERVIEW"
            />
    )
    return (
        <>
        <div>
            <h1>
"                Turn your preparation into performance and your performance into success.
"            </h1>
        </div>
        <div id="group">
             {CourseList }
        </div>
        </>
       
    );
}

export default INTERVIEW