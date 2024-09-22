import React from 'react'
interface Props {
    title: string
}

const ViewMoreBtn = ({ title }: Props) => {
  return (
        <button className='bg-white hover:bg-black hover:text-white font-bold border border-black border-opacity-30 sm:rounded-xl rounded-lg libre text-center tracking-tight text-[12px] sm:text-[16px] sm:px-6 sm:py-4 px-4 py-2'>{title}</button>
  )
}

export default ViewMoreBtn
