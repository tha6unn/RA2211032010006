import React, { useState, useEffect } from "react";
import { fetchUsers, fetchUserPosts } from "../services/api";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getFeed = async () => {
      const users = await fetchUsers();
      let allPosts = [];

      for (const userId of Object.keys(users)) {
        const posts = await fetchUserPosts(userId);
        allPosts = [...allPosts, ...posts];
      }

      allPosts.sort((a, b) => b.id - a.id);
      setPosts(allPosts);
    };

    getFeed();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Live Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className="border p-2">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
