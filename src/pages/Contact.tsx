import { MusicalNoteIcon } from '@heroicons/react/24/solid';
import React from 'react'
import Swal from 'sweetalert2';

const Contact = () => {

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
    
        formData.append("access_key", "a0fccd96-8a1c-4be7-94b1-e286ffba6d38");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Good job!",
                text: "You have sent us an email!",
                icon: "success"
              });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen mx-auto mt-20 bg-slate-100">
            <h1 className='font-bold text-3xl text-blue-600'>CONTACT US</h1>
            <section className='flex flex-col p-10 lg:w-1/2 my-10 h-auto border-5 shadow-md bg-white rounded-3xl'>
                <MusicalNoteIcon className='w-10 h-10 lg:w-16 md:h-16 text-blue-600'/>
                <h1 className='mt-8 font-bold mb-2'>Got an issue? Want to send feedback? </h1>
                <p className='pb-8'>We’d love to hear from you! Let us know that you think.<br/> Thank you!</p>
                <form onSubmit={onSubmit} className='flex flex-col justify-center lg:w-2/3 bg-blue-600 p-4 rounded-2xl shadow-md text-white'>
                    Your name: *<br/>
                    <input className='mb-4 rounded-xl p-2 text-black' type="text" name="name" required placeholder='Enter your name:'/>
                    Your email: *<br/>
                    <input className='mb-4 rounded-xl p-2 text-black' type="email" name="email" required placeholder='Enter your email:'/>
                    Message: *<br/>
                    <textarea className='mb-4 rounded-xl p-2 text-black' name="message" placeholder='Massage' required></textarea>
                    <button type="submit" className='mt-10 font-bold shadow-md w-1/5 bg-white text-blue-600 rounded-xl p-2'>Send</button>
                </form>
            </section>
        </div>
    )
}

export default Contact