import POSTS from "./pages/POSTS";
import NewPost from "./pages/NewPost";
import Post from "./pages/Post";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />}>
          <Route path="new" element={<NewPost />} /> {/*Nested Route*/}
          <Route path=":postId" element={<Post />} /> {/*Dynamic Route*/}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
