import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Views/home'
import Career from './Views/Career'
import Csr from './Views/Csr'
import Header from './components/Header'
import SubContractor from './Views/SubContractor'

import './App.css';
function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/career" element={<Career />} />
        <Route path="/subcontractor" element={<SubContractor />} />
        <Route path="/csr" element={<Csr />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;