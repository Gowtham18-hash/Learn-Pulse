import { useState,useEffect } from "react";
import CourseDetails from "./CourseDetails";
function LANGUAGES() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/LANGUAGES")
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
                category="LANGUAGES"
            />
    )
    return (
        <>
        <div>
            <h1>
"                Code your ideas into reality—one language at a time.
"            </h1>
        </div>
        <div id="group">
             {CourseList }
        </div>
        </>
       
    );
}

export default LANGUAGES