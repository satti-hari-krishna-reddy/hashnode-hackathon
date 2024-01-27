import './styles/tailwind.css';
import React from 'react';


const RegistrationForm = () => {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-black text-white flex justify-center items-center h-screen">
      <div
  className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  aria-hidden="true"
>
 <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[#9B59B6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
style={{
clipPath:
'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
filter: 'brightness(120%)',
}}
/>


</div>
      <div className="max-w-md w-full p-6 space-y-4 bg-gray-800 rounded shadow-lg">
        <div className="space-y-4">
          <label htmlFor="hashnodeBlog" className="block font-medium text-gray-300">
            Your Hashnode Blog:
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
                    Turn ON auto share (Recommended)
                  </label>
                  <p className="text-gray-500">Get notified when someone posts a comment on a posting.</p>
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
    </div>
  );
};

export default RegistrationForm;
