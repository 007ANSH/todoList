import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between  py-4 bg-slate-600 text-white">
        <div className="logo">
            <span className="font-bold text-xl mx-8 ">iTask</span>
        </div>

        <ul className="flex  justify-center mx-8 gap-8 flex-row">
            <li>Home</li>
            <li>Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar