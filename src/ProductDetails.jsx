import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import "./ProductDetails.css"
import { Link } from 'react-router-dom'
function ProductDetails() {

  const [details, setDetails] = useState({

    "id": 0,
    "name": "",
    "description": "",
    "price": "",
    "image2": null

  })
  const { id, category } = useParams()

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!id || !category) return;
    fetch('/ALL.json')
      .then(response => response.json())
      .then(data => {
        // Get the category array from the JSON
        const categoryData = data[category];
        if (categoryData) {
          // Find the specific course by id
          const course = categoryData.find(item => item.id == id);
          if (course) {
            setDetails(course);
          }
        }
      })
      .catch(e => console.log("err: ", e))
    console.log(category, id)
  }, [id, category, searchParams])

  console.log(details);
  return (
    <div className='ProductDetails'>
      <div id='left-content'>
        <img id='ProductImage' src={details.image2} alt="" />
      </div>

      <div className="divider"></div>
      <div id="right-content">
        <h1>{details.name}</h1>
        <h3>{details.description}</h3>
        <h2>Topics will be covered!!</h2>
        <div>
          {details?.portions?.map((points, i) => <h3 key={i}>{points}</h3>)}
        </div>
        <div id='details-footer'>
          <p >{details.price}</p>
          <Link to="/Welcome" >
            <button>Register now✨</button>
          </Link>
        </div>

      </div>


    </div>
  )
}

export default ProductDetails
