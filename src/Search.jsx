import './index.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Search() {

  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchHandler = () => {
    navigate('search?keyword=' + keyword)
  }
  return (
    <div  className='search-elements'>
      <input 
        className='search-box'
        type="search"
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key==="Enter")
            searchHandler()
        }}
        placeholder='Search...'
      />
      
    </div>
  )
}

export default Search
