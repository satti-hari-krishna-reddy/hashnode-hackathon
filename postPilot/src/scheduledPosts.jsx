// ScheduledPosts.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScheduledPosts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://automatic-cod-pjrgv5v566x4c9pgp-3000.app.github.dev/fetch-blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };

  const convertStringToArray = (str) => {
    return str.split(',').map(item => item.trim());
  };

  const handleUndo = async (blogId) => {
    try {
      await axios.post('https://automatic-cod-pjrgv5v566x4c9pgp-3000.app.github.dev/remove-blog', { id: blogId });
      const response = await axios.post('https://automatic-cod-pjrgv5v566x4c9pgp-3000.app.github.dev/fetch-blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error removing blog:', error);
    }
  };

  return (
    <div className="max-w-2xl lg:w-full mx-auto my-8">
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded shadow flex items-center justify-between">
            <div>
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              </a>
              <p className="text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis">
                {truncateText(blog.brief, 25)}
              </p>
            </div>
            <span
              className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10"
              onClick={() => handleUndo(blog.id)}
              style={{ cursor: 'pointer' }}
            >
              undo
            </span>
            <div className="flex flex-col items-end">
              <p className="text-gray-500 text-sm">{blog.scheduledTime.toLocaleString()}</p>
              <div className="flex flex-col space-y-2">
                {Array.isArray(blog.selectedPlatforms) ? (
                  blog.selectedPlatforms.map((platform, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10"
                    >
                      {platform}
                    </span>
                  ))
                ) : (
                  convertStringToArray(blog.selectedPlatforms).map((platform, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10"
                    >
                      {platform}
                    </span>
                  ))
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledPosts;
