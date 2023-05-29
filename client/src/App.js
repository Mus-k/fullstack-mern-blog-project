import { Route, Routes } from "react-router-dom";
import "./App.css";

import { MainNavigation } from "./component/layout/MainNavigation";
import { PostPage } from "./component/postPage/PostPage";
import { Home } from "./component/home/Home";
import { Login } from "./component/routes/Login";
import { Register } from "./component/routes/Register";
import { UserContextProvider } from "./context/UserContext";
import { CreatePost } from "./component/createPost/CreatePost";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<MainNavigation />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
