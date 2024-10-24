import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import FavouritePage from './pages/FavouritePage'
import Layout from './layouts/Layout'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<IndexPage />} index  />
                <Route path='/favoritos' element={<FavouritePage />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
