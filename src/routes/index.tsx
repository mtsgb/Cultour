import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home';
import Location from '@/pages/Location';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/location/:cidade' element={<Location />}/>
        </Routes>
    );
}