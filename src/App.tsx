import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import ChineseClub from './ChineseClub'
import ChineseHonorSociety from './ChineseHonorSociety'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className = 'App'>
        <Navbar />
        <div className = "content">
          <Routes>
            <Route path="/chinese-club" element={<ChineseClub/>} />
            <Route path="/chinese-honor-society" element={<ChineseHonorSociety/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
