import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import Test from './pages/test';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/project/:id' element={<Project />} />
                <Route path='/test' element={<Test />} />
                <Route
                    path='*'
                    element={
                        <div style={{padding: '40px', textAlign: 'center'}}>
                            <h1>404 - Page Not Found</h1>
                        </div>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
