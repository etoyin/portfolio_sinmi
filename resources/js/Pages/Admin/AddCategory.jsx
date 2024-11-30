import React from 'react';
import { useForm } from '@inertiajs/react';
import { useState } from "react";
import Modal from '@/Components/Modal';
import InputError from '@/Components/InputError';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { useEffect } from 'react';


function AddCategory({closeAdd, message}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        category: '',
    });
    const [html, setHtml] = useState("my <b>HTML</b>");
    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
        console.log(data)
    };
    const [messa, setMessa] = useState(message)
    useEffect(() => {
        return () => {
            reset('category');
            setTimeout(() => {
                setMessa(null);
            }, 5000);
        };

    },[])
    if(processing){
        alert(processing);
    }


    const handleClose = () => {
        closeAdd()
    }


    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('post_category'))

    };
    return (
        <div className="fixed flex top-0 left-0 z-40 p-5 w-full h-full bg-[#121d30] items-center bg-opacity-50">
            <div className="w-full items-center flex flex-col rounded-lg bg-white p-5 h-96 md:w-2/5 mx-auto">
                <div onClick={handleClose} className="cursor-pointer close ml-auto"><i class="las la-times text-3xl"></i></div>
                <div className={`w-full text-center p-2 ${messa && messa.success ? "bg-green-400 text-green-700": "bg-red-400 text-red-700"}`}>{
                    messa ? 
                    messa.message:
                    ""
                }</div>
                <div className="form h-min p-3 w-full my-auto">
                    <h1 className='text-center font-bold uppercase'>Add Category</h1>
                    <form onSubmit={submit} >
                        <TextInput 
                            id="category"
                            name="category"
                            autoComplete="category"
                            value={data.category}
                            onChange={handleOnChange}
                            className='w-full'/>
                            <InputError message={errors.category} className="mt-2 text-ruby" />
                        <PrimaryButton  className="mt-3 bg-blue w-full flex text-center hover:bg-dark-blue" disabled={processing}>
                            <p className="text-center mx-auto">Submit</p>
                        </PrimaryButton>
                    </form>
                        
                </div>
            </div>
        </div>
    )
}

export default AddCategory
