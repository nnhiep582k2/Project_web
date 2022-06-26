import Entrance from './components/Entrance/Entrance';
import Home from './components/Home/Home';
import Notification from './components/Pages/Notification';
import Saved from './components/Pages/Saved';
import People from './components/Pages/People';
import Profile from './components/Pages/Profile';
import Settings from './components/Pages/Settings';
import GlobalStyles from './components/GlobalStyles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <GlobalStyles>
            <BrowserRouter basename='/Project_web'>
                <Routes>
                    <Route path="/" element={<Entrance />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </BrowserRouter>
        </GlobalStyles>
    );
}

export default App;
