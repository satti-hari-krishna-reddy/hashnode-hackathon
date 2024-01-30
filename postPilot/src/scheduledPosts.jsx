import './styles/tailwind.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ScheduledPosts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://automatic-cod-pjrgv5v566x4c9pgp-3000.app.github.dev/fetch-blogs'); // Update the URL to match your backend server
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

  return (
    <div className="max-w-2xl lg:w-full mx-auto my-8">
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-4 rounded shadow flex items-center justify-between">
            <div>
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              </a>
              <p className="text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis">
                {truncateText(blog.brief, 25)}
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-gray-500 text-sm">{new Date(blog.scheduledTime).toLocaleString()}</p>
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
                  // Convert the comma-separated string to an array
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
