import { SiReact } from 'react-icons/si'
function App() {
  return (
    <main className='grid h-screen max-w-5xl px-2 mx-auto place-items-center sm:px-4 lg:px-0'>
      <section className='space-y-2 selection:bg-blue-300 dark:selection:bg-pink-500 dark:selection:text-white'>
        <div className='grid text-blue-500 place-items-center text-7xl lg:text-9xl dark:text-blue-400'>
          <SiReact />
        </div>
        <div className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text'>
          <h1 className='text-xl font-bold text-center text-transparent uppercase lg:text-4xl'>
            egolege
          </h1>
        </div>
        <p className='text-center text-gray-800 lg:text-lg dark:text-gray-300'>
          React, Vite w/ Tailwind CSS w/SCSS minimalist starter template.
        </p>
        <div className='w-full h-1 overflow-hidden rounded-full'>
          <div className='w-1/2 h-full bg-gradient-to-r from-pink-500 to-blue-500 animate-slebew'></div>
        </div>
      </section>
    </main>
  )
}

export default App
