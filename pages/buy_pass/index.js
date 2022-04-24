import React, { useState, useEffect } from 'react'
import Head from "next/head"
import axios from 'axios';

const BuyPass = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        amount: 50000
    })

    const [referral, setReferral] = useState('');
    const [loading,isLoading]=useState(false)
    const [confirmed,isConfirmed]=useState(false)

    let handleFormDataChange = (key, event) => {
        setFormData({
            ...formData,
            [key]: event.target.value
        })
    };

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        script.async = true

        document.body.appendChild(script)
    }, []);

    let submit = (e) => {
        e.preventDefault();
        isLoading(false)

        let options = {
            key: 'rzp_live_74iVjJTVpvaLgZ',
            amount: formData.amount,
            name: formData.name,
            description: '',
            order_id: '',
            handler: (resp) => {
                axios.post('https://technun.herokuapp.com/buy_pass', {
                    payment_id: resp.razorpay_payment_id,
                    formData,
                    referral
                }).then((response) => {
                    console.log(response);
                    isLoading(false)
                }).catch((error) => {
                    console.log(error);
                });
            },
            prefill: {
                name: formData.name,
                email: formData.email,
                contact: formData.phone,
            },
            notes: {
                address: 'Indian Institute of Technology Jammu'
            },
            theme: {
                color: '#528ff0'
            }
        };

        let rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    return (
        <div>
            {
                loading
                &&
                <div className="fixed t-0 l-0 z-40 w-full h-screen grid place-items-center bg-[#0000004e]">
                        <p className="text-white text-4xl">Loading...</p>
                </div>
            }
            {
                confirmed
                &&
                <div className="fixed t-0 l-0 z-40 w-full h-screen grid place-items-center bg-[#0000004e]">
                        <p className="text-white text-8xl">Congrats</p>
                        <p className="text-4xl text-white">Check your mail id for pass</p>
                </div>
            }
            <Head>
                <title>
                    Buy Pass - Technunctus
                </title>
            </Head>
            <p className='text-5xl font-bold gradientText m-4 sm:m-20 sm:mb-0 inline-block'>Buy Pass</p>

            <div className="grid place-items-center p-4 ">
                <form onSubmit={submit} className="m-4 p-4 bg-[#000] w-2/3 gradientRightBorder">
                    <div className="flex justify-between">
                        <label>Name: </label>
                        <input type="text" className=" bg-slate-800 rounded m-2" placeholder='Name' value={formData.name} onChange={(e) => handleFormDataChange('name', e)} required />
                    </div>
                    <div className="flex justify-between">
                        <label>Email: </label>
                        <input type="email" className=" bg-slate-800 rounded m-2" placeholder='Email' value={formData.email} onChange={(e) => handleFormDataChange('email', e)} required />
                    </div>
                    <div className="flex justify-between">
                        <label>Contact: </label>
                        <input type="text" className=" bg-slate-800 rounded m-2" placeholder='Contact' value={formData.contact} onChange={(e) => handleFormDataChange('contact', e)} />
                    </div>
                    <div className="flex justify-between">
                        <label>Referral Code: </label>
                        <input type="text" className=" bg-slate-800 rounded m-2" placeholder='Refferal Code' value={referral} onChange={(e) => setReferral(e.target.value)} />
                    </div>
                    <div>
                        <input type="submit" className="bg-blue-500 text-white font-bold inline-block px-5 py-2 rounded cursor-pointer" value="Submit" />
                    </div>
                </form>

            </div>

        </div>
    )
}

export default BuyPass