import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Social Media Analytics</h1>
      <nav>
        <Link to="/feed">Go to Feed</Link>
        <br />
        <Link to="/trending">View Trending Posts</Link>
      </nav>
    </div>
  );
}

export default Home;
