'use client'
import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

function Membership() {

    const [subscriptionId, setSubscriptionId] = useState(null);
    const [loader, setLoader] = useState(false);
    const { user } = useUser();

    /**
     * Create Subscription Id
     * @param {*} planId
     */
    const createSubscription = async (planId) => {
        axios.post("/api/create-subscription", JSON.stringify({
            plan_id: planId
        })).then(resp => {
            console.log(resp.data);
            setLoader(false);
            setSubscriptionId(resp.data.id);
        })
    }

    useEffect(() => {
        subscriptionId && makePayment();
    }, [subscriptionId])

    const makePayment = () => {
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
            subscription_id: subscriptionId,
            name: 'EduTech',
            // add logo here ******
            description: 'EduTech Pro Membership',
            handler: async (resp) => {
                console.log(resp);
                if (resp) {
                    addNewMember(resp?.razorpay_payment_id);
                }

            },
            theme: {
                color: '#ff864a'
            }
        }
        const rzp = new window.Razorpay(options);
        rzp.open();
    }

    const addNewMember = (paymentId) => {
        GlobalApi.addNewMember(user.primaryEmailAddress.emailAddress, paymentId).then(resp => {
            console.log(resp);
            if (resp) {
                toast('Payment Successful!!');
            }
        }, (error) => {
            toast('Payment Failed | Some Error happened!');
        })
    }

    return (
        <div>
            <Script
                id='razorpay-checkout-js'
                src='https://checkout.razorpay.com/v1/checkout.js'></Script>
            <div className="mx-auto max-w-3xl my-20">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:item-center">

                    {/* Monthly Plan  */}
                    <div className="rounded-2xl border border-gray-200 p-6 hover:border-primary cursor-pointer bg-white shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">Monthly
                                <span className='sr-only'>Plan</span>
                            </h2>
                            <p className="mt-12 sm:mt-4">
                                <strong className='text-3xl font-bold text-gray-900'>
                                    ₹499
                                </strong>
                                <span className='text-sm font-medium text-gray-700'>/month</span>
                            </p>
                        </div>
                        <ul className='mt-6 space-y-2'>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='h-5 w-5 text-indigo-600'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4.5 12.75l6 6 9-13.5'
                                    />
                                </svg>
                                <span className='text-gray-700'>Access to All Course</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='h-5 w-5 text-indigo-600'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4.5 12.75l6 6 9-13.5'
                                    />
                                </svg>
                                <span className='text-gray-700'>Free Source Code</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='h-5 w-5 text-indigo-600'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4.5 12.75l6 6 9-13.5'
                                    />
                                </svg>
                                <span className='text-gray-700'>Free App Membership</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='h-5 w-5 text-indigo-600'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4.5 12.75l6 6 9-13.5'
                                    />
                                </svg>
                                <span className='text-gray-700'>Email & Instagram DM Support</span>
                            </li>
                        </ul>
                        <button onClick={() => createSubscription('plan_NiZk8nze3OETpO')}
                            className='mt-8 block rounded-full border bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:ring-1 hover:ring-indigo-600 focus:outline'>
                            Get Started
                        </button>
                    </div>
                    {/* Yearly Plan  */}
                    <div className="rounded-2xl border border-gray-200 p-6 hover:border-primary cursor-pointer bg-white shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">Yearly
                                <span className='sr-only'>Plan</span>
                            </h2>
                            <p className="mt-12 sm:mt-4">
                                <strong className='text-3xl font-bold'>
                                    ₹349
                                </strong>
                                <span className='text-sm font-medium'>/month</span>
                            </p>
                        </div>
                        <ul className='mt-6 space-y-2'>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='h-5 w-5 text-indigo-600'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4.5 12.75l6 6 9-13.5'
                                    />
                                </svg>
                                <span className='text-gray-700'>Access to All Course</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='h-5 w-5 text-indigo-600'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4.5 12.75l6 6 9-13.5'
                                    />
                                </svg>
                                <span className='text-gray-700'>Free Source Code</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='h-5 w-5 text-indigo-600'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4.5 12.75l6 6 9-13.5'
                                    />
                                </svg>
                                <span className='text-gray-700'>Free App Membership</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='h-5 w-5 text-indigo-600'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4.5 12.75l6 6 9-13.5'
                                    />
                                </svg>
                                <span className='text-gray-700'>Email & Instagram DM Support</span>
                            </li>
                        </ul>
                        <button onClick={() => createSubscription('plan_NiZkjfQgJ3BbCz')}
                            className='mt-8 block rounded-full border bg-primary px-12 py-3 text-center text-sm font-medium text-white hover:ring-1 hover:ring-indigo-600 focus:outline'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className='flex items-center justify-center'><h1>Techboy Aman</h1></div> */}
        </div>
    )
}

export default Membership