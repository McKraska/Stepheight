import './Banner.css';
import React from 'react';

function Banner({ text, imageSrc1, imageSrc2, imageSrc3, imageSrc4 }) {
    return (
        <div className='Banner'>
            <h1 className='BannerText'>{text}</h1>
            <img src={imageSrc1} className='BannerIMG1' alt="Banner Image 1" />
            <img src={imageSrc2} className='BannerIMG2' onerror="this.style.display='none'" />
            <img src={imageSrc3} className='BannerIMG3' onerror="this.style.display='none'" />
            <img src={imageSrc4} className='BannerIMG4' onerror="this.style.display='none'" />
        </div>
    );
}

export default Banner;