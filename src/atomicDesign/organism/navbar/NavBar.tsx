import SearchBar from '../../molecules/SearchBar'
import '../../../index.css'
import CompanyLogo from '../../atoms/CompanyLogo'
import { useNavigate } from 'react-router-dom'
import ShoppingIcons from '../../molecules/ShoppingIcons';
import  { ReactComponent as HamburgerMenu  } from '../../../assets/svg/hamburger-md-svgrepo-com.svg'
import NavPages from '../../molecules/NavPages';
import { useAppDispatch } from '../../../app/hooks';
import { toggleMobileNav } from '../../../features/auth/authSlice';


const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const handleHomeLogo = () => {
    navigate('/')
  };


  return (
    <nav className='fixed z-40'>
        <article className='w-[100vw] bg-[#cad0c2]'>
          <p className='bg-[#cad0c2] text-[10px] sm:text-xs tracking-wide  font-medium text-[#2c2c2a] p-2 mx-auto text-center lora'>HOW WE SOURCE YOUR FAVE BRANDS - <a href="#"><span><strong>CLICK HERE</strong></span></a></p>
        </article>
        <div className='bg-[#fff0ab] absolute  p-1 w-[100vw]'>
        <article className='flex overflow-hidden p-[10px]'>
            <p className='motion text-[16px] sm:text-[21px] whitespace-nowrap leading-tight'>&ensp;SHOP ON SALE ITEMS - CLICK HERE&ensp;•&ensp;SHOP ON SALE ITEMS - CLICK HERE&ensp;•&ensp;SHOP ON SALE ITEMS - CLICK HERE&ensp;•&ensp;SHOP ON SALE ITEMS - CLICK HERE •&ensp;SHOP ON SALE ITEMS - CLICK HERE •&ensp;</p>
        {/* the key of this continuous animation is motion and motion2, motion2 is delayed to half of motion speed */}
            <p className='motion motion2 text-[16px] sm:text-[21px] whitespace-nowrap leading-tight'>&ensp;SHOP ON SALE ITEMS - CLICK HERE&ensp;•&ensp;SHOP ON SALE ITEMS - CLICK HERE&ensp;•&ensp;SHOP ON SALE ITEMS - CLICK HERE •&ensp;SHOP ON SALE ITEMS - CLICK HERE •&ensp;SHOP ON SALE ITEMS - CLICK HERE •&ensp;</p>
        </article>
        </div>

        <div className='flex justify-between bg-[#faf5f2] items-center px-6 sm:px-10 pb-6 pt-16'>
          <span onClick={() => dispatch(toggleMobileNav(true)) } className='sm:hidden flex flex-col'>
            <HamburgerMenu width={30} height={30} />
          </span>
          <div className='sm:block hidden'>
            <SearchBar  />
          </div>
          <CompanyLogo onClick={handleHomeLogo} />
          <ShoppingIcons />
        </div>
        <div className='sm:hidden border-t border-t-[#8d8d8d] '>
            <SearchBar  />
          </div>
          <NavPages />
    </nav>
  )
}

export default NavBar
