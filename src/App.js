import "./App.css";
import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import { getUser } from "./utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());

  return( 
  <main className="App">
    {user ? 
    (
    <>
    <Nav user={user} setUser={setUser} />
    <Routes>
      <Route path='/orders/new'  element={<NewOrderPage />}/>
      <Route path='/orders' element={<OrderHistoryPage />}/>
    </Routes> 
    </>)
    : 
    <AuthPage setUser={setUser} />}
    
    </main>
  );
}

export default App;
