import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container flex flex-col min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">Social Media Analytics</h1>
          <div className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/posts" className="hover:underline">Posts</Link>
            <Link to="/users" className="hover:underline">Users</Link>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <aside className="w-1/4 p-4 bg-white shadow-md">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><Link to="/" className="block p-2 hover:bg-gray-200">Dashboard</Link></li>
              <li><Link to="/posts" className="block p-2 hover:bg-gray-200">Top Posts</Link></li>
              <li><Link to="/users" className="block p-2 hover:bg-gray-200">Top Users</Link></li>
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
