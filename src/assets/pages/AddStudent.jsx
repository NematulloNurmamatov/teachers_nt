// import axios from 'axios'
// import React, { useEffect, useRef, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// export default function AddStudent() {
//     const location = useLocation()
//     const formRef = useRef(null)
//     const navigate = useNavigate()

//     const [data, setData] = useState([]) // O'qituvchilar ro'yxati
//     const [selectedTeacher, setSelectedTeacher] = useState("") // Tanlangan o'qituvchi

//     let id = location.search.split("=")[1]

//     // O'qituvchilar ro'yxatini olish
//     async function fetchTeachers() {
//         try {
//             const res = await axios.get('https://67659527410f849996558ed6.mockapi.io/teachers')
//             setData(res?.data || []) // Agar ma'lumotlar bo'lmasa, bo'sh massiv
//         } catch (err) {
//             console.error("O'qituvchilarni olishda xatolik:", err.message)
//         }
//     }

//     useEffect(() => {
//         fetchTeachers()
//     }, [])

//     // Formani yuborish
//     const sendHandle = () => {
//         try {
//             if (!!formRef.current.name.value && !!formRef.current.rasm.value && !!selectedTeacher) {
//                 const body = {
//                     name: formRef.current.name.value,
//                     avatar: formRef.current.rasm.value,
//                     bio: formRef.current.bio.value,
//                     age: formRef.current.age.value,
//                     phoneNumber: formRef.current.telephone.value,
//                     address: formRef.current.manzil.value,
//                     education: formRef.current.education.value,
//                     teacherId: selectedTeacher // Tanlangan o'qituvchining ID'si
//                 }

//                 const request = id
//                     ? axios.put(`https://67659527410f849996558ed6.mockapi.io/teachers/${id}`, body)
//                     : axios.post(`https://67659527410f849996558ed6.mockapi.io/students`, body)

//                 request
//                     .then(() => {
//                         alert(id ? "O'qituvchi tahrirlandi" : "O'qituvchi qo'shildi")
//                         formRef.current.reset()
//                         navigate("/")
//                     })
//                     .catch((err) => {
//                         console.error(err)
//                         alert("Xatolik yuz berdi")
//                     })
//             } else {
//                 alert("Barcha maydonlarni to'ldiring va o'qituvchini tanlang")
//             }
//         } catch (error) {
//             console.error(error.message)
//         }
//     }

//     return (
//         <div className="">
//             <section className="bg-white dark:bg-gray-800 ">
//                 <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
//                     <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">O'quvchi qo'shish</h2>
//                     <form ref={formRef}>
//                         <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
//                             <div className="sm:col-span-2">
//                                 <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">O'quvchining ismi</label>
//                                 <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="rasm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rasm</label>
//                                 <input type="text" name="rasm" id="rasm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="telephone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon raqami</label>
//                                 <input type="number" name="telephone" id="telephone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biosi</label>
//                                 <input type="text" name="bio" id="bio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Yoshi</label>
//                                 <input type="number" name="age" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="manzil" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manzili</label>
//                                 <input type="text" name="manzil" id="manzil" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400" required />
//                             </div>
//                             <div >
//                                 <label htmlFor="teacher" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">O'qituvchisi</label>
//                                 <select
//                                     name="teacher"
//                                     id="teacher"
//                                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-400 dark:border-gray-400"
//                                     onChange={(e) => setSelectedTeacher(e.target.value)}
//                                     value={selectedTeacher}
//                                     required
//                                 >
//                                     <option value="">O'qituvchi tanlang</option>
//                                     {data?.map((teacher) => (
//                                         <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>
//                     </form>
//                     <button type="button" className="border-2 cursor-pointer inline-flex items-center px-5 py-2.5 mt-4 text-sm font-medium bg-primary-700 rounded-lg hover:bg-primary-800 dark:text-white" onClick={sendHandle}>
//                         Yuborish
//                     </button>
//                 </div>
//             </section>
//         </div>
//     )
// }




import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddStudent() {
    const formRef = useRef(null);
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        // O'qituvchilarni olish
        axios.get('https://67659527410f849996558ed6.mockapi.io/teachers')
            .then((res) => setTeachers(res.data))
            .catch((err) => console.log(err.message));
    }, []);

    const sendHandle = () => {
        const teacherId = formRef.current.teacher.value;

        if (formRef.current.name.value && formRef.current.rasm.value && teacherId) {
            const body = {
                name: formRef.current.name.value,
                avatar: formRef.current.rasm.value,
                bio: formRef.current.bio.value,
                age: formRef.current.age.value,
                telephone: formRef.current.telephone.value,
                manzil: formRef.current.manzil.value,
                teacherId: teacherId,
            };

            axios.post('https://67659527410f849996558ed6.mockapi.io/students', body)
                .then(() => {
                    alert("O'quvchi qo'shildi");
                    formRef.current.reset();
                    navigate('/');
                })
                .catch((err) => alert("O'quvchini qo'shishda xatolik yuz berdi: " + err.message));
        } else {
            alert("Malumotlarni to'ldiring");
        }
    };

    return (
        <div className="dark:bg-gray-800">
            <section className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Yangi o'quvchi qo'shish</h2>
                <form ref={formRef}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium">O'quvchining ismi</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border text-sm rounded-lg w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="rasm" className="block mb-2 text-sm font-medium">Rasm</label>
                            <input type="text" name="rasm" id="rasm" className="bg-gray-50 border text-sm rounded-lg w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="telephone" className="block mb-2 text-sm font-medium">Telefon raqami</label>
                            <input type="text" name="telephone" id="telephone" className="bg-gray-50 border text-sm rounded-lg w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="bio" className="block mb-2 text-sm font-medium">Bio</label>
                            <input type="text" name="bio" id="bio" className="bg-gray-50 border text-sm rounded-lg w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="age" className="block mb-2 text-sm font-medium">Yoshi</label>
                            <input type="number" name="age" id="age" className="bg-gray-50 border text-sm rounded-lg w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="manzil" className="block mb-2 text-sm font-medium">Manzil</label>
                            <input type="text" name="manzil" id="manzil" className="bg-gray-50 border text-sm rounded-lg w-full p-2.5" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="teacher" className="block mb-2 text-sm font-medium">O'qituvchisi</label>
                            <select name="teacher" id="teacher" className="bg-gray-50 border text-sm rounded-lg w-full p-2.5" required>
                                <option value="">O'qituvchini tanlang</option>
                                {teachers.map((teacher) => (
                                    <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </form>
                <button type="button" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={sendHandle}>
                    Yuborish
                </button>
            </section>
        </div>
    );
}
