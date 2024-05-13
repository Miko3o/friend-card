import { useState, useEffect } from 'react'



export const Navbar = () => {

    return (
        <div className="m-0">
        <nav className='bg-slate-400 flex justify-between align-middle gap-2 p-2'>
            <a href='/' className='text-2xl'>Site Name</a>
            <ul className='p-0 m-0 list-none flex gap-1'>
                <li>
                    <a href="/option1">Option 1</a>
                </li>
                <li>
                    <a href="/option2">Option 2</a>
                </li>
            </ul>
        </nav>
        </div>
    )
}
