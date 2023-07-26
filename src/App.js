import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Router>
 
      <Routes>
        {/* <Route path="/" exact element={<Notes />} /> */}
        <Route path="/korepetycje/:dynamicWord" element={<LandingPage />} />
        <Route path="/koszyk/" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

