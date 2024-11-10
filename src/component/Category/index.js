import { useEffect, useState } from 'react'
import { Footer } from '../index'
import { useNavigate, useLocation } from 'react-router-dom'
import { category } from '../../utils'

export default function Index() {
    const router = useNavigate()
    const state = useLocation()

    const [initialCat, setInitialCat] = useState(state.state)
    const [cat, setCat] = useState('resep-dessert');
    const [start, setStart] = useState(1);
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);
    const [loading, setLoading] = useState(true);

    const loadMore = async () => {
        setLoading(true)
        try {
            let response = await fetch(`https://resep-hari-ini.vercel.app/api/category/recipes/${cat}/${start}`);
            if (response.status === 200) {
                const newData = await response.json()
                setStart(start + 1)
                setData([...data, ...newData.results])
                setLoading(false)
            } else {
                console.log('ada gangguan mas');
            }
        } catch (error) {
            setIsError(true)
        }
    }

    useEffect(() => {

        const fetchData = async () => {
            try {
                let response = await fetch(`https://resep-hari-ini.vercel.app/api/category/recipes/${initialCat === null ? cat : initialCat}`);
                setLoading(true)
                if (response.status === 200) {
                    let data = await response.json();
                    setData(data.results);
                    setLoading(false)
                } else {
                    console.log('ada gangguan mas');
                }
            } catch (error) {
                setIsError(true)
            }
        }

        fetchData();


    }, [cat])


    return (
        <div>

            <div className=' flex overflow-x-auto md:flex-wrap gap-4 pb-8 md:justify-center'>
                {category?.map((data) => (
                    <button
                        key={data.key}
                        onClick={(() => {
                            setCat(data.key)
                            setStart(0)
                            setData(null)
                        }
                        )}
                        className={`px-6 py-3 ${cat === data.key ? 'bg-primary' : 'bg-gradient-to-r from-btn1 to-btn2'}   rounded-full shadow-lg text-white text-xl font-semibold whitespace-nowrap`}>{data.title}</button>
                ))}
            </div>


            <div className='flex flex-wrap gap-6 justify-center pb-10'>
                {data?.map((data) => (
                    <div
                        onClick={() => router(`/recipe/detail/${data.key}`, { state: { key: data.key, img: data.thumb } })}
                        key={data.title}
                        className='w-64 rounded-lg shadow-lg bg-nav overflow-hidden hover:bg-yellow-300  hover:cursor-pointer'>
                        <img alt={data.key} src={data.thumb} width={260} height={150} />
                        <div className='flex ml-2 my-2 '>
                            <div className='text-xs bg-secondary rounded-full px-3 py-1 text-white'>{data.times}</div>
                            <div className='text-xs bg-secondary rounded-full px-3 py-1 text-white ml-2'>{data.difficulty}</div>
                        </div>
                        <p className='text-center text-md font-semibold pb-4 px-2'>{data.title}</p>
                    </div>

                ))}



            </div>
            {loading === false ? <div className='flex justify-center'>
                <button
                    onClick={() => loadMore()}
                    className='bg-secondary px-20 py-3 rounded-full text-white text-xl font-secondary mb-5 hover:bg-primary'
                >Load More</button>
            </div> : ''}

            {loading === true ? <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 animate-spin animate-bounce fill-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
            </div>

                : ''}


            <Footer />
        </div>
    )
}
