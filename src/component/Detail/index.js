import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Footer } from '../index'

export default function Index() {

    const { state } = useLocation()

    const [detail, setDetail] = useState(state.key);
    const [data, setData] = useState('');
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            try {
                let response = await fetch(`https://resep-hari-ini.vercel.app/api/recipe/${detail}`);
                if (response.status === 200) {
                    let data = await response.json();
                    setData(data);
                    setLoading(false)
                } else {
                    throw 'Error fetching users list';
                    setLoading(true)
                }
            } catch (error) {
                setIsError(true)
            }
        }
        fetchData();

    }, [])

    let no = 1;
    return (
        <div>
            <div>
                {loading === true ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 animate-spin animate-bounce fill-primary mt-5 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>

                    :
                    <div className='md:mt-44'>
                        <div className='flex flex-col md:flex-row text-center'>
                            <img alt={data.results.key} src={state.img} className="w-72 h-40 md:ml-8 md:w-2/5 md:h-64 rounded-lg shadow-md mx-auto my-3" />
                            <div>
                                <p className='font-primary mt-1 md:mt-20 md:mx-5 text-xl md:text-2xl font-semibold mb-4 md:mb-7 dark:text-amber-100'>{data.results.title}</p>
                                <div className='flex gap-5 justify-center'>
                                    <div className='flex rounded-full bg-secondary text-white px-5 py-2 gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                                        </svg>
                                        <p>{data.results.times}</p>
                                    </div>
                                    <div className='flex rounded-full bg-secondary text-white px-5 py-2 gap-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                                        </svg>
                                        <p>{data.results.servings}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className='font-primary mt-14 text-center md:mt-20 md:mx-5 text-2xl md:text-2xl font-bold mb-4 md:mb-7 dark:text-amber-100'>Bahan - bahan yang diperlukan</p>
                        <div>
                            {data.results.ingredient.map((data) => (
                                <div className='flex md:mx-10'>
                                    <li className='font-secondary text-lg md:text-2xl dark:text-amber-100 ml-4 break-all'>{data}</li>
                                </div>
                            ))}
                        </div>

                        <p className='font-primary mt-14 text-center md:mt-20 md:mx-5 text-2xl md:text-2xl font-semibold mb-4 md:mb-7 dark:text-amber-100'>Cara Membuat</p>
                        <div className='md:mx-10 pb-20'>
                            {data.results.step.map((data) => {
                                return <p className='font-secondary text-lg dark:text-amber-100 ml-4 mb-3 md:text-2xl mx-3'><span className='text-2xl font-semibold'>{no++}.</span>{data.slice(1)}</p>
                            })}
                        </div>
                    </div>
                }

            </div>

            <Footer />
        </div>
    )
}
