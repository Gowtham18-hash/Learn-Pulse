import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import "./ProductDetails.css"
import { Link } from 'react-router-dom'
import Welcome from './Welcome'
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
    fetch(`http://localhost:3000/${category}/${id}`)
      .then(response => response.json())
      .then(data => setDetails(data))
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
          {details?.portions?.map((point, i) => <h3 key={i}>{point}</h3>)}
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
