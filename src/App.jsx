import Home from './Home'
import IT from './IT'
import NON_IT from './NON_IT'
import INTERVIEW from './INTERVIEW'
import LANGUAGES from './LANGUAGES'
import COLLAB from './COLLAB'
import SearchResults from './SearchResults'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import Welcome from './Welcome'
import Footer from './Footer'

function App() {
  return (
    <>
      <div className='main'>
        <BrowserRouter>
          <Routes>
            <Route path='/search' element={<SearchResults />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='/IT' element={<IT />}></Route>
            <Route path='/NON-IT' element={<NON_IT />}></Route>
            <Route path='/INTERVIEW' element={<INTERVIEW />}></Route>
            <Route path='/LANGUAGES' element={<LANGUAGES />}></Route>
            <Route path='/COLLAB' element={<COLLAB />}></Route>
            <Route path='/:category/:id' element={<ProductDetails />}></Route>
            <Route path='/Welcome' element={<Welcome/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>


    </>
  )
}
export default App
