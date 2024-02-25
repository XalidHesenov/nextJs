'use client';
import { createRequest } from "@/actions/request";
import { useState } from "react";
import FormData from "@/actions/types/formData";
import { useRouter } from "next/navigation";
const Request = () => {
    const [request, setRequest] = useState<FormData>({
        email: "",
        subyekt: "",
        mesaj: ""
    })
    const router = useRouter()
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        createRequest(request);
        router.push("/")
    };
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setRequest({
            ...request,
            [name]: value,
        });
    };
    const handleChangeT = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;
        setRequest({
            ...request,
            [name]: value,
        });
    };
    return (
        <div className="mt-3 h-full pb-2 text-slate-900 w-[600px] bg-white">
            <p className='font-bold text-2xl text-center pt-2'>Müraciət</p>
            <form method='POST'>
                <div className='flex flex-col'>
                    <label htmlFor="email" className='font-bold pl-3'>Email</label>
                    <input name='email' onChange={handleChange} id='email' className=' border ml-3 mr-3 h-7 outline-none pl-2 border-gray-300' type='text' />
                </div>
                <div className='mt-3 flex flex-col'>
                    <label htmlFor="subyekt" className='font-bold pl-3'>Subyekt</label>
                    <input name='subyekt' onChange={handleChange} id='subyekt' className='border ml-3 mr-3 h-7 outline-none pl-2 border-gray-300' type='text' />
                </div>
                <div className='mt-3 flex flex-col'>
                    <label htmlFor="mesaj" className='font-bold pl-3'>Mesaj</label>
                    <textarea name='mesaj' onChange={handleChangeT} id='mesaj' className=' border ml-3 mr-3 h-40 text-justify outline-none border-gray-300' />
                </div>
                <div className='px-3'>
                    <button type='submit' onClick={handleSubmit} className='my-0 text-white transition h-9 mt-2 hover:bg-blue-600 bg-blue-900 w-full mx-auto'>Göndər</button>
                </div>
            </form>
        </div>
    )
}
export default Request