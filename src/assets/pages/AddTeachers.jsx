import axios from 'axios'
import React, { useRef } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function AddTeachers() {
    const formRef = useRef(null)
    const Navigate = useNavigate()

    const sendHandle = () => {
        try {
            if (!!formRef.current.name.value && formRef.current.rasm.value) {
                let body = {
                    name: formRef.current.name.value,
                    avatar: formRef.current.rasm.value,
                    bio: formRef.current.bio.value,
                    email: formRef.current.email.value,
                    phoneNumber: formRef.current.telephone.value,
                    address: formRef.current.manzil.value,
                    education: formRef.current.education.value,
                }
    
                axios.post(`https://67659527410f849996558ed6.mockapi.io/teachers`, body)
                    .then((res) => {
                        console.log(res)
                        alert("O'qituvchi qo'shildi")
                        formRef.current.reset()
                        Navigate("/")
                    }).catch((err) => {
                        console.log(err)
                        alert("O'qituvchi qo'shishda xatolik yuz berdi")
                    })
            } else {
                alert(" Malumotlarni to'ldiring")
                return
            }
        } catch (error) {
            console.log(error.message);

        }
    }

    return (
        <div className="container">
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">O'qituvchi qo'shish</h2>
                    <form ref={formRef}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">O'qituvchining ismi</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="rasm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rasm</label>
                                <input type="text" name="rasm" id="rasm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="telephone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefon raqami</label>
                                <input type="number" name="telephone" id="telephone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biosi</label>
                                <input type="text" name="bio" id="bio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="manzil" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manzili</label>
                                <input type="text" name="manzil" id="manzil" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="education" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ta'lim</label>
                                <input type="text" name="education" id="education" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                            </div>
                        </div>
                    </form>
                    <button type="button" className="inline-flex items-center px-5 py-2.5 mt-4 text-sm font-medium bg-primary-700 rounded-lg hover:bg-primary-800" onClick={sendHandle}>
                        Yuborish
                    </button>
                </div>
            </section>
        </div>
    )
}
