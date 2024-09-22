import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ReactComponent as Plus } from '../../assets/svg/plus-svgrepo-com.svg';
import { ReactComponent as Minus } from '../../assets/svg/minus-svgrepo-com.svg';
import { selectUser, viewMobileSubTitle } from '../../features/auth/authSlice';
import { Link } from 'react-router-dom';

interface PropsItems {
    Text: string;
}

const MobileNavList = ({Text}: PropsItems) => {
    const dispatch = useAppDispatch();
    const { mobileSubTitle, showmobileSubTitle } = useAppSelector(selectUser);
    const aboutItems = [
        'About Feelam',
        'How We Source Brands',
        'Authorized Resellers',
        'Identifying Fake Products',
    ];
    const wholeItems = [
        'Shop Wholesale',
        'Join Feelam Plus',
        'Wholesale Log In',
        'Wholesaler Terms',
    ];
    
    const bodyItems = [
        'Body Exfoliators and Scrubs',
        'Body Moisturizers & Oils',
        'Body Washes & Bars',
        'Hands & Foot Care',
    ];

    const faceItems = [
        'Cleansing oils & Balms',
        'Eye care',
        'Face Cleansers',
        'Face Exfoliators & Scrubs',
        'Face Masks',
        'Face Moisturizers',
        'Face Serums',
        'Face Toners',
        'Kits & Duos',
        'Lip care',
        'Sunscreens',
        'Treatments',
    ];

    const skinsItems = [
        'Acne & Blemishes',
        'Dark Spots',
        'Eczema/itchy skin',
        'Ingrown Hairs',
        'Stretch marks',
        'Anti-aging',
        'Discolouration',
        'Fungal/Yeast Infections',
        'Rough & Bumpy Skin',
        'Wrinkles',
    ];

    const IngredientItems = [
        'Alpha Arbutin',
        'Benzoyl Peroxide',
        'Glycolic Acid',
        'Hydroquinone',
        'Lactic Acid',
        'Retinol',
        'Tranexamic Acid',
        'Azelaic',
        'Ceramides',
        'Hyaluronic Acid',
        'Kojic Acid',
        'Niacinamide',
        'Salicylic Acid',
        'Vitamin C',
    ];

    const handleSubItems = (str: string) => {
        dispatch(viewMobileSubTitle({ mode: true,  text: str}))
    };

    const closeMobileSubTitle = (e: React.MouseEvent<HTMLDivElement>, str: string) => {
        e.stopPropagation();
        dispatch(viewMobileSubTitle({ mode: false,  text: str}))
    };
    // console.log('the mobile title ', mobileSubTitle, Text === mobileSubTitle, Text, showmobileSubTitle)

  return (
    <div className=''>
        <div className='flex justify-between items-center'>
        <p className='text-[15px] font-medium libre'>{Text}</p>
        {
            Text === 'About Us' || Text === 'Wholesale' || Text === 'Body' || Text === 'Face' || Text === 'Skin Concerns' || Text === 'Ingredients' ? (
                <span onClick={() =>handleSubItems(Text)} className='cursor-pointer' aria-hidden={true}>
                    {
                        showmobileSubTitle && mobileSubTitle === 'About Us' && mobileSubTitle === Text ? 
                        (   
                            <div onClick={(e) =>closeMobileSubTitle(e, 'none')} className=''>
                                <Minus className='w-4 h-4' />
                            </div>
                        ) :
                        showmobileSubTitle && mobileSubTitle === 'Ingredients' && mobileSubTitle === Text ? 
                        (   
                            <div onClick={(e) =>closeMobileSubTitle(e, 'none')} className=''>
                                <Minus className='w-4 h-4' />
                            </div>
                        ) :
                        showmobileSubTitle && mobileSubTitle === 'Skin Concerns' && mobileSubTitle === Text ? 
                        (   
                            <div onClick={(e) =>closeMobileSubTitle(e, 'none')} className=''>
                                <Minus className='w-4 h-4' />
                            </div>
                        ) :
                        showmobileSubTitle && mobileSubTitle === 'Face' && mobileSubTitle === Text ? 
                        (   
                            <div onClick={(e) =>closeMobileSubTitle(e, 'none')} className=''>
                                <Minus className='w-4 h-4' />
                            </div>
                        ) :
                        showmobileSubTitle && mobileSubTitle === 'Body' && mobileSubTitle === Text ? 
                        (   
                            <div onClick={(e) =>closeMobileSubTitle(e, 'none')} className=''>
                                <Minus className='w-4 h-4' />
                            </div>
                        ) :
                        showmobileSubTitle && mobileSubTitle === 'Wholesale' && mobileSubTitle === Text ? 
                        (   
                            <div onClick={(e) =>closeMobileSubTitle(e, 'none')} className=''>
                                <Minus className='w-4 h-4' />
                            </div>
                        ) :
                        (
                            <Plus className='w-4 h-4' />
                        )
                    }
                
                </span>
            ) : (<></>)
        }
        
        </div>
        {
            showmobileSubTitle && mobileSubTitle === 'About Us' && mobileSubTitle === Text  && (
                <ul className={`pl-[5%] p-4`}>
                {
                    aboutItems.map((about, index) => (
                        <li key={index} className='p-4 upward-motion text-[12px]'>
                            <Link to="#" className='text-[12px]'>{about}</Link>
                        </li>
                    ))
                }
            </ul>   
            )
        }
        {
            showmobileSubTitle && mobileSubTitle === 'Wholesale' && mobileSubTitle === Text  && (
                <ul className={`pl-[5%] p-4`}>
                {
                    wholeItems.map((about, index) => (
                        <li key={index} className='p-4 text-[12px] upward-motion'>
                            <Link to="#" className='text-[12px]'>{about}</Link>
                        </li>
                    ))
                }
            </ul>   
            )
        }
        {
            showmobileSubTitle && mobileSubTitle === 'Body' && mobileSubTitle === Text  && (
                <ul className={`pl-[5%] p-4`}>
                {
                    bodyItems.map((about, index) => (
                        <li key={index} className='text-[12px] p-4 upward-motion'>
                            <Link to="#" className='text-[12px]'>{about}</Link>
                        </li>
                    ))
                }
            </ul>   
            )
        }
        {
            showmobileSubTitle && mobileSubTitle === 'Face' && mobileSubTitle === Text  && (
                <ul className={`pl-[5%] p-4`}>
                {
                    faceItems.map((about, index) => (
                        <li key={index} className='text-[12px] p-4 upward-motion'>
                            <Link to="#" className='text-[12px]'>{about}</Link>
                        </li>
                    ))
                }
            </ul>   
            )
        }
        {
            showmobileSubTitle && mobileSubTitle === 'Skin Concerns' && mobileSubTitle === Text  && (
                <ul className={`pl-[5%] p-4`}>
                {
                    skinsItems.map((about, index) => (
                        <li key={index} className='p-4 text-[12px] upward-motion'>
                            <Link to="#" className='text-[12px]'>{about}</Link>
                        </li>
                    ))
                }
            </ul>   
            )
        }
        {
            showmobileSubTitle && mobileSubTitle === 'Ingredients' && mobileSubTitle === Text  && (
                <ul className={`pl-[5%] p-4`}>
                {
                    IngredientItems.map((about, index) => (
                        <li key={index} className='p-4 text-[12px] upward-motion'>
                            <Link to="#" className='text-[12px]'>{about}</Link>
                        </li>
                    ))
                }
            </ul>   
            )
        }

       
    </div>
  )
}

export default MobileNavList
