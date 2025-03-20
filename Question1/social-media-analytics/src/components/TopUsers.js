import React, { useState, useEffect } from "react";
import { fetchUsers, fetchUserPosts } from "../services/api";

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const getTopUsers = async () => {
      const users = await fetchUsers();
      const userPostCounts = [];

      for (const [id, name] of Object.entries(users)) {
        const posts = await fetchUserPosts(id);
        userPostCounts.push({ id, name, postCount: posts.length });
      }

      userPostCounts.sort((a, b) => b.postCount - a.postCount);
      setTopUsers(userPostCounts.slice(0, 5));
    };

    getTopUsers();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Top Users</h2>
      <ul>
        {topUsers.map((user) => (
          <li key={user.id}>{user.name} - {user.postCount} posts</li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
