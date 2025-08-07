import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './src/Pages/Home'
import Cadastro from './src/Pages/Cadastro';
import Login from './src/Pages/Login';
import Detalhe from './src/Pages/Detalhe'
import HomeMusic from './src/Pages/HomeMusic'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Detalhe" element={<Detalhe />} />
                <Route path="/HomeMusic" element={<HomeMusic />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;