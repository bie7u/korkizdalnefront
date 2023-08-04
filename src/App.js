import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import MyLessonsPage from './pages/MyLessonsPage';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/korepetycje/:dynamicWord" element={<LandingPage />} />
        <Route path="/koszyk/" element={<CheckoutPage />} />
        <Route path="/logowanie/" element={<LoginPage />} />
        <Route path="/panel_uzytkownika/" element={<DashboardPage />} />
        <Route path="/panel_uzytkownika/moje_korepetycje/" element={<MyLessonsPage />} />
        <Route path="/panel_uzytkownika/profil/" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;

