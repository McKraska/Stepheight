import React from 'react';

function Banner({ imageSrc1, imageSrc2, bannerText }) {
    return (
        <div className='Banner'>
            <img src={imageSrc1} alt="Banner Image 1" />
            <img src={imageSrc2} onerror="this.style.display='none'" />
            <h1> {bannerText} </h1>
        </div>
    );
}

export default Banner;