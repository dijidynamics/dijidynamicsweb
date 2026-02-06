import React from 'react'

function Npmpackages() {
  return (
       <div className='bg-[#f2f6f8]'>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
     {/* Tailwind Starter */}
  <div className="bg-gray-50 p-4 rounded-lg border space-y-2">
    <h3 className="font-semibold text-lg">📦 React + Tailwind Starter CLI</h3>
    <p className="text-gray-600">
      Instantly sets up a Vite + React + Tailwind CSS project with best-practice folder structure.
    </p>

    <a
      href="https://www.npmjs.com/package/create-react-tailwind-begineer-starter"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 underline font-medium"
    >
      View on NPM →
    </a>

    <div className="bg-black text-green-400 font-mono p-3 rounded">
      npx create-react-tailwind-begineer-starter
    </div>
  </div>

  {/* Bootstrap Starter */}
  <div className="bg-gray-50 p-4 rounded-lg border space-y-2">
    <h3 className="font-semibold text-lg">📦 React + Bootstrap Starter CLI</h3>
    <p className="text-gray-600">
      Scaffolds a Vite + React project preconfigured with Bootstrap, ready for rapid UI development.
    </p>

    <a
      href="https://www.npmjs.com/package/create-react-bootstrap-beginner-starter"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 underline font-medium"
    >
      View on NPM →
    </a>

    <div className="bg-black text-green-400 font-mono p-3 rounded">
      npx create-react-bootstrap-beginner-starter
    </div>
  </div>
</div>
    </div>
  )
}

export default Npmpackages
