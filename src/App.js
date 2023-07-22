import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
 
      <Routes>
        {/* <Route path="/" exact element={<Notes />} /> */}
        <Route path="/korepetycje/:dynamicWord" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

