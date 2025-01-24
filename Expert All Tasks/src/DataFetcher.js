// src/components/DataFetcher.js
import React, { useEffect, useState } from 'react';
import './DataFetcher.css';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error("Fetch error: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center"><div className="spinner-border" role="status"></div>Loading...</div>;
  if (error) return <div className="text-danger text-center">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h1 className="text-center">Posts</h1>
      <ul className="list-group">
        {data.map(post => (
          <li key={post.id} className="list-group-item">
            <h2 className="h5">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;