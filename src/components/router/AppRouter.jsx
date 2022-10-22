import {Navigate,Route, Routes} from 'react-router-dom';
import Menu from '../Menu';


function AppRouter() {
    return ( 
        <>
        <Routes>
            
            <Route path="menu" element={<Menu/>}/>
            <Route path="/" element={<Navigate to="/home"/>} />
        </Routes>
        </>
     );
}

export default AppRouter;