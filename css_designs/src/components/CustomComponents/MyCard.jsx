import React from 'react'

const MyCard = ({preview}) => {
  return (
    <div className='border-2 bg-red-600 w-72 flex justify-center items-center mx-auto p-4' dangerouslySetInnerHTML={{__html: preview}}>
    </div>
  )
}

export default MyCard