import React from 'react'

const Cancellation = () => {
    return (
        <div>
            <p className='text-5xl font-bold gradientText m-4 sm:m-20 sm:mb-0 inline-block'>What We Will Do Together:</p>
            <div className="p-4 sm:p-20">
                <ul>
                    <li>Step 1 – If the ticket had wrong information, then you can raise a request for regeneration at technunctus@iitjammu.ac.in </li>
                    <li>Step 2 – Give us 1 working day to review your return request.</li>
                    <li>Step 3 – After reviewing your return request,we will re-generate the ticket and send the new one via mail.</li>
                </ul>

                Under what conditions can I request a re-generation of ticket?

                <b className="text-4xl block my -4">
                    In case of wrong information on the generated ticket.
                    Can I cancel my order?
                </b>

                No cancellation of order is available.
                How long does it take to receive a new ticket?

                A maximum of 2 working days will be taken to generate a new ticket.
            </div>

        </div>
    )
}

export default Cancellation