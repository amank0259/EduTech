import React from 'react';
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';
import { Button } from '@/components/ui/button';

function CourseVideoDescription({ courseInfo, activeChapterIndex, watchMode = false, setChapterCompleted }) {
    if (!courseInfo || !courseInfo.name) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2 className='text-[20px] font-semibold mb-3'>{courseInfo.name}</h2>
            {/* Video Player */}
            <VideoPlayer videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url}
                poster={!watchMode ? courseInfo?.banner?.url : null} />

            {/* Description */}
            <h2 className='mt-5 text-[17px] font-semibold'>
                {watchMode ?
                    <span className='flex justify-between items-center'>{courseInfo?.chapter[activeChapterIndex]?.name}
                        <Button onClick={() => setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)}>Mark as Complete</Button>
                    </span>
                    :
                    <span>About This Course</span>
                }
            </h2>
            {watchMode ?
                <Markdown className='text=-[13px] text-gray-800 mt-2 leading-8'>
                    {courseInfo?.chapter[activeChapterIndex]?.shortDesc}
                </Markdown>
                :
                <Markdown className='text=-[13px] text-gray-800 mt-2 leading-8'>
                    {courseInfo.description}
                </Markdown>}
        </div>
    );
}

export default CourseVideoDescription;
