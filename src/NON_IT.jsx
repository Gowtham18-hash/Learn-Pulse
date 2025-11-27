import { useState, useEffect } from "react";
import CourseDetails from "./CourseDetails";
function NON_IT() {

    const [courses, setCourses] = useState(null);

    useEffect(() => {
        fetch("/ALL.json")
            .then(response => {
                return response.json()
            })
            .then(data => setCourses(data['NON-IT']))
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
                category="NON-IT"
            />
    )
    return (
        <>
            <div>
                <h1>
                    "                Unlock new opportunities with skills that go beyond technology.
                    "            </h1>
            </div>
            <div id="group">
                {CourseList}
            </div>
        </>

    );
}

export default NON_IT