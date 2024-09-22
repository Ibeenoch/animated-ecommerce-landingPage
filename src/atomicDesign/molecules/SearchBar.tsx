import { ChangeEvent, useEffect, useState } from 'react'
import  { ReactComponent as SearchBarLogo  } from '../../assets/svg/search-4-svgrepo-com.svg'

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [findItems, setFindItem] = useState<boolean>(false);

  useEffect(() => {
    console.log('is searching...')
  }, [findItems])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchVal(e.target.value);
      setFindItem(true)
  }


  return (
    <div className='bg-[#faf5f2]'>
     
      <form className='flex items-center border-b border-b-[#8d8d8d] sm:border-b-[#000]'>
        <SearchBarLogo width={35} height={35} />
        <label className='hidden' htmlFor="search-for">Search for</label>
        {/* to hide border when the input field is clicked focus:outline-none */}
        <input type="search" onChange={handleSearch} name="search-bar" id="search-bar" placeholder='type to search' className='text-[#8d8d8d] w-full bg-transparent border-0 focus:ring-0 focus:outline-none' />
      </form>
    </div>
  )
}

export default SearchBar
