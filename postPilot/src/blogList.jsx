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
            <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">undo</span>

            <DropDown blogTitle={blog.title} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default BlogList;
