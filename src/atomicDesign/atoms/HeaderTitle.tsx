import React from 'react'
interface TextProps{
    text: string
}

const HeaderTitle = ({ text }: TextProps) => {
  return (
    <div className='p-10 sm:p-[50px] flex justify-center'>
        <div className='hidden sm:text-5xl libre-baskerville-regular pb-2 border-b-[2px] border-b-black'>&ensp;</div>
        <div className='hidden sm:text-5xl libre-baskerville-regular pb-2 border-b-[2px] border-b-black'>&ensp;</div>
        <div className='hidden sm:text-5xl libre-baskerville-regular pb-2 border-b-[2px] border-b-black'>&ensp;</div>
        <div className='text-5xl libre-baskerville-regular pb-2 border-b-[2px] border-b-black'>&ensp;</div>
        <h1 className='text-[35px] sm:text-4xl whitespace-nowrap libre-baskerville-regular pb-2 border-b-[2px] border-b-black'>{text}</h1>
      <div className='text-5xl libre-baskerville-regular pb-2 border-b-[2px] border-b-black'>&ensp;</div>
      <div className='hidden sm:text-5xl libre-baskerville-regular pb-2 border-b-[2px] border-b-black'>&ensp;</div>
      <div className='hidden sm:text-5xl libre-baskerville-regular pb-2 border-b-[2px] border-b-black'>&ensp;</div>
      <div className='hidden sm:text-5xl libre-baskerville-regular pb-2 border-b-[2px] border-b-black'>&ensp;</div>
    </div>
  )
}

export default HeaderTitle
