import { useState } from 'react';
import { ReactComponent as Plus } from '../../assets/svg/plus-svgrepo-com.svg';
import { ReactComponent as Cancel } from '../../assets/svg/cancel-close-delete-svgrepo-com.svg';
import '../../index.css';
import brandImage from '../../assets/images/banner1.png';
import bathAndBodyImage from '../../assets/images/banner1.png';
import NavSubMenu from '../atoms/NavSubMenu';
import CompanyLogo from '../atoms/CompanyLogo';
import { Link, useNavigate } from 'react-router-dom';
import MobileNavList from '../atoms/MobileNavList';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectUser, toggleMobileNav } from '../../features/auth/authSlice';

const NavPages = () => {
    const [aboutHovered, setAboutHovered] = useState<boolean>(false);
    const [brandsHovered, setBrandsHovered] = useState<boolean>(false);
    const [faceHovered, setFaceHovered] = useState<boolean>(false);
    const [bathBodyHovered, setBathBodyHovered] = useState<boolean>(false);
    const [saleOfferHovered, setSaleOfferHovered] = useState<boolean>(false);
    const [bookAConsultationHovered, setBookAConsultationHovered] = useState<boolean>(false);
    const [giftCardsHovered, setGiftCardsHovered] = useState<boolean>(false);
    const [wholesaleHovered, setWholesaleHovered] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { mobileNav } = useAppSelector(selectUser);

    const aboutActive = () => {
        setAboutHovered(true);
        setBathBodyHovered(false);
        setBrandsHovered(false);
        setFaceHovered(false);
        setSaleOfferHovered(false);
        setBookAConsultationHovered(false);
        setGiftCardsHovered(false);
        setWholesaleHovered(false);
    }

    const bathBodyACtive = () => {
        setAboutHovered(false);
        setBathBodyHovered(true);
        setBrandsHovered(false);
        setFaceHovered(false);
        setSaleOfferHovered(false);
        setBookAConsultationHovered(false);
        setGiftCardsHovered(false);
        setWholesaleHovered(false);
    };

    const brandsActive = () => {
        setAboutHovered(false);
        setBathBodyHovered(false);
        setBrandsHovered(true);
        setFaceHovered(false);
        setSaleOfferHovered(false);
        setBookAConsultationHovered(false);
        setGiftCardsHovered(false);
        setWholesaleHovered(false);
    };

    const faceActive = () => {
        setAboutHovered(false);
        setBathBodyHovered(false);
        setBrandsHovered(false);
        setFaceHovered(true);
        setSaleOfferHovered(false);
        setBookAConsultationHovered(false);
        setGiftCardsHovered(false);
        setWholesaleHovered(false);
    };

    const saleOfferActive = () => {
        setAboutHovered(false);
        setBathBodyHovered(false);
        setBrandsHovered(false);
        setFaceHovered(false);
        setSaleOfferHovered(true);
        setBookAConsultationHovered(false);
        setGiftCardsHovered(false);
        setWholesaleHovered(false);
    };

    const bookAConsultationActive = () => {
        setAboutHovered(false);
        setBathBodyHovered(false);
        setBrandsHovered(false);
        setFaceHovered(false);
        setSaleOfferHovered(false);
        setBookAConsultationHovered(true);
        setGiftCardsHovered(false);
        setWholesaleHovered(false);
    };

    const giftCardsActive = () => {
        setAboutHovered(false);
        setBathBodyHovered(false);
        setBrandsHovered(false);
        setFaceHovered(false);
        setSaleOfferHovered(false);
        setBookAConsultationHovered(false);
        setGiftCardsHovered(true);
        setWholesaleHovered(false);
    };

    const wholesaleActive = () => {
        setAboutHovered(false);
        setBathBodyHovered(false);
        setBrandsHovered(false);
        setFaceHovered(false);
        setSaleOfferHovered(false);
        setBookAConsultationHovered(false);
        setGiftCardsHovered(false);
        setWholesaleHovered(true);
    };

    const noneActive = () => {
        console.log(aboutHovered, bathBodyHovered, brandsHovered, brandsHovered)
        setAboutHovered(false);
        setBathBodyHovered(false);
        setBrandsHovered(false);
        setFaceHovered(false);
        setSaleOfferHovered(false);
        setBookAConsultationHovered(false);
        setGiftCardsHovered(false);
        setWholesaleHovered(false);
    };

     
    const navitems = [
        'About Us',
        'Brands',
        'Face',
        'Bath & Body',
        'Sales & Offers',
        'Book A Consultation',
        'Gift Cards',
        'Wholesale',
    ];

    const aboutUsItems = [
        'About FeelAm',
        'How We Source Brands',
        'Authorized Resellers',
        'Identifying Fake Products',
    ];

    const brandsItemsOne = [
        "Cerave",
        "Touch",
        "Good Molecules",
        "25pskyn",
        "Timeless",
        "Dr Teal's",
        "Medix 5.5",
        "Kojie San",
    ];

    const brandsItemsTwo = [
    "Jumiso",
    "Tiam",
    "Missha",
    "Acwell",
    "Klairs",
    "Beauty of Joseon",
    "I'm From",
    "Skin Aqua",
    ]

    const faceItemsTwoA = [
        'Alpha Arbutin',
        'Azelaic',
        'Benzoyl Peroxide',
        'Ceramides',
        'Glycolic Acid',
        'Hyaluronic Acid',
        'Hydroquinone',
    ];

    const faceItemsTwoB = [
        'Kojic Acid',
        'Lactic Acid',
        'Niacinamide',
        'Retinol',
        'Salicylic Acid',
        'Tranexamic Acid',
        'Vitamin C',
    ];

    const faceItemsThreeA = [
        'Acne & Blemishes',
        'Anti-aging',
        'Dark Spots',
        'Discolouration',
        'Eczema/itchy skin',
    ];

    const faceItemsThreeB = [
        'Fungal/Yeast Infections',
        'Ingrown Hairs',
        'Rough & Bumpy Skin',
        'Stretch marks',
        'Wrinkles',
    ];

    const salesAndOfferItems = [
        'Back In Stock',
        'Top Rated',
        'Best Sellers',
    ];

    const wholesaleItems = [
        'Shop Wholesale',
        'Join Teeka4 Plus',
        'Wholesale Log In',
        'Wholesaler Terms',
    ];  

    const linkHover = (link: string) => {
        console.log('val ', link);
        switch(link){
            case 'About Us' :
                aboutActive();
                break;
            case 'Brands' :
                brandsActive();
                break;
            case 'Face' :
                faceActive();
                break;
            case 'Bath & Body' :
                bathBodyACtive();
                break;
            case 'Sales & Offers' :
                saleOfferActive();
                break;
            case 'Book A Consultation' :
                bookAConsultationActive();
                break;
            case 'Gift Cards' :
                bookAConsultationActive();
                break;
            case 'Wholesale' :
                wholesaleActive();
                break;
            default:
                noneActive();
                break;
        }
        
    }

    const mobileListItems = [
        'Back In Stock',
        'About Us',
        'Wholesale',
        'Brands',
        'Asian Brands',
        'Body',
        'Face',
        'Skin Concerns',
        'Ingredients',
        'Hair',
        'On Sale',
        'Gift Cards',
        'Quick Consultation',
    ];
    
    const goHome = () => {
        navigate('/')
    };

   
  return (
    <div className='z-3'>
        {/* desktop nav  */}
        <div className='hidden sm:block'>
            <ul className='hidden sm:flex justify-center items-center bg-[#faf5f2] gap-10 sm:p-[15px] border-b border-b-[2px] border-b-black'>
                {
                    navitems.map((link, index) => (
                        <li key={index} 
                        onMouseEnter={() => linkHover(link)}
                        // onMouseLeave={() => noneActive()} 
                        // smooth-border gives the border animation check index.css 
                        className='smooth-border flex items-center'>
                            <Link to="#" className='montserrat text-[#2b2b2b] text-[14px] font-semibold tracking-widest'>{link}</Link>
                        {
                            link === 'About Us' || link === 'Brands' || link === 'Bath & Body' || link === 'Wholesale' || link === 'Face' || link === 'Sales & Offers' ? (
                                <Plus width={12} height={12} /> 
                            ): (
                                <></>
                            )
                        }
                        </li>
                        
                    ))
                }
            </ul>
            <div  className={` hidden ${aboutHovered ? 'sm:block' : 'sm:hidden'} bg-white relative left-[15%]`}>
            {/*  */}
            <ul className={`absolute bg-white top-0 left-0 p-10`}>
                {
                    aboutUsItems.map((about, index) => (
                        <li key={index} className='p-4 upward-motion'>
                            <Link to="#">{about}</Link>
                        </li>
                    ))
                }
            </ul>        
            </div>

            <div className={`relative hidden   ${brandsHovered ? 'sm:flex' : 'sm:hidden'} w-max left-[10%] right-[25%] bg-white flex items-center gap-5 p-4 montserrat`}>
                <div>
                        <h1 className='p-4 text-[25px] libre border-b border-b-[#2b2b2b]'>Brands</h1>
                        <NavSubMenu arrStr={brandsItemsOne} />
                    </div> 
                <div>
                        <h1 className='p-4 text-[25px] libre border-b border-b-[#2b2b2b]'>Asian Brands</h1>
                        <NavSubMenu arrStr={brandsItemsTwo} />
                </div> 
                <div className='relative'>
                        <img src={brandImage} width='75%' height='50%' alt="brandimage-photo" />
                        <button className='rounded-md absolute top-[50%] left-8 bg-transparent py-2 px-4 border border-[#2d2d2d]'>View All Brands</button>
                </div>
            </div>
            
            <div className={`relative hidden  mx-auto ${faceHovered ? 'sm:flex' : 'sm:hidden'} w-max justify-center bg-white p-6 gap-6 w-full`}>
                <div className='w-[20%]'>
                    <h1 className='p-4 text-[25px] font-semibold libre border-b border-b-[#2b2b2b]'>Skincare</h1>
                </div>

                <div>
                    <h1 className='p-4 text-[25px] font-semibold libre border-b border-b-[#2b2b2b]'>Ingredients</h1>
                    <div className='grid grid-cols-2'>
                        <NavSubMenu arrStr={faceItemsTwoA} />
                        <NavSubMenu arrStr={faceItemsTwoB} />
                    </div>
                </div>
                <div>
                    <h1 className='p-4 text-[25px] font-semibold libre border-b border-b-[#2b2b2b]'>Skin Concern</h1>
                    <div className='grid grid-cols-2'>
                        <NavSubMenu arrStr={faceItemsThreeA} />
                        <NavSubMenu arrStr={faceItemsThreeB} />
                    </div>
                </div>
            </div>

            <div className={`relative hidden  ${bathBodyHovered ? 'sm:flex' : 'sm:hidden'} w-max justify-center mx-auto gap-6 p-6 bg-white`}>
                <div className='w-[30%] cursor-pointer'>
                    <h1 className='p-4 text-[25px] libre border-b border-b-[#2b2b2b]'>Bathe & Body</h1>
                </div>
                <div className='relative cursor-pointer'>
                    <img src={bathAndBodyImage} width='100%' height='100%' alt="bathAndBodybrandimage-photo" />
            </div>
            </div>

            <div className={` hidden ${saleOfferHovered ? 'sm:flex' : 'sm:hidden'} w-max mx-auto bg-white justify-center relative`}>
                <ul className={` p-10`}>
                    {
                        salesAndOfferItems.map((about, index) => (
                            <li key={index} className='p-4 libre upward-motion'>
                                <Link to="#">{about}</Link>
                            </li>
                        ))
                    }
                </ul>        
            </div>

            <div className={` hidden ${wholesaleHovered ? 'sm:block' : 'sm:hidden'} bg-white relative left-10`}>
                <ul className={`absolute right-[13%] bg-white p-10`}>
                    {
                        wholesaleItems.map((about, index) => (
                            <li key={index} className='p-4 flex w-max libre upward-motion'>
                                <Link to="#">{about}</Link>
                            </li>
                        ))
                    }
                </ul>        
            </div>
            
        </div>
        
        {/* mobile nav  */}
        <div className={`sm:hidden ${mobileNav ? 'block': 'hidden'}  bg-white absolute top-0 left-0 w-[97%] h-screen  overflow-y-auto`}>
            
            <div className='flex justify-between p-2'>
                <div></div>
                <span onClick={() => dispatch(toggleMobileNav(false))}>
                <Cancel className='w-7 h-7' />
                </span>
            </div>
            <div className='p-2'>
                <CompanyLogo onClick={goHome} />
            </div>
            <div className='overflow-y-auto h-full'>
            {
                mobileListItems.map((list, index) => (
                    <div className='p-4 '>
                        <MobileNavList Text={list} />
                    </div>
                ))
            }
            </div>

        </div>
    </div>
  )
}

export default NavPages
