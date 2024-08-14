import React from 'react';

// Define the Banner component accepting props for two images
function Banner({ imageSrc1, imageSrc2 }) {
    return (
        <div className='Banner'>
            <img src={imageSrc1} alt="Banner Image 1" />
            <img src={imageSrc2} alt="Banner Image 2" />
        </div>
    );
}

export default Banner;