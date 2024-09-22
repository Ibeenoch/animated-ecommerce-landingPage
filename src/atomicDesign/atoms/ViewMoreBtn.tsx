import React from 'react'
interface Props {
    title: string
}

const ViewMoreBtn = ({ title }: Props) => {
  return (
        <button className='bg-white hover:bg-black hover:text-white font-bold border border-black rounded-xl libre text-center tracking-tight text-[16px] px-6 py-4'>{title}</button>
  )
}

export default ViewMoreBtn
