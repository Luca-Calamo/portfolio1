import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import './App.css';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/project/:id' element={<Project />} />
            </Routes>
        </Router>
    );
}

export default App;
