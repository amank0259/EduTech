import Image from 'next/image'
import React from 'react'

function CourseItem({ course }) {
    return (
        <div className={`border rounded-xl shadow-md hover:shadow-lg ${course.free ? 'hover:shadow-green-300' : 'hover:shadow-orange-300'} cursor-pointer`}>
            <Image src={course?.banner?.url}
                width={500}
                height={150}
                className='rounded-t-xl'
            />
            <div className='flex flex-col gap-1 p-2 '>
                <h2 className='font-medium'>{course.name}</h2>
                {course?.chapter?.length == 0 ?
                    <div className='flex gap-2'>
                        <Image src='/youtube.png'
                            width={20}
                            height={20} />
                        <h2 className='text-[14px] text-gray-400'>Watch on Youtube</h2>
                    </div> :
                    <div className='flex gap-2'>
                        <Image src='/chapter.png'
                            width={20}
                            height={20} />
                        <h2 className='text-[14px] text-gray-400'>Chapter</h2>
                    </div>}
                <span className='inline-block'>
                    <span className={`text-[15px] px-2 py-1 rounded opacity-90 ${course.free ? 'bg-green-400' : 'bg-orange-300'}`}>
                        {course?.free ? 'Free' : 'Paid'}
                    </span>
                </span>
            </div>
        </div>
    )
}

export default CourseItem
