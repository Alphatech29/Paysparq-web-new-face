import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from "../components/header/Header";
import Home from './pages/home/Home'; 
import '@fontsource/inter/400.css'; 
import '@fontsource/inter/500.css'; 
import '@fontsource/inter/600.css'; 
import '@fontsource/inter/700.css'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </Router>
  );
}
export default App;