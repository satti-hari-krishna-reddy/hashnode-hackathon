import './styles/tailwind.css';
import Popup from './popup';
import React, { useState } from 'react';

const Settings = () => {
  const [delayedAutoShare, setDelayedAutoShare] = useState(false);
  const [delayHours, setDelayHours] = useState(1);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  }

  const handleDelayedAutoShareChange = () => {
    setDelayedAutoShare(!delayedAutoShare);
  };

  const handleDelayHoursChange = (hours) => {
    setDelayHours(hours);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full p-6 space-y-4 bg-gray-800 rounded shadow-lg">
      <div className="space-y-4">
          <label htmlFor="hashnodeBlog" className="block font-medium text-gray-300">
            Your Hashnode API key:
          </label>
          <input
            type="text"
            id="hashnodeBlog"
            autoComplete="off"
            className="text-white block w-full rounded-md border-gray-500 py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-700"
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
            className="text-white block w-full rounded-md border-gray-500 py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-700"
          />
        </div>

       
  <div className="flex space-x-4">

  <div className="space-y-4 flex-shrink">
    <label htmlFor="twitterApiKey" className="block font-medium text-gray-300">
      Twitter API Key:
    </label>
    <input
      type="text"
      id="twitterApiKey"
      autoComplete="off"
      className="text-white block w-full rounded-md border-gray-500 py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-700"
    />
  </div>

 
  <div className="space-y-4 flex-shrink">
    <label htmlFor="newApiKey" className="block font-medium text-gray-300">
      New API Key:
    </label>
    <input
      type="text"
      id="newApiKey"
      autoComplete="off"
      className="text-white block w-full rounded-md border-gray-500 py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-700"
    />
  </div>
</div>
<div className="flex space-x-4">

<div className="space-y-4 flex-shrink">
  <label htmlFor="twitterApiKey" className="block font-medium text-gray-300">
    Twitter API Key:
  </label>
  <input
    type="text"
    id="twitterApiKey"
    autoComplete="off"
    className="text-white block w-full rounded-md border-gray-500 py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-700"
  />
</div>


<div className="space-y-4 flex-shrink">
  <label htmlFor="newApiKey" className="block font-medium text-gray-300">
    New API Key:
  </label>
  <input
    type="text"
    id="newApiKey"
    autoComplete="off"
    className="text-white block w-full rounded-md border-gray-500 py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-700"
  />
</div>
</div>


        
        <div className="space-y-4">
          <fieldset>
            <div className="mt-6 space-y-6">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="autoShare"
                    name="autoShare"
                    type="radio"
                    checked={!delayedAutoShare}
                    onChange={() => handleDelayedAutoShareChange(false)}
                    className="h-4 w-4 rounded border-gray-500 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="autoShare" className="font-medium text-gray-300">
                    Auto share
                  </label>
                  <p className="text-gray-500">Share your next blog automatically when published</p>
                </div>
              </div>
              
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="delayedAutoShare"
                    name="autoShare"
                    type="radio"
                    checked={delayedAutoShare}
                    onChange={() => handleDelayedAutoShareChange(true)}
                    className="h-4 w-4 rounded border-gray-500 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="delayedAutoShare" className="font-medium text-gray-300">
                    Delayed auto share
                  </label>
                  <p className="text-gray-500">Share your next blog automatically after a delayed time when published</p>
                  {/* Show options for delay hours */}
                  <select
                    value={delayHours}
                    onChange={(e) => handleDelayHoursChange(e.target.value)}
                    className="block w-full rounded-md border-gray-500 py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent bg-gray-700"
                  >
                    {[...Array(24)].map((_, index) => (
                      <option key={index} value={index + 1}>{`${index + 1} hr`}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        {/* Your existing code */}

        <div className="flex justify-center">
          
          <button onClick={openPopup} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
          <Popup isOpen={isPopupOpen} onClose={closePopup} message="Settings Saved !!!" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
