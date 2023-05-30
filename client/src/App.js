import { Route, Routes } from "react-router-dom";


import { MainNavigation } from "./component/layout/MainNavigation";
import { PostPage } from "./component/postPage/PostPage";
import { Home } from "./component/home/Home";
import { Login } from "./component/routes/Login";
import { Register } from "./component/routes/Register";
import { UserContextProvider } from "./context/UserContext";
import { CreatePost } from "./component/createPost/CreatePost";
import { Edit } from "./component/edit/Edit";


function App() {
  return (
    <div className="main">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<MainNavigation />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </UserContextProvider>
    
    </div>
  );
}

export default App;
