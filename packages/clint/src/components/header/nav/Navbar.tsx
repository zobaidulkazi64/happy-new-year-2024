import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
        <main className=' bg-gray-500 p-3  justify-around flex gap-5'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/login'>Login</Link>
            <Link href='/register'>Register</Link>
            <Link href='/dashboard'>Dashboard</Link>
        </main>
    </div>
  )
}

export default Navbar;