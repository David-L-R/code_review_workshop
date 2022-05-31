import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PostPage, PostsPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path='/' element={<PostsPage />} />
      <Route path='/posts/:id' element={<PostPage />} />
    </Routes>
  );
}

export default App;
