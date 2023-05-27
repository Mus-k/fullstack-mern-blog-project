import { Route, Routes } from "react-router-dom";

import { Login } from "./component/routes/Login";
import { Register } from "./component/routes/Register";
import { MainNavigation } from "./component/layout/MainNavigation";
import { Home } from "./component/home/Home";

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<MainNavigation/>}>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
     </Route>
      </Routes>
     
     
    </div>
  );
}

export default App;
