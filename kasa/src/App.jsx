import { BrowserRouter as Router,
  Routes,
  Route,
 } from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'
import Logement from './components/Logement/logement'
import NotFound from './components/NotFound/notfound'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
