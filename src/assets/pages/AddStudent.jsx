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
                            <label htmlFor="name" className=" dark:text-white block mb-2 text-sm font-medium">O'quvchining ismi</label>
                            <input type="text" name="name" id="name" className="dark:bg-gray-300 dark:border-gray-300 bg-gray-50 border text-sm rounded-lg w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="rasm" className=" dark:text-white block mb-2 text-sm font-medium">Rasm</label>
                            <input type="text" name="rasm" id="rasm" className="dark:bg-gray-300 dark:border-gray-300 bg-gray-50 border text-sm rounded-lg w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="telephone" className=" dark:text-white block mb-2 text-sm font-medium">Telefon raqami</label>
                            <input type="text" name="telephone" id="telephone" className="dark:bg-gray-300 dark:border-gray-300bg-gray-50 border text-sm rounded-lg w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="bio" className=" dark:text-white block mb-2 text-sm font-medium">Bio</label>
                            <input type="text" name="bio" id="bio" className=" dark:bg-gray-300 dark:border-gray-300bg-gray-50 border text-sm rounded-lg w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="age" className=" dark:text-white block mb-2 text-sm font-medium">Yoshi</label>
                            <input type="number" name="age" id="age" className="b dark:bg-gray-300 dark:border-gray-300 g-gray-50 border text-sm rounded-lg w-full p-2.5" required />
                        </div>
                        <div>
                            <label htmlFor="manzil" className=" dark:text-white block mb-2 text-sm font-medium">Manzil</label>
                            <input type="text" name="manzil" id="manzil" className=" dark:bg-gray-300 dark:border-gray-300bg-gray-50 border text-sm dark:bg-gray-300 dark:border-gray-300 rounded-lg w-full p-2.5" required />
                        </div>
                        <div className="">
                            <label htmlFor="teacher" className=" dark:text-white block mb-2 text-sm font-medium">O'qituvchisi</label>
                            <select name="teacher" id="teacher" className=" dark:bg-gray-300 dark:border-gray-300 bg-gray-50 border text-sm rounded-lg w-full p-2.5" required>
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
