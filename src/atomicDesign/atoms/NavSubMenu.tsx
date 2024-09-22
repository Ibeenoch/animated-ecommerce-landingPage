import { Link } from "react-router-dom";

interface Arr {
    arrStr: string[];
}
const NavSubMenu = ({ arrStr}: Arr) => {
  return (
        <ul className='p-4'>
            {arrStr.map((brand, index) => (
                <li key={index} className='p-1 hover:opacity-80 upward-motion'>
                    <Link to="#" className='text-md libre font-normal'>{brand} </Link>
                </li>
            ))}
        </ul>
  )
}

export default NavSubMenu
