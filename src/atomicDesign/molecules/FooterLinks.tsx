import React from 'react'

interface FooterProps {
    title: string;
    links: Array<string>;
}
const FooterLinks = ({ title, links }: FooterProps) => {
  return (
    <article>
        <h1 className='text-2xl font-semibold pb-8 pt-3'>{title}</h1>
        <ul className=''>
        {
            links.map((link, index) => (
                <a className='text-left text-lg font-normal' key={index} href="#">
                    <li className='py-4 text-md'>{link}</li>
                </a>
            ))
        }
        </ul>
    </article>
  )
}

export default FooterLinks
