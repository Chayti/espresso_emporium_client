import React, { useEffect, useState } from 'react'
import SinglePhotos from './SinglePhotos';


function Gallery() {
    const [insta, setInsta] = useState([])
    useEffect(() => {
        fetch('instagramPics.json')
            .then(res => res.json())
            .then(data => setInsta(data));
    }, [])
    return (
        <div className="mb-20">
            <div className="text-center mt-20 mb-10">
                <p className="text-p">Follow Us Now</p>
                <h1 className="text-h1">Follow on Instagram</h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {
                    insta.map(pic => <SinglePhotos
                        key={pic.id}
                        pic={pic}
                    ></SinglePhotos>)
                }
            </div>
        </div>

    )
}

export default Gallery;