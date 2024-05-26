import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from './components/Admin/Order';

import NotFound from './components/NotFound';
import Product from './components/Admin/Product';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/admin">
          <Route path='product' element={<Product/>} />
          <Route path="order" element={<Order/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}


export default App;
