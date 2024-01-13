import { useEffect } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/home.tsx'

function App()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
