// import { useEffect, useState } from 'react'
import { category } from '../../utils'
import { useNavigate } from 'react-router-dom'

export default function Index() {
    const router = useNavigate()

    return (
        <div>
            <p className='font-primary mt-2 ml-2 text-xl md:text-4xl font-semibold mb-7 dark:text-amber-100'>Coba Cari Berdasarkan Kategori</p>
            <div className='mt-10 flex overflow-x-auto md:flex-wrap gap-4 pb-8 md:justify-center'>
                {category?.map((data) => (
                    <button
                        key={data.key}
                        onClick={() => router('/category', { state: data.key })}
                        className='px-6 py-3 bg-gradient-to-r from-btn1 to-btn2  rounded-full shadow-lg text-white text-xl font-semibold whitespace-nowrap'>{data.title}</button>
                ))}
            </div>
        </div>
    )
}
