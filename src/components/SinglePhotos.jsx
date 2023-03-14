import React from 'react'

function SinglePhotos({ pic }) {
    const { img } = pic;
    return (
        <div className="insta-gallery py-4 px-0">
            <a href="https://www.instagram.com/"><img className="rounded-lg" src={img} alt="" /></a>
        </div>
    )
}

export default SinglePhotos;