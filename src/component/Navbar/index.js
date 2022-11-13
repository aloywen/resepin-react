import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
    const [body, setBody] = useState()
    const [initMenu, setInitMenu] = useState()

    const selectTheme = (value) => {
        localStorage.setItem('theme', value)
        const html = document.querySelector('html')
        html.classList.add(localStorage.getItem('theme'))
        if (value === "dark") {
            html.classList.remove('light')
            html.classList.add('bg-gray-700')
            setBody('dark')
        } else {
            html.classList.remove('dark')
            html.classList.remove('bg-gray-700')
            setBody('light')
        }
    }


    useEffect(() => {
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
    }, [])

    return (
        <div className="relative mb-36">
            <div className="fixed top-0 left-0 right-0">
                <Link to='/' className="dark:bg-primary bg-nav flex justify-center items-center py-3">
                    <img alt="logo" src="https://img.icons8.com/doodle/50/000000/ingredients.png" width={60} height={60} />
                    <p className="text-3xl font-semibold font-primary">Rêsepin</p>
                </Link>

                <nav className='dark:bg-primary bg-nav py-4 flex justify-center items-center z-10'>
                    <div className='flex gap-8'>
                        <Link to='/recipe'
                            onClick={() => setInitMenu('resep')}
                            className={`${initMenu === 'resep' ? 'text-black' : 'text-primary'}  dark:text-nav font-semibold text-lg md:text-4xl font-primary`}>Rêsep</Link>
                        <Link to='/category'
                            onClick={() => setInitMenu('kategori')}
                            className={`${initMenu === 'kategori' ? 'text-black' : 'text-primary'} dark:text-nav font-semibold text-lg md:text-4xl font-primary`}>Kategori</Link>
                        <Link to='/search'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 md:mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>


                        {body === 'dark' ?
                            <button onClick={() => selectTheme('light')}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </button> : <button onClick={() => selectTheme('dark')}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                            </button>
                        }

                    </div>
                </nav>
            </div>
        </div>
    )
}
