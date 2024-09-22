import React from 'react'
import { Link } from 'react-router-dom';

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
                <Link className='text-left text-lg font-normal' key={index} to="#">
                    <li className='sm:py-4 py-2 text-xs sm:text-md'>{link}</li>
                </Link>
            ))
        }
        </ul>
    </article>
  )
}

export default FooterLinks
