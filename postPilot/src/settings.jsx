import './styles/tailwind.css';
import React from 'react';


const Settings = () => {
  return (
   
      <div className="max-w-md w-full p-6 space-y-4 bg-gray-800 rounded shadow-lg">
        <div className="space-y-4">
          <label htmlFor="hashnodeBlog" className="block font-medium text-gray-300">
            Your Hashnode API key:
          </label>
          <input
            type="text"
            id="hashnodeBlog"
            autoComplete="off"
            className="block w-full rounded-md border-gray-500 py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-700"
          />
        </div>
        
        <div className="space-y-4">
          <label htmlFor="linkedinApiKey" className="block font-medium text-gray-300">
            LinkedIn API Key:
          </label>
          <input
            type="text"
            id="linkedinApiKey"
            autoComplete="off"
            className="block w-full rounded-md border-gray-500 py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-700"
          />
        </div>

        <div className="space-y-4">
          <label htmlFor="twitterApiKey" className="block font-medium text-gray-300">
            Twitter API Key:
          </label>
          <input
            type="text"
            id="twitterApiKey"
            autoComplete="off"
            className="block w-full rounded-md border-gray-500 py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-700"
          />
        </div>

        <div className="space-y-4">
          <fieldset>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-500 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="comments" className="font-medium text-gray-300">
                    Auto share
                  </label>
                  <p className="text-gray-500">Share your next blog automatically when published</p>
                </div>
                
              </div>
              
            </div>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-500 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="comments" className="font-medium text-gray-300">
                    Delayed auto share
                  </label>
                  <p className="text-gray-500">Share your next blog automatically but after a delayed time when published</p>
                </div>
                
              </div>
              
            </div>
          </fieldset>
        </div>

        <div className="flex justify-end">
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2">
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </div>
      </div>
  );
};

export default Settings;
