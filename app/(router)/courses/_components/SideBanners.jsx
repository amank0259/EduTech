import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SideBanners() {
    const [sideBannerList, setSideBannerList] = useState();

    useEffect(() => {
        getSideBanners();
    }, []);

    const getSideBanners = () => {
        GlobalApi.getSideBanner().then(resp => {
            setSideBannerList(resp.sideBanners);
        });
    };

    return (
        <div>
            {sideBannerList &&
                sideBannerList.map((item, index) => (
                    <div key={index}>
                        <Image
                            src={item.banner.url}
                            height={300}
                            width={500}
                            // onClick={() => window.open("")}
                            className='rounded-xl cursor-pointer'
                        />
                    </div>
                ))}
        </div>
    );
}

export default SideBanners;
