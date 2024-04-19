import React, { useEffect, useState } from 'react'
import './HousePicture.css'



const HousePicture = () => {
   const [imageUrl, setImgUrl] = useState('')

   useEffect(() => {
    fetch('https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch the image');
        }
        return res.blob(); // Use blob() for image data
      })
      .then((blob) => {
        // Convert the blob to a URL and set it as the image URL
        const url = URL.createObjectURL(blob);
        setImgUrl(url);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);
  

  return (
    <div className='container' >
       <img width={240} src={imageUrl} alt='house' /> 
    </div>
  )
}

export default HousePicture