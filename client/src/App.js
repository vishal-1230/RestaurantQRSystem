import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import { useState } from 'react';
import Dashboard from './Dashboard';
import Qr from './Qr';
import Checkout from './Checkout';
import Receipt from './Receipt';


function App() {
  async function getToken(){
    const response = await fetch()
  }

  const [cartList, setcartList] = useState([])
  
  return (
    <BrowserRouter >
    <Routes>
      <Route path='/dashboard/:sid' element={<Dashboard cartList={cartList} setcartList={setcartList} />} />
      <Route path='/checkout/:sid' element={<Checkout cartList={cartList} />} />
      <Route path='/receipt/:orderid/:sid/:method/:total/:name/:number' element={<Receipt cartList={cartList} />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
