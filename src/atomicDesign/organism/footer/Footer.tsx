import React from 'react'
import HeaderTitle from '../../atoms/HeaderTitle';
import { ReactComponent as Facebook } from '../../../assets/svg/facebook-svgrepo-com.svg';
import { ReactComponent as TikTok } from '../../../assets/svg/tiktok-svgrepo-com.svg';
import { ReactComponent as Twitter } from '../../../assets/svg/twitter-round-svgrepo-com.svg';
import { ReactComponent as Instagram } from '../../../assets/svg/instagram-svgrepo-com.svg';
import FooterLinks from '../../molecules/FooterLinks';

const Footer = () => {
    const socialIcons = [
        Facebook, Twitter, Instagram, TikTok
    ]
  return (
    <footer className='pb-20'>
        <div className='bg-[#cad0c2] rounded-3xl  py-8 px-8 sm:px-[10%] flex flex-col sm:grid sm:grid-cols-4 gap-4 sm:justify-around'>
        <div className='pt-4'>
            <h1 className='text-[35px] sm:text-4xl whitespace-nowrap libre-baskerville-regular'>FEELAM</h1>
            <p className='text-left text-gray-600 pb-6 pt-4 font-semibold'>Subscribe to our mailing list to <br />
            get the new updates!</p>
            <div className='flex gap-3 my-4'>
            {
                socialIcons.map((Icon, index) => (
                    <div key={index} className='w-9 h-9 bg-black flex justify-center items-center rounded-full'>
                        <Icon width={20} height={20} fill='#fff'/>
                    </div>
                ))
            }
            </div>
        </div>

            <FooterLinks title='INFORMATION' links={['About Us', 'Contact', 'How We Source', 'Identifying Fake Products']} />
            <FooterLinks title='OUR SERVICES' links={['Shipping & Delivery', 'Refunds & Returns', 'Book A Consultation', ]} />
            <FooterLinks title='MY ACCOUNT' links={['My Account', 'My Cart', 'Checkout', 'Track Order', 'My Wishlist' ]} />


        </div>
    </footer>
  )
}

export default Footer
