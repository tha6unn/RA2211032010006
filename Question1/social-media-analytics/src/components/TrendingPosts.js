import React, { useState, useEffect } from "react";
import { fetchUsers, fetchUserPosts, fetchPostComments } from "../services/api";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const getTrendingPosts = async () => {
      const users = await fetchUsers();
      const postCommentCounts = [];

      for (const userId of Object.keys(users)) {
        const posts = await fetchUserPosts(userId);

        for (const post of posts) {
          const comments = await fetchPostComments(post.id);
          postCommentCounts.push({ ...post, commentCount: comments.length });
        }
      }

      const maxComments = Math.max(...postCommentCounts.map(p => p.commentCount));
      setTrendingPosts(postCommentCounts.filter(p => p.commentCount === maxComments));
    };

    getTrendingPosts();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Trending Posts</h2>
      {trendingPosts.map((post) => (
        <div key={post.id} className="border p-2">
          <p>{post.content}</p>
          <p>Comments: {post.commentCount}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
