import './styles/tailwind.css'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
 
]
const features = [
  {
    name: 'schedule your post sharing',
    description:
      'share your post at your scheduled time.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Automated post sharing',
    description:
      'your post will be shared automatically when you publish a post , we use Hashnode built in webhooks',
    icon: LockClosedIcon,
  },
  {
    name: 'share to multiple platforms',
    description:
      'share your blog to mutliple social media platforms with just a single click.',
    icon: ArrowPathIcon,
  },
  {
    name: 'custom tweet with chatGpt',
    description:
      'postPilot uses Chatgpt to automatically generate a unique message for every post you share .',
    icon: FingerPrintIcon,
  },
]

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]
const App = ()=> {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> 
            </a>
            
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
        
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 bg-opacity-50 backdrop-filter backdrop-blur-md w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
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
        <div className="mx-auto max-w-2xl py-32 sm:py-30 lg:py-30">
         
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Elevate your Hashnode blogging experience with PostPilot !
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
            Automate Blog Sharing, Schedule Tweets, and Enhance Your Hashnode Experience and Power Up with AI Integration!.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
         
        </div>
      </div>
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
<div
  className="relative right-[calc(50%-11rem)] w-[36.125rem] h-[36.125rem] translate-x-1/2 rotate-[90deg] bg-[#9EEFFF] opacity-50 sm:right-[calc(50%-30rem)] sm:w-[72.1875rem]"
  style={{
    borderRadius: '100%', // Use border-radius to create a circle
    filter: 'brightness(120%)', // Increase brightness
  }}
/>




        </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-300">Share seamlessly and faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to automate sharing your post
          </p>
          
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

    </div>
    <div className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
     
   
    
      <div className="mx-auto max-w-7xl px-16 lg:px-40">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About postPilot</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          seamlessly integrates with Hashnode's GraphQL API, leveraging its robust capabilities. When you publish a new blog post on Hashnode, TweetCraft, through the magic of webhooks, is instantly notified.
         
          </p>
          
          <h3 className="text-3xl font-semiBold tracking-tight text-white"> Custom Message Generation:
</h3>
<p className="mt-6 text-lg leading-8 text-gray-300"> Upon receiving the webhook trigger, TweetCraft efficiently extracts the content of your Hashnode blog post. This content is then fed into ChatGPT, an advanced AI language model, which works its magic to craft personalized and engaging tweet messages tailored to your unique style.</p>
<h3 className="text-3xl font-semiBold tracking-tight text-white"> Social Media Integration:
</h3>
<p className="mt-6 text-lg leading-8 text-gray-300">Armed with the AI-generated messages and the extracted blog content, TweetCraft orchestrates the scheduling of tweets. These scheduled tweets, infused with your personal touch, are automatically posted to your Twitter account. The entire process unfolds seamlessly, enhancing your social media visibility and engaging your audience.</p>
        </div>
       
      </div>
    </div>
    </div>
  )
}


export default App
