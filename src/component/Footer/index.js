import React from 'react'

export default function Index() {
    return (
        <div className='w-full h-32 bg-primary flex justify-center items-center flex-col mt-5'>
            <div className='flex flex-col md:flex-row gap-3'>
                <p className='text-center text-xl font-semibold text-slate-800 font-secondary'>API By <a href="https://github.com/tomorisakura/unofficial-masakapahariini-api" className='text-white'>tomorisakura</a></p>
                <p className='text-center text-xl font-semibold text-slate-800 font-secondary'>Icon By <a href="https://heroicons.com/" className='text-white'>hericons</a></p>
            </div>

            <div className='flex mt-2'>
                <p>Made With </p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 fill-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </div>
        </div>
    )
}
