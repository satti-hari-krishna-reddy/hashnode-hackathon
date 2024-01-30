import './styles/tailwind.css';
import DropDown from './dropDown';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('https://gql.hashnode.com', {
          query: `
            query Publication {
              publication(host: "blog.developerdao.com") {
                posts(first: 0) {
                  edges {
                    node {
                      title
                      brief
                      url
                      id
                    }
                  }
                }
              }
            }
          `,
        });

        const fetchedBlogs = response.data.data.publication.posts.edges.map((edge) => edge.node);
        setBlogs(fetchedBlogs);
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

 
  return (
    <div className="max-w-2xl lg:w-full mx-auto my-8">
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-4 rounded shadow flex items-center justify-between">
            <div>
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold mb-2 overflow-hidden overflow-ellipsis">
                  {blog.title}
                </h3>
              </a>
              <p className="text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis max-w-full">
                {truncateText(blog.brief, 23)}
              </p>
            </div>
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">undo</span>

            <DropDown blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
