import React from 'react'
import CourseDetails from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
function Course(id) {

const [course,setCourse]=useState(null)

useEffect(() => {
        fetch(`ALL.json/${props.category}`+id)
            .then(response => {
                return response.json()
            })
            .then(data => setCourse(data.course))  
    }, [])

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}
export default Course
