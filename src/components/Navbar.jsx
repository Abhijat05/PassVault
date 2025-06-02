import React from 'react'

const Navbar = () => {
    return (
        <nav className=' bg-slate-800 text-white'>
            <div className='mycontainer flex items-center justify-between px-4 py-5'>

                <div className="logo font-bold text-2xl">

                    <span className="text-green-700">&lt;</span>
                    Pass
                    <span className='text-[#FFD700]'>Vault</span>
                    <span className="text-green-700">/&gt;</span>
                    
                </div> 
            </div>
        </nav>
    )
}

export default Navbar