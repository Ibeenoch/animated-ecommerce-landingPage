import React from 'react'
import HeaderTitle from '../atoms/HeaderTitle'
import ViewMoreBtn from '../atoms/ViewMoreBtn';
import '../../index.css'


interface Props {
    title: string;
    text: string;
}

const ImgTitleAndBtn = ({ text, title }: Props) => {
  return (
    <div className=' flex flex-col gap-6 p-6'>
        <h1 className='text-[30px] font-semibold text-black libre'>{text}</h1>
        <ViewMoreBtn title={title} />
    </div>
  )
}

export default ImgTitleAndBtn
