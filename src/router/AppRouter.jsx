import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { MarvelPage, DcPage, SearchPage } from '../heroes';
import { Navbar } from '../ui/components/Navbar';




export const AppRouter = () => {
  return (
    <>
        <Navbar />

        <Routes>  
            
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={ <DcPage />} />
            <Route path="search" element={ <SearchPage />} />

            <Route path="login" element={ <LoginPage />} />

            <Route path="/" element={ <Navigate to="/marvel" />} />
        </Routes>
    
    </>
  )
}