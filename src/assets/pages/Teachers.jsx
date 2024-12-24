import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Atom } from 'react-loading-indicators'
import { Link } from 'react-router-dom'
// import AddTeachers from './AddTeachers'

export default function Teachers() {

    const [data_source, setDataSource] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    const getTeachers = () => {
        axios.get("https://67659527410f849996558ed6.mockapi.io/teachers")
            .then((res) => {
                console.log(res?.data);
                setDataSource(res?.data)
            }).catch((err) => {
                console.log(err.message)
            }).finally(() => {
                console.log('Data fetching completed.')
                setLoading(false)
            })
    }

    const deleteHandle = (id) => {
        axios.delete(`https://67659527410f849996558ed6.mockapi.io/teachers/${id}`)
            .then((res) => {
                console.log(res)
                getTeachers()
            }).catch((err) => {
                console.log(err)
                setError(true)
            })
    }
    const editHandle = (id) => {
        // navigate(`/editteacher/${id}`)
    }

    useEffect(() => {
        getTeachers()
    }, [])


    if (loading) {
        return <div className='pt-40 text-3xl text-center texxt-red-500'><Atom color="#32cd32" size="medium" text="" textColor="" /></div>
    }

    if (error) {
        return <div className='pt-40 text-3xl text-center text-red-500'>Error fetching data.</div>
    }

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className='flex justify-end border mb-4 p-2 w-[200px]'>
                        <Link to={"/addteacher"}>
                            Yangi o'qituvchi qo'shish
                        </Link>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            data_source?.map((item, index) => {
                                return (
                                    <div className="p-4 w-full sm:w-1/1 md:w-1/2 lg:w-1/3">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg overflow-hidden">
                                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.avatar} alt="blog" />
                                            <div className="p-6">
                                                <h2 className="tracking-widest title-font font-medium text-black mb-1">{item.name}</h2>
                                                <p className="leading-relaxed mb-2 mt-3"><span style={{ color: "black " }}>Telefon raqami: </span> {item?.phoneNumber}</p>
                                                <p className="leading-relaxed mb-2"><span style={{ color: "black " }}>Emaili: </span>{item?.email}</p>
                                                <p className="leading-relaxed mb-2"><span style={{ color: "black " }}>Manzili: </span> {item?.address}</p>
                                                <p className="leading-relaxed mb-2"><span style={{ color: "black " }}>Bio: </span>  {item?.bio}</p>
                                                <div className="flex items-center justify-between">
                                                    <Link to={`/teachersdetails/${item.id}`} style={{ color: "blue" }}>
                                                        Oquvchilarini korish
                                                    </Link>
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>

                                                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>1.2K
                                                    </span>
                                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>6
                                                    </span>
                                                </div>
                                                <div className='flex w-full gap-4'>
                                                    <div className=' w-full border border-green-500 mt-4 p-2 text-center bg-green-500 rounded text-white cursor-pointer'>
                                                        <button onClick={() => { editHandle(item.id) }}>Delete</button>
                                                    </div>
                                                    <div className=' w-full border border-red-500 mt-4 p-2 text-center bg-red-500 rounded text-white cursor-pointer'>
                                                        <button onClick={() => { deleteHandle(item.id) }}>Delete</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
