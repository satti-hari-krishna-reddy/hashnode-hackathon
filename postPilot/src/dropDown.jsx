import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ blog }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [twitterChecked, setTwitterChecked] = useState(false);
  const [linkedinChecked, setLinkedinChecked] = useState(false);
  const [scheduledTime, setScheduledTime] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleShareNow = () => {
    const selectedPlatforms = getSelectedPlatforms();
    if (selectedPlatforms === '') {
      alert('Please select at least one platform.');
    } else {
      alert(`Sharing "${blog.title}" on ${selectedPlatforms} now!`);
      setIsOpen(false);
    }
  };

  const handleSchedule = () => {
    const selectedPlatforms = getSelectedPlatforms();
    if (selectedPlatforms === '') {
      alert('Please select at least one platform.');
    } else if (scheduledTime === '') {
      alert('Please select a scheduled time.');
    } else {
      alert(`Scheduling "${blog.title}" on ${selectedPlatforms} at ${scheduledTime}`);
      
      setIsOpen(false);
    }
  };

  const getSelectedPlatforms = () => {
    const platforms = [];
    if (twitterChecked) platforms.push('Twitter');
    if (linkedinChecked) platforms.push('LinkedIn');
    return platforms.join(', ');
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 focus:outline-none">
        <span className="text-gray-600">...</span>
      </button>

      {isOpen && (
        <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="p-4 space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={twitterChecked}
                onChange={() => setTwitterChecked(!twitterChecked)}
                className="mr-2"
              />
              <span>Share on Twitter</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={linkedinChecked}
                onChange={() => setLinkedinChecked(!linkedinChecked)}
                className="mr-2"
              />
              <span>Share on LinkedIn</span>
            </label>

            <button
              onClick={handleShareNow}
              className="block w-full text-left py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-md transition duration-300 ease-in-out flex items-center"
            >
              <span className="flex-grow">Share Now</span>
            </button>

            <div className="flex items-center space-x-2">
              <input
                type="time"
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
                max="23:59"
                className="px-2 py-1 border rounded focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSchedule}
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Schedule
              </button>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
