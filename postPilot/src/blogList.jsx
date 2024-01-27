import './styles/tailwind.css';
import DropDown from './dropDown';
import React from 'react';

const blogs = [
  { title: 'Blog 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Blog 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Blog 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  { title: 'Blog 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Blog 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Blog 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },{ title: 'Blog 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Blog 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Blog 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  // Add more fake data as needed
];

const BlogList = () => {
  return (
    <div className="max-w-2xl lg:w-full mx-auto my-8">
      <div className="space-y-4">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white p-4 rounded shadow flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600">{blog.content}</p>
            </div>
            <DropDown blogTitle={blog.title} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default BlogList;
