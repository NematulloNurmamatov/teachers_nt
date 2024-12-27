import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Atom } from 'react-loading-indicators'
import { Link } from 'react-router-dom'

export default function Teachers() {

    const [data_source, setDataSource] = useState([])
    const [loading, setLoading] = useState(true)

    // O'quvchilarni olish
    const getTeachers = () => {
        axios.get("https://67659527410f849996558ed6.mockapi.io/students")
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

    // function deleteStudent(id) {
    //     axios.delete(`https://67659527410f849996558ed6.mockapi.io/students/${id}`)
    //         .then((res) => {
    //             console.log(res)
    //             setDataSource(res?.data)
    //             getTeachers()
    //             // axios({ url: "/teachers" }).then((res) => setDataSource(res))

    //         }).catch((err) => {
    //             console.log(err)
    //             // setError(true)
    //         })
    // }

    // function deleteStudent (id) {
    //     console.log(`O'chirishga tayyorlanmoqda, ID: ${id}`); // Debug uchun
    //     axios.delete(`https://67659527410f849996558ed6.mockapi.io/students/${id}`)
    //         .then((res) => {
    //             console.log('Ma\'lumot o\'chirildi:', res);
    //             alert("O'quvchi muvaffaqiyatli o'chirildi.");
    //         })
    //         .catch((err) => {
    //             console.error('Xato:', err.message); // Debug uchun
    //             alert("O'quvchini o'chirishda xatolik yuz berdi.");
    //         });
    // };
    

    // function deleteStudent (id) {
    //     axios.delete(`https://67659527410f849996558ed6.mockapi.io/students/${id}`)
    //         .then(() => {
    //             setDataSource(prevData => prevData.filter(student => student.id !== id));
    //             alert("O'quvchi muvaffaqiyatli o'chirildi.");
    //         })
    //         .catch((err) => {
    //             console.error("Xatolik:", err);
    //             alert(`O'quvchini o'chirishda xatolik yuz berdi: ${err.message}`);
    //         });
    // }
    // const editHandle = (id) => {
    //     // navigate(`/editteacher/${id}`)
    // }


    useEffect(() => {
        getTeachers()
        // axios({ url: "/teachers" }).then((res) => setDataSource(res))

    }, [])


    const deleteStudent = (id) => {
        console.log(`Deleting student with id: ${id}`);

        axios.delete(`https://67659527410f849996558ed6.mockapi.io/students/${id}`)
            .then((res) => {
                console.log('Response:', res);
                alert("O'quvchi o'chirildi");
                getTeachers();
                // setDataSource(prevData => prevData.filter((student) => student.id !== id));
            })
            .catch((err) => {
                console.log('Error:', err.response);
                alert("O'quvchini o'chirishda xatolik yuz berdi");
            });
    };

    // function deleteStudent(id) {
    //     axios.delete(`https://67659527410f849996558ed6.mockapi.io/students/${id}`)
    //     .then((res) => {
    //         console.log('Response:', res);
    //         alert("O'quvchi o'chirildi");
    //     })
    // }

    const editStudent = (id, updatedData) => {
        console.log(`Editing student with id: ${id}`, updatedData);

        axios.put(`https://67659527410f849996558ed6.mockapi.io/students/${id}`, updatedData)
            .then((res) => {
                console.log('Response:', res);
                alert("O'quvchi ma'lumotlari yangilandi");
                setDataSource(prevData => prevData.map((student) =>
                    student.id === id ? res.data : student
                ));
            })
            .catch((err) => {
                console.log('Error:', err.response);
                alert("O'quvchi ma'lumotlarini yangilashda xatolik yuz berdi");
            });
    };

    if (loading) {
        return <div className=' dark:bg-gray-800 pt-40 text-3xl text-center text-red-500'><Atom color="#32cd32" size="medium" text="" textColor="" /></div>
    }

    return (
        <div className='dark:bg-gray-800'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className='flex justify-end border border-[#006eff] text-black mb-4 p-2 w-[185px] dark:bg-[#006eff] dark:text-white rounded'>
                        <Link to={"/addstudent"}>
                            Yangi o'quvchi qo'shish
                        </Link>
                    </div>

                    <div className="flex flex-wrap -m-4">

                        {
                            data_source?.map((item) => {
                                return (
                                    <div key={item.id} className="p-4 w-full sm:w-1/1 md:w-1/2 lg:w-1/3">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg overflow-hidden dark:bg-[#f1f1d1]">
                                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.avatar} alt="blog" />
                                            <div className="p-6">
                                                <h2 className="tracking-widest title-font font-medium text-black mb-1">{item.name}</h2>
                                                <p className="leading-relaxed mb-2 mt-3">Tel: {item?.telephone}</p>
                                                <p className="leading-relaxed mb-2">Age: {item?.age}</p>
                                                <p className="leading-relaxed mb-2">Manzil: {item?.manzil}</p>
                                                <p className="leading-relaxed mb-2">Bio: {item?.bio}</p>
                                                {/* Edit button */}
                                                <div className='flex justify-between'>
                                                    <button
                                                        onClick={() => {
                                                            const updatedData = {
                                                                name: prompt("Yangi ismni kiriting", item.name),
                                                                telephone: prompt("Yangi telefon raqamini kiriting", item.telephone),
                                                                age: prompt("Yangi yoshni kiriting", item.age),
                                                                manzil: prompt("Yangi manzilni kiriting", item.manzil),
                                                                bio: prompt("Yangi bio kiriting", item.bio)
                                                            };
                                                            editStudent(item.id, updatedData);
                                                        }}
                                                        className="mt-4 bg-green-500 w-full text-white py-1 px-3 rounded mr-2"
                                                    >
                                                        Tahrirlash
                                                    </button>
                                                    {/* Delete button */}
                                                    <button
                                                        onClick={() => deleteStudent(item.id)}
                                                        className="mt-4 bg-red-500 w-full text-white py-1 px-3 rounded"
                                                    >
                                                        O'chirish
                                                    </button>
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
