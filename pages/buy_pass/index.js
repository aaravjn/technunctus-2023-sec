import React, { useState, useEffect } from 'react'
import Head from "next/head"
import axios from 'axios';

const BuyPass = () => {

  const [formData, setFormData] = useState({
      name: '',
      email: '',
      contact: '',
      amount: 500
  })

  const [referral, setReferral] = useState('');

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

    let options = {
        key: 'rzp_test_q1n5qO0HzE0Usf',
        amount: formData.amount,
        name: '',
        description: '',
        order_id: '',
        handler: (resp) => {
            console.log(resp);
            axios.post('http://localhost:8080/buy_pass', {
                payment_id: resp.razorpay_payment_id,
                formData,
                referral
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        },
        prefill: {
            name: 'Ashutosh Chauhan',
            email: 'ashutoshc8101@gmail.com',
            contact: '9816092935'
        },
        notes: {
            address: 'Hello world'
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
        <Head>
            <title>
                Buy Pass - Technunctus
            </title>
        </Head>
        <p className='text-5xl font-bold gradientText m-4 sm:m-20 sm:mb-0 inline-block'>Buy Pass</p>

        <form onSubmit={submit}>
            <div>
                <label>Name: </label>
                <input type="text" className="form-input bg-slate-800" placeholder='Name' value={formData.name} onChange={(e) => handleFormDataChange('name', e)} required />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" className="form-input bg-slate-800" placeholder='Email' value={formData.email} onChange={(e) => handleFormDataChange('email', e)} required />
            </div>
            <div>
                <label>Contact: </label>
                <input type="text" className="form-input bg-slate-800" placeholder='Contact' value={formData.contact} onChange={(e) => handleFormDataChange('contact', e)}  />
            </div>
            <div>
                <label>Referral Code: </label>
                <input type="text" className="form-input bg-slate-800" placeholder='Refferal Code' value={referral} onChange={(e) => setReferral(e.target.value)} />
            </div>
            <div>
                <input type="submit" className="bg-blue-500 text-white font-bold inline-block px-5 py-2 rounded cursor-pointer" value="Submit" />
            </div>
        </form>

    </div>
  )
}

export default BuyPass