import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Atom } from 'react-loading-indicators'
import { useParams } from 'react-router-dom'

export default function TeachersDetails() {

    const [data_t, setDataT] = useState()
    const [data_source, setDataSource] = useState()
    const [loading, setLoading] = useState(true)
    console.log(data_t);

    const params = useParams()
    // console.log(params);


    const getDetails = () => {
        axios.get(`https://67659527410f849996558ed6.mockapi.io/teachers/${params.id}`)

            .then((res) => {
                setDataT(res?.data)
            }).catch((err) => {
                console.log(err.message)
            }).finally(() => {
                console.log('completed.')
                // setLoading(false)
            })
        console.log(params.id, "iiiddd")
    }

    const getStudentByTeachers = () => {
        axios.get(`https://67659527410f849996558ed6.mockapi.io/teachers/${params.id}/students`)
            .then((res) => {
                // console.log(res?.data);
                setDataSource(res?.data)
            }).catch((err) => {
                // console.log(err.message)
            }).finally(() => {
                console.log('Data fetching completed.')
                setLoading(false)
            })
    }

    useEffect(() => {
        getDetails()
        getStudentByTeachers()
    }, [])

    if (loading) {
        return <div className='pt-40 text-3xl text-center texxt-red-500'><Atom color="#32cd32" size="medium" text="" textColor="" /></div>
    }




    return (
        <Fragment>
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-6 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                data_t && (
                                    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                            <img class="object-cover object-center rounded" alt="hero" src={data_t.avatar}/>
                                        </div>
                                        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{data_t.name}</h1>
                                            <p class="mb-3 leading-relaxed"><span style={{color: "black "}}>Telefon raqami: </span>{data_t.phoneNumber}</p>
                                            <p class="mb-3 leading-relaxed"><span style={{color: "black "}}>Manzili: </span>{data_t.address}</p>
                                            <p class="mb-3 leading-relaxed"><span style={{color: "black "}}>Emaili: </span> {data_t.email}</p>
                                            <p class="mb-3 leading-relaxed"><span style={{color: "black "}}>Bio: </span> {data_t.bio}</p>  
                                            <h3 class="mb-3 leading-relaxed"><span style={{color: "black"}}> {data_t.name}nig oquvchilari royxati pastda, marhamat korishinggiz mumkin </span></h3>  
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>
            <h1 className='container text-4xl text-center'>O'quvchilar ro'yxati</h1>

            <div className='container'>
                {/* <h1>Teacher Details {params.id}</h1> */}

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-16 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                data_source?.map((item) => {
                                    return (
                                        <div class="container mx-auto flex justify-between px-5 py-20 md:flex-row flex-col items-center">
                                            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> {item.name}</h1>
                                                <p class="mb-3 leading-relaxed">Yoshi: {item.age}</p>
                                                <p class="mb-3 leading-relaxed">Manzili: {item.manzil}</p>
                                                <p class="mb-3 leading-relaxed">Telefon raqami: {item.telephone}</p>
                                                <p class="mb-3 leading-relaxed">Bio: {item.bio}</p>
                                                <div class="flex justify-center">
                                                    <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                                                    <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                                                </div>
                                            </div>
                                            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                                <img class="object-cover object-center rounded w-[500px]" alt="hero" src={item.avatar} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>


            </div>
        </Fragment>
    )
}