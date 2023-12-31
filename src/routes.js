import Carrinho from 'pages/Carrinho';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import PaginaPadrao from './components/PaginaPadrao';
import Categoria from './pages/Categoria';
import Home from './pages/Home';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/categoria/:nomeCategoria' element={<Categoria/>}/>
                    <Route path='/carrinho' element={<Carrinho/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}