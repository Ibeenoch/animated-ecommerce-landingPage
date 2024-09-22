import React from 'react'
interface TextProps{
    text: string
}

const HeaderTitle = ({ text }: TextProps) => {
  return (
    <div className='p-10 sm:p-[50px] flex justify-center'>
        <h1 className='text-[28px] sm:text-3xl whitespace-nowrap libre-baskerville-regular pb-2 border-b-[1px] sm:border-b-[2px] border-b-black'>{text}</h1>
    </div>
  )
}

export default HeaderTitle
