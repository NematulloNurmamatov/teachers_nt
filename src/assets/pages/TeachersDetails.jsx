// import axios from 'axios'
// import React, { Fragment, useEffect, useState } from 'react'
// import { Atom } from 'react-loading-indicators'
// import { useParams } from 'react-router-dom'

// export default function TeachersDetails() {

//     const [data_t, setDataT] = useState()
//     const [data_source, setDataSource] = useState()
//     const [loading, setLoading] = useState(true)
//     console.log(data_t);

//     const params = useParams()
//     // console.log(params);


//     const getDetails = () => {
//         axios.get(`https://67659527410f849996558ed6.mockapi.io/teachers/${params.id}`)

//             .then((res) => {
//                 setDataT(res?.data)
//             }).catch((err) => {
//                 console.log(err.message)
//             }).finally(() => {
//                 console.log('completed.')
//                 // setLoading(false)
//             })
//         console.log(params.id, "iiiddd")
//     }

//     const getStudentByTeachers = () => {
//         axios.get(`https://67659527410f849996558ed6.mockapi.io/teachers/${params.id}/students`)
//             .then((res) => {
//                 // console.log(res?.data);
//                 setDataSource(res?.data)
//             }).catch((err) => {
//                 // console.log(err.message)
//             }).finally(() => {
//                 console.log('Data fetching completed.')
//                 setLoading(false)
//             })
//     }

//     useEffect(() => {
//         getDetails()
//         getStudentByTeachers()
//     }, [])

//     if (loading) {
//         return <div className='pt-40 text-3xl text-center texxt-red-500'><Atom color="#32cd32" size="medium" text="" textColor="" /></div>
//     }




//     return (
//         <Fragment>
//             <div className='dark:bg-gray-800'>
//                 <section className="text-gray-600 body-font">
//                     <div className="container px-5 py-6 mx-auto">
//                         <div className="flex flex-wrap -m-4">
//                             {
//                                 data_t && (
//                                     <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//                                         <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
//                                             <img class="object-cover object-center rounded" alt="hero" src={data_t.avatar}/>
//                                         </div>
//                                         <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//                                             <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">{data_t.name}</h1>
//                                             <p class="mb-3 leading-relaxed dark:text-white"><span className='dark:text-white' style={{color: "black "}}>Telefon raqami: </span>{data_t.phoneNumber}</p>
//                                             <p class="mb-3 leading-relaxed dark:text-white"><span className='dark:text-white' style={{color: "black "}}>Manzili: </span>{data_t.address}</p>
//                                             <p class="mb-3 leading-relaxed dark:text-white"><span className='dark:text-white' style={{color: "black "}}>Emaili: </span> {data_t.email}</p>
//                                             <p class="mb-3 leading-relaxed dark:text-white"><span className='dark:text-white' style={{color: "black "}}>Bio: </span> {data_t.bio}</p>  
//                                             <h3 class="mb-3 leading-relaxed dark:text-white"><span className='dark:text-white' style={{color: "black"}}> {data_t.name}nig oquvchilari royxati pastda, marhamat korishinggiz mumkin </span></h3>  
//                                         </div>
//                                     </div>
//                                 )
//                             }
//                         </div>
//                     </div>
//                 </section>
//             </div>
//             <h1 className=' text-4xl text-center dark:bg-gray-800 dark:text-white'>O'quvchilar ro'yxati</h1>

//             <div className=' dark:bg-gray-800'>
//                 {/* <h1>Teacher Details {params.id}</h1> */}

//                 <section className="text-gray-600 body-font  container">
//                     <div className="container px-5 py-16 mx-auto">
//                         <div className="flex flex-wrap -m-4">
//                             {
//                                 data_source?.map((item) => {
//                                     return (
//                                         <div class="container mx-auto flex justify-between px-5 py-20 md:flex-row flex-col items-center">
//                                             <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//                                                 <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white"> {item.name}</h1>
//                                                 <p class="mb-3 leading-relaxed dark:text-white ">Yoshi: {item.age}</p>
//                                                 <p class="mb-3 leading-relaxed dark:text-white ">Manzili: {item.manzil}</p>
//                                                 <p class="mb-3 leading-relaxed dark:text-white ">Telefon raqami: {item.telephone}</p>
//                                                 <p class="mb-3 leading-relaxed dark:text-white ">Bio: {item.bio}</p>
//                                                 <div class="flex justify-center">
//                                                     <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//                                                     <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
//                                                 </div>
//                                             </div>
//                                             <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//                                                 <img class="object-cover object-center rounded w-[500px]" alt="hero" src={item.avatar} />
//                                             </div>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>
//                 </section>


//             </div>
//         </Fragment>
//     )
// }




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

    const getDetails = () => {
        axios.get(`https://67659527410f849996558ed6.mockapi.io/teachers/${params.id}`)
            .then((res) => {
                setDataT(res?.data)
            }).catch((err) => {
                console.log(err.message)
            }).finally(() => {
                console.log('completed.')
            })
    }

    const getStudentByTeachers = () => {
        axios.get(`https://67659527410f849996558ed6.mockapi.io/teachers/${params.id}/students`)
            .then((res) => {
                setDataSource(res?.data)
            }).catch((err) => {
                console.log(err.message)
            }).finally(() => {
                console.log('Data fetching completed.')
                setLoading(false)
            })
    }

    const deleteStudent = (id) => {
        axios.delete(`https://67659527410f849996558ed6.mockapi.io/teachers/${params.id}/students/${id}`)
            .then(() => {
                alert("O'quvchi o'chirildi")
                setDataSource((prev) => prev.filter((student) => student.id !== id))
            })
            .catch((err) => {
                console.log(err.message)
                alert("O'quvchini o'chirishda xatolik yuz berdi")
            })
    }

    const editStudent = (id) => {
        const updatedData = {
            name: prompt("Yangi ismni kiriting:"),
            age: prompt("Yangi yoshni kiriting:"),
            manzil: prompt("Yangi manzilni kiriting:"),
            telephone: prompt("Yangi telefon raqamini kiriting:"),
            bio: prompt("Yangi bio kiriting:"),
            avatar: prompt("Rasm linkini kiritng")
        }

        axios.put(`https://67659527410f849996558ed6.mockapi.io/teachers/${params.id}/students/${id}`, updatedData)
            .then((res) => {
                alert("O'quvchi ma'lumotlari yangilandi")
                setDataSource((prev) => prev.map((student) => (student.id === id ? res.data : student)))
            })
            .catch((err) => {
                console.log(err.message)
                alert("O'quvchi ma'lumotlarini yangilashda xatolik yuz berdi")
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
            <div className='dark:bg-gray-800'>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-6 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                data_t && (
                                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                                            <img className="object-cover object-center rounded" alt="hero" src={data_t.avatar} />
                                        </div>
                                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">{data_t.name}</h1>
                                            <p className="mb-3 leading-relaxed dark:text-white">Telefon raqami: {data_t.phoneNumber}</p>
                                            <p className="mb-3 leading-relaxed dark:text-white">Manzili: {data_t.address}</p>
                                            <p className="mb-3 leading-relaxed dark:text-white">Emaili: {data_t.email}</p>
                                            <p className="mb-3 leading-relaxed dark:text-white">Bio: {data_t.bio}</p>
                                            <h3 className="mb-3 leading-relaxed dark:text-white">{data_t.name} ning o'quvchilari ro'yxati pastda, marhamat ko'rishingiz mumkin</h3>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </section>
            </div>
            <h1 className='text-4xl text-center dark:bg-gray-800 dark:text-white'>O'quvchilar ro'yxati</h1>
            <div className='dark:bg-gray-800'>
                <section className="text-gray-600 body-font container">
                    <div className="container px-5 py-16 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                data_source?.map((item) => {
                                    return (
                                        <div key={item.id} className="container mx-auto flex justify-between px-5 py-20 md:flex-row flex-col items-center">
                                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">{item.name}</h1>
                                                <p className="mb-3 leading-relaxed dark:text-white">Yoshi: {item.age}</p>
                                                <p className="mb-3 leading-relaxed dark:text-white">Manzili: {item.manzil}</p>
                                                <p className="mb-3 leading-relaxed dark:text-white">Telefon raqami: {item.telephone}</p>
                                                <p className="mb-3 leading-relaxed dark:text-white">Bio: {item.bio}</p>
                                                <div className="flex justify-center">
                                                    {/* Edit button */}
                                                    <button
                                                        onClick={() => editStudent(item.id)}
                                                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                                                    >
                                                        Tahrirlash
                                                    </button>
                                                    {/* Delete button */}
                                                    <button
                                                        onClick={() => deleteStudent(item.id)}
                                                        className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                                                    >
                                                        O'chirish
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                                                <img className="object-cover object-center rounded w-[500px]" alt="hero" src={item.avatar} />
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
