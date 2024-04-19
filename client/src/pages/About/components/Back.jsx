import React from "react"



const Back = ({ name, title}) => {
  return (
    <>
      <div className='back'>

            <div className='container'>
                <span>{name}</span>
                <h1>{title}</h1>
            </div>

        <img src={'/office2.jpg'} alt='image' />
      </div>
    </>
  )
}

export default Back
