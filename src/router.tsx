import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import FavouritePage from './pages/FavouritePage'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path='/favoritos' element={<FavouritePage />} />
        </Routes>
    </BrowserRouter>
  )
}
