import React from 'react'

function page() {
    return (
        <div className='flex items-center justify-center flex-col my-4'>
            <h1 className='text-2xl text-zinc-500 font-bold'>Fill the form to be a part of EduTech and contribute to Skillup the Students</h1>
            <form className='w-full px-64 py-6' action="https://getform.io/f/nbdoqyla" method="POST">
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col flex-wrap'>
                        <label htmlFor="name">Name</label>
                        <input className='h-10 px-2 border border-zinc-600 rounded' type="text" name='Full Name' required id='name' placeholder='Full Name' />
                    </div>
                    <div className='flex flex-col flex-wrap'>
                        <label htmlFor="phone">Phone</label>
                        <input className='h-10 px-2 border border-zinc-600 rounded' type="number" required id='phone' name='Phone Number' placeholder='Phone Number' />
                    </div>
                    <div className='flex flex-col flex-wrap'>
                        <label htmlFor="email">Email</label>
                        <input className='h-10 px-2 border border-zinc-600 rounded' type="email" required id='email' name='Email' placeholder='xyz.com' />
                    </div>
                    <div className='flex flex-col flex-wrap'>
                        <label htmlFor="age">Age</label>
                        <input className='h-10 px-2 border border-zinc-600 rounded' type="number" required id='age' name='Age' placeholder='Age' />
                    </div>
                    <div className='flex flex-col flex-wrap'>
                        <label htmlFor="pro">Profession</label>
                        <input className='h-10 px-2 border border-zinc-600 rounded' type="text" id='pro' name='Profession' placeholder='Software Engineer' />
                    </div>
                    <div className='flex flex-col flex-wrap'>
                        <label htmlFor="skills">Skills</label>
                        <input className='h-10 px-2 border border-zinc-600 rounded' type="text" id='skills' name='Skills' placeholder='Enter Your Skills e.g- Java, Python, C++...' />
                    </div>
                    <div className='flex flex-col flex-wrap'>
                        <label htmlFor="github">Github</label>
                        <input className='h-10 px-2 border border-zinc-600 rounded' type="text" id='github' name='Gitbhub link' placeholder='github.com/amank0259' />
                    </div>
                    <div className='flex flex-col flex-wrap'>
                        <label htmlFor="linkedin">Linkedin</label>
                        <input className='h-10 px-2 border border-zinc-600 rounded' type="text" id='linkedin' name='Linkedin link' placeholder='linkedin.com/in/amank0259x' />
                    </div>
                    <div className='flex flex-col flex-wrap'>
                        <label htmlFor="portfolio link">Enter Your Portfolio Link</label>
                        <input className='h-10 px-2 border border-zinc-600 rounded' type="text" id='skills' name='Portfolio link' placeholder='Enter Your Portfolio link or Portfolio Website' />
                    </div>
                </div>
                <div className='flex items-center justify-center w-full py-6'>
                    <button
                        className='px-6 py-3 bg-green-400 hover:bg-green-500 rounded-full inline-block cursor-pointer'
                        type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default page