import { ReactComponent as User } from '../../assets/svg/user-svgrepo-com.svg'
import { ReactComponent as Cart } from '../../assets/svg/bag-svgrepo-com.svg'
import { ReactComponent as Heart } from '../../assets/svg/heart-alt-svgrepo-com.svg'

const ShoppingIcons = () => {
  return (
    <div className='flex gap-[1px] sm:gap-3 items-center sm:pr-4'>
        <span className='cursor-pointer'>
            <User className='w-6 h-6 sm:w-[40px] sm:h-[40px]' aria-hidden={true} />
        </span>
        <span className='cursor-pointer relative'>
            <Heart className='w-4 h-4 sm:w-[30px] sm:h-[30px]' aria-hidden={true}  />
        </span>
        <span className='cursor-pointer relative'>
            <Cart className='w-4 h-4 sm:w-[30px] sm:h-[30px]' aria-hidden={true}  />
            <span className='absolute bg-[#cad0c2] bottom-3 left-4 flex justify-center items-center px-2 py-[2.5px] rounded-full'>
              <p className='text-center text-white text-[9px]'>0</p>
            </span>
        </span>      
    </div>
  )
}

export default ShoppingIcons
