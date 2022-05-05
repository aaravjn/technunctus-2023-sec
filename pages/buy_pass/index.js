import React, { useState, useEffect } from 'react'
import Head from "next/head"
import axios from 'axios';
import Confetti from 'react-confetti'
import { useWindowSize } from 'usehooks-ts'
import {useRouter} from "next/router"
// import useWindowSize from 'react-use/lib/useWindowSize'

const BuyPass = () => {

    const router=useRouter()
    // const { width, height } = useWindowSize()
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     contact: '',
    //     amount: 50000
    // })

    // const [referral, setReferral] = useState('');
    // const [loading, isLoading] = useState(false)
    // const [confirmed, isConfirmed] = useState(false)

    // let handleFormDataChange = (key, event) => {
    //     setFormData({
    //         ...formData,
    //         [key]: event.target.value
    //     })
    // };

    useEffect(() => {
        // const script = document.createElement('script')
        // script.src = 'https://checkout.razorpay.com/v1/checkout.js'
        // script.async = true

        // document.body.appendChild(script)
        router.replace("/")
    }, []);

    // let submit = (e) => {
    //     e.preventDefault();
    //     isLoading(true)

    //     let options = {
    //         // key: 'rzp_test_q1n5qO0HzE0Usf',
    //         key:'rzp_live_CiQaXzAg9SAmsj',
    //         amount: formData.amount,
    //         name: formData.name,
    //         description: '',
    //         order_id: '',
    //         handler: (resp) => {
    //             axios.post('http://3.111.253.224:8080/buy_pass/', {
    //                 payment_id: resp.razorpay_payment_id,
    //                 formData,
    //                 referral
    //             }).then((response) => {
    //                 isLoading(false)
    //                 isConfirmed(true)
    //             }).catch((error) => {
    //                 console.log(error);
    //             });
    //         },
    //         prefill: {
    //             name: formData.name,
    //             email: formData.email,
    //             contact: formData.phone,
    //         },
    //         notes: {
    //             address: 'Indian Institute of Technology Jammu'
    //         },
    //         theme: {
    //             color: '#00fffb'
    //         }
    //     };

    //     let rzp1 = new window.Razorpay(options);
    //     rzp1.open();
    // };
        // <div>
        //     {
        //         loading
        //         &&
        //         <div 
        //         style={{ backdropFilter: "blur(10px)", height: "100vh", top: 0, left: 0,display:'Grid',placeItems:"center" }}

        //         className="fixed t-0 l-0 z-40 w-full h-screen grid place-items-center bg-[#0000004e]">
        //             <p className="text-white text-4xl">Loading...</p>
        //         </div>
        //     }
        //     {
        //         confirmed
        //         &&
        //         <div
        //             style={{ backdropFilter: "blur(10px)", height: "100vh", top: 0, left: 0,display:'Grid',placeItems:"center" }}
        //             className="fixed z-40 w-full text-center  bg-[#0000004e]">
        //             <div >
        //                 <p className="text-white text-8xl font-semibold">Congratulations!</p>
                        
        //                 <p className="text-4xl mt-8 text-white">We hope you have a wonderful time at Technunctus!</p>

        //                 <p className='text-4xl'>Check your registered mail for pass.</p>
        //             </div>
        //             <div>
        //                 <Confetti
        //                     width={width}
        //                     height={height}
        //                 />
        //             </div>
        //         </div>
        //     }
        //     <Head>
        //         <title>
        //             Buy Pass - Technunctus
        //         </title>
        //     </Head>

        //     <p className='text-5xl font-bold gradientText m-4 sm:m-20 sm:mb-0 inline-block'>Buy Pass</p>

        //     <div className="grid place-items-center sm:p-4 h-[80vh]">
        //         <form onSubmit={submit} className="m-4 p-4  bg-[#000] sm:w-2/3 gradientRightBorder">
        //             <p className="text-2xl sm:text-4xl font-semibold mb-4 text-center ">Enjoy one pass for all Technunctus 2022 activities.</p>
        //             <div className="flex justify-between flex-wrap">
        //                 <label>Name: </label>
        //                 <input type="text" className=" bg-slate-800 rounded m-2" placeholder='Name' value={formData.name} onChange={(e) => handleFormDataChange('name', e)} required />
        //             </div>
        //             <div className="flex justify-between flex-wrap">
        //                 <label>Email: </label>
        //                 <input type="email" className=" bg-slate-800 rounded m-2" placeholder='Email' value={formData.email} onChange={(e) => handleFormDataChange('email', e)} required />
        //             </div>
        //             <div className="flex justify-between flex-wrap">
        //                 <label>Contact: </label>
        //                 <input minLength="10" maxLength="10" type="text" className=" bg-slate-800 rounded m-2" placeholder='Contact' value={formData.contact} onChange={(e) => handleFormDataChange('contact', e)} />
        //             </div>
        //             <div className="flex justify-between flex-wrap">
        //                 <label>Referral Code: </label>
        //                 <input type="text" className=" bg-slate-800 rounded m-2" placeholder='Refferal Code' value={referral} onChange={(e) => setReferral(e.target.value)} />
        //             </div>
        //             <div>
        //                 <input type="submit" className="bg-blue-500 text-white font-bold inline-block px-5 py-2 rounded cursor-pointer" value="Submit" />
        //             </div>
        //         </form>

        //     </div>

        // </div>
    return null;
}

export default BuyPass 