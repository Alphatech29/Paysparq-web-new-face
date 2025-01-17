import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorBoundary from './utils/ErrorBoundary';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from './pages/home/home';
import NotFound from './pages/NotFound';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import Preload from '../components/preload/Preload'; 
import '@fontsource/inter/400.css'; 
import '@fontsource/inter/500.css'; 
import '@fontsource/inter/600.css'; 
import '@fontsource/inter/700.css'; 


function Layout({ children }) {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith('/auth') || location.pathname === '*';

  return (
    <>
      <Preload />
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="auth/sign-up" element={<SignUp />} />
            <Route path="auth/sign-in" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App;