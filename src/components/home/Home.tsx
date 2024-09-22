import { Link } from 'react-router-dom';
import '../../index.css';
import HomeBanner from '../../atomicDesign/molecules/HomeBanner';
import NavBar from '../../atomicDesign/organism/navbar/NavBar';
import authorizedImg1 from '../../assets/images/skincarebanner1.png'
import authorizedImg2 from '../../assets/images/skincarebanner2.png'
import authorizedImg3 from '../../assets/images/skincarebanner3.png';
import collectionAsianBrands from '../../assets/images/collection-asian-brand-big.jpg';
import collectionBatheBody from '../../assets/images/collection-bathe-body-big.jpg';
import collectionTreatment from '../../assets/images/collection-treatment-big.jpg';
import collectionSunscreen from '../../assets/images/collection-sunscreens-big.jpg';
import featureimg1 from '../../assets/images/feature-azelaic.png';
import featureimg2 from '../../assets/images/feature-kab-I-glow.png';
import featureimg3 from '../../assets/images/feature-skeenlogic.jpg';
import featureimg4 from '../../assets/images/WhatsApp-Image-at-f-e-f-b-600x600.jpg';
import backInStock1 from '../../assets/images/backinstock-Be-The-Skin-BHA-Dark-Spot-ZERO-Cream-35ml.jpg';
import backInStock2 from '../../assets/images/backinstock-CERAVE-SA-CLEANSER.jpg';
import backInStock3 from '../../assets/images/backinstock-La-Roche-Posay-ANTHELIOS-UVMUNE-400-INVISIBLE-FLUID-SPF50-SUN-CREAM-FOR-SENSITIVE-SKIN-50ML-600x600.jpeg';
import backInStock4 from '../../assets/images/backinstock-advance-clinical-vitamin-c1.jpg';
import backInStock5 from '../../assets/images/backinstock-advance-clinical-vitamin-c2.jpg';
import backInStock6 from '../../assets/images/backinstock-bioderma-atoderm-gentle.jpg';
import backInStock7 from '../../assets/images/backinstock-carave-facial-moisturizing-lotion.jpg';
import backInStock8 from '../../assets/images/backinstock-cerave-foaming-cleaner1.jpg';
import backInStock9 from '../../assets/images/backinstock-cerave-foaming-cleaner2.jpg';
import backInStock10 from '../../assets/images/backinstock-cerave-hydrating-cleanser.jpg';
import backInStock11 from '../../assets/images/backinstock-cerave-hydrating-foaming-oil.jpg';
import backInStock12 from '../../assets/images/backinstock-cerave-hydrating.jpg';
import backInStock13 from '../../assets/images/backinstock-cerave-moisturing-lotion-dry.jpg';
import backInStock14 from '../../assets/images/backinstock-cerave-moisturising-cream-for-dry-to-very-dry-skin-340g_regular_62a5be25e2cdc-600x600-2.jpg';
import backInStock15 from '../../assets/images/backinstock-cerave-resurface.jpg';
import newArrival1 from '../../assets/images/new-arrival-amlactin-daily-nourish-lotion.jpg';
import newArrival2 from '../../assets/images/newArrival-Dr-teal-glow.png';
import newArrival3 from '../../assets/images/newArrival-Nineless-rice-and-txa-toner-optimized.webp';
import newArrival4 from '../../assets/images/newArrival-TS-Hyaluronic-Acid-S-600x600.png';
import newArrival5 from '../../assets/images/newArrival-TS-Niacinamide-S-600x600.png';
import newArrival6 from '../../assets/images/newArrival-bioderma-sensibio.jpg';
import newArrival7 from '../../assets/images/newArrival-dr-teals-prebiotic-lemon-balm-lotion-x.jpg';
import newArrival8 from '../../assets/images/newArrival-nineles-mela-pro-1.jpg';
import newArrival9 from '../../assets/images/newArrival-nineless-a-control-heartleaf-bha-foam-cleanser-e1723732013728-500x500.png';
import bestSeller1 from '../../assets/images/bestSelling-Good-Molecules-Discoloration-Correcting-Serum.jpg';
import bestSeller2 from '../../assets/images/bestselling-Bright-clear-cream-Graphics-Assets-01.webp';
import bestSeller3 from '../../assets/images/bestselling-Good-Molecules-Niacinamide-Serum.jpg';
import bestSeller4 from '../../assets/images/bestselling-dr-teals-vitamin-c-body-lotion.jpg';
import bestSeller5 from '../../assets/images/bestselling-jumiso.jpg';
import bestSeller6 from '../../assets/images/bestselling-medix5.5-vitamin-C.jpg';
import bestSeller7 from '../../assets/images/bestselling-missha-all-around.jpeg';
import bestSeller8 from '../../assets/images/bestselling-simple-kindto-skin-moisturizing.jpg';
import bestSeller9 from '../../assets/images/bestselling-skin-aqua-uv-super.jpg';
import bestSeller10 from '../../assets/images/bestselling-tiam-vita-b3-new-600x600.jpg';
import bestSeller11 from '../../assets/images/bestSelling-Good-Molecules-Discoloration-Correcting-Serum.jpg';
import bestSeller12 from '../../assets/images/backinstock-La-Roche-Posay-ANTHELIOS-UVMUNE-400-INVISIBLE-FLUID-SPF50-SUN-CREAM-FOR-SENSITIVE-SKIN-50ML-600x600.jpeg';

import {ReactComponent as Heart} from '../../assets/svg/heart-alt-svgrepo-com.svg';
import  cleanerImg  from '../../assets/images/home-bg-cleanser.jpg';
import  foamImg  from '../../assets/images/collection-asian-brand.jpg';
import  consultantgif  from '../../assets/gif/giphy.gif';
import {ReactComponent as Plus} from '../../assets/svg/plus-svgrepo-com.svg';
import {ReactComponent as Minus} from '../../assets/svg/minus-svgrepo-com.svg';
import { useEffect, useState } from 'react';
import HeaderTitle from '../../atomicDesign/atoms/HeaderTitle';
import ViewMoreBtn from '../../atomicDesign/atoms/ViewMoreBtn';
import ImgTitleAndBtn from '../../atomicDesign/molecules/ImgTitleAndBtn';


interface productProps {
    img: any,
    caption: string,
    price: string,
    reviews: number,
}
const Home = () => {
  // const [ authorizedBannerImage, setAuthorizedBannerImage ] = useState<string>('');
  const [authorizedCount, setAuthorizedCount ] = useState<number>(0);
  const [featureCount, setFeatureCount ] = useState<number>(0);
  const [newArrivalCount, setNewArrivalCount ] = useState<number>(0);
  const [mobileNewArrivalCount, setMobileNewArrivalCount ] = useState<number>(0);
  const [bestSellerCount, setBestSellerCount ] = useState<number>(0);
  const [mobileBestSellerCount, setMobileBestSellerCount ] = useState<number>(0);
  const [backInStockCount, setBackInStockCount ] = useState<number>(0);
  const [mobilebackInStockCount, setMobileBackInStockCount ] = useState<number>(0);
  const [mobilefeatureCount, setMobileFeatureCount ] = useState<number>(0);
  const [backInStockIcon, setBackInStockIcon] = useState<Array<number>>([]);
  const [backInStockCaption, setBackInStockCaption] = useState<Array<string>>([]);
  const [featuredIcon, setFeaturedIcon] = useState<Array<number>>([]);
  const [featuredCaption, setFeaturedCaption] = useState<Array<string>>([]);
  const [newArrivalIcon, setNewArrivalIcon] = useState<Array<number>>([]);
  const [newArrivalCaption, setNewArrivalCaption] = useState<Array<string>>([]);
  const [bestSellerIcon, setBestSellerIcon] = useState<Array<number>>([]);
  const [bestSellerCaption, setBestSellerCaption] = useState<Array<string>>([]);
  const [animationClass, setAnimationClass] = useState<string>('carousel-enter');
  const authorizedSeller = [
    authorizedImg1, authorizedImg2, authorizedImg3
  ];
  const collections = [
    {
      image: collectionAsianBrands,
      title: 'ASIAN BRANDS'
    },
    {
      image: collectionBatheBody,
      title: 'BATH & BODY'
    },
    {
      image: collectionTreatment,
      title: 'TREATMENTS'
    },
    {
      image: collectionSunscreen,
      title: 'SUNSCREENS'
    },
  ];

  const featuresitems = [
   [ {
      img: featureimg1,
      caption: 'Kabazel – Azelaic Acid Gel 20% ( Alternative to EZANIC 20% )',
      price: '₦5,999',
      reviews: 2,
    },
    {
      img: featureimg2,
      caption: 'Kab-I-Glow Hydroquinone, Tretinoin & Fluocinolone Acetonide Topical Cream 15gm ( Alternative to TRILUMA )',
      price: '₦10,400',
      reviews: 0,
    },
    {
      img: featureimg3,
      caption: 'Skeenlogic AHA/BHA Gentle Deep Pore Cleanser 200ml/6.7fl oz',
      price: '₦10,500',
      reviews: 2,
    },
    {
      img: featureimg4,
      caption: 'Kab-I-Glow Hydroquinone, Tretinoin & Fluocinolone Acetonide Topical Cream 15gm ( Alternative to TRILUMA )',
      price: '₦10,400',
      reviews: 0,
    },
  ],
  [  {
      img: featureimg2,
      caption: 'Kab-I-Glow Hydroquinone, Tretinoin & Fluocinolone Acetonide Topical Cream 15gm ( Alternative to TRILUMA )',
      price: '₦10,400',
      reviews: 0,
    },
    {
      img: featureimg1,
      caption: 'Kabazel – Azelaic Acid Gel 20% ( Alternative to EZANIC 20% )',
      price: '₦5,999',
      reviews: 2,
    },
    {
      img: featureimg4,
      caption: 'Kab-I-Glow Hydroquinone, Tretinoin & Fluocinolone Acetonide Topical Cream 15gm ( Alternative to TRILUMA )',
      price: '₦10,400',
      reviews: 0,
    },
    {
      img: featureimg3,
      caption: 'Skeenlogic AHA/BHA Gentle Deep Pore Cleanser 200ml/6.7fl oz',
      price: '₦10,500',
      reviews: 2,
    },
  ]
  ]

  const mobilefeaturesitems = [
   [ {
      img: featureimg1,
      caption: 'Kabazel – Azelaic Acid Gel 20% ( Alternative to EZANIC 20% )',
      price: '₦5,999',
      reviews: 2,
    },
    {
      img: featureimg2,
      caption: 'Kab-I-Glow Hydroquinone, Tretinoin & Fluocinolone Acetonide Topical Cream 15gm ( Alternative to TRILUMA )',
      price: '₦10,400',
      reviews: 0,
    }, ],
   [ {
      img: featureimg3,
      caption: 'Skeenlogic AHA/BHA Gentle Deep Pore Cleanser 200ml/6.7fl oz',
      price: '₦10,500',
      reviews: 2,
    },
    {
      img: featureimg4,
      caption: 'Kab-I-Glow Hydroquinone, Tretinoin & Fluocinolone Acetonide Topical Cream 15gm ( Alternative to TRILUMA )',
      price: '₦10,400',
      reviews: 0,
    },
 ],
  [  {
      img: featureimg2,
      caption: 'Kab-I-Glow Hydroquinone, Tretinoin & Fluocinolone Acetonide Topical Cream 15gm ( Alternative to TRILUMA )',
      price: '₦10,400',
      reviews: 0,
    },
    {
      img: featureimg1,
      caption: 'Kabazel – Azelaic Acid Gel 20% ( Alternative to EZANIC 20% )',
      price: '₦5,999',
      reviews: 2,
    },],
   [ {
      img: featureimg4,
      caption: 'Kab-I-Glow Hydroquinone, Tretinoin & Fluocinolone Acetonide Topical Cream 15gm ( Alternative to TRILUMA )',
      price: '₦10,400',
      reviews: 0,
    },
    {
      img: featureimg3,
      caption: 'Skeenlogic AHA/BHA Gentle Deep Pore Cleanser 200ml/6.7fl oz',
      price: '₦10,500',
      reviews: 2,
    },
  ]
  ];

  const bestSelleritems = [
    [{
        img: bestSeller1,
        caption: 'Be The Skin BHA+ Dark Spot ZERO Cream 35ml',
        price: '₦8,800',
        reviews: 2,
      },
      {
        img: bestSeller2,
        caption: 'Cerave SA smoothing cleanser For Dry Rough Bumpy Skin 8fl oz 236ml',
        price: '₦12,800',
        reviews: 0,
      },
      {
        img: bestSeller3,
        caption: 'La Roche-Posay Anthelios UVmune 400 Invisible Fluid SPF50+ 50ml (1.7oz)',
        price: '₦21,400',
        reviews: 0,
      },
      {
        img: bestSeller4,
        caption: 'Advanced Clinicals Vitamin C Serum 1.75fl oz / 52ml',
        price: '₦12,500',
        reviews: 0,
      },
      {
        img: bestSeller5,
        caption: 'Advanced Clinicals Vitamin C Cream 16fl',
        price: '₦12,500',
        reviews: 0,
      }],
      [{
        img: bestSeller6,
        caption: 'Bioderma Atoderm Gentle Cleansing Gel 1Litre',
        price: '₦28,760',
        reviews: 3,
      },
      {
        img: bestSeller7,
        caption: 'Cerave Facial Moisturizing Lotion Am Spf 50 1.75floz',
        price: '₦18,000',
        reviews: 0,
      },
      {
        img: bestSeller8,
        caption: 'Cerave Moisturizing Cream For Dry To Very Dry Skin (12 Oz)',
        price: '₦17,000',
        reviews: 4,
      },
      {
        img: bestSeller9,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 16fl oz / 473ml',
        price: '₦16,300',
        reviews: 4,
      },
      {
        img: bestSeller10,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 8fl oz 236ml',
        price: '₦13,300',
        reviews: 2,
      }],
      [{
        img: bestSeller11,
        caption: 'Cerave Hydrating foaming Oil Cleanser 16oz',
        price: '₦19,500',
        reviews: 3,
      },
      {
        img: bestSeller12,
        caption: 'Cerave Hydrating Cleanser (16fl Oz/473ml)',
        price: '₦14,500',
        reviews: 0,
      },
      {
        img: bestSeller8,
        caption: 'Cerave Facial Moisturizing Lotion Pm 1.75Fl Oz',
        price: '₦18,000',
        reviews: 0,
      },
      {
        img: backInStock3,
        caption: 'Cerave Moisturizing Lotion Dry To Very Dry Skin 16Oz (473ml)',
        price: '₦17,700',
        reviews: 0,
      },
      {
        img: backInStock9,
        caption: 'Cerave Resurfacing Retinol Serum 30ml',
        price: '₦23,000',
        reviews: 3,
      },
    ]
  ];

  const mobileBestSelleritems = [
    [{
        img: bestSeller1,
        caption: 'Be The Skin BHA+ Dark Spot ZERO Cream 35ml',
        price: '₦8,800',
        reviews: 2,
      },
      {
        img: bestSeller2,
        caption: 'Cerave SA smoothing cleanser For Dry Rough Bumpy Skin 8fl oz 236ml',
        price: '₦12,800',
        reviews: 0,
      }],
     [{
        img: bestSeller3,
        caption: 'La Roche-Posay Anthelios UVmune 400 Invisible Fluid SPF50+ 50ml (1.7oz)',
        price: '₦21,400',
        reviews: 0,
      },
      {
        img: bestSeller4,
        caption: 'Advanced Clinicals Vitamin C Serum 1.75fl oz / 52ml',
        price: '₦12,500',
        reviews: 0,
      }],
     [ {
        img: bestSeller5,
        caption: 'Advanced Clinicals Vitamin C Cream 16fl',
        price: '₦12,500',
        reviews: 0,
      },
      {
        img: bestSeller6,
        caption: 'Bioderma Atoderm Gentle Cleansing Gel 1Litre',
        price: '₦28,760',
        reviews: 3,
      },],
      [{
        img: bestSeller7,
        caption: 'Cerave Facial Moisturizing Lotion Am Spf 50 1.75floz',
        price: '₦18,000',
        reviews: 0,
      },
      {
        img: bestSeller8,
        caption: 'Cerave Moisturizing Cream For Dry To Very Dry Skin (12 Oz)',
        price: '₦17,000',
        reviews: 4,
      },],
      [{
        img: bestSeller9,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 16fl oz / 473ml',
        price: '₦16,300',
        reviews: 4,
      },
      {
        img: bestSeller10,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 8fl oz 236ml',
        price: '₦13,300',
        reviews: 2,
      }],
    
  ];

  const backInstockItems = [
    [{
        img: backInStock1,
        caption: 'Be The Skin BHA+ Dark Spot ZERO Cream 35ml',
        price: '₦8,800',
        reviews: 2,
      },
      {
        img: backInStock2,
        caption: 'Cerave SA smoothing cleanser For Dry Rough Bumpy Skin 8fl oz 236ml',
        price: '₦12,800',
        reviews: 0,
      },
      {
        img: backInStock3,
        caption: 'La Roche-Posay Anthelios UVmune 400 Invisible Fluid SPF50+ 50ml (1.7oz)',
        price: '₦21,400',
        reviews: 0,
      },
      {
        img: backInStock4,
        caption: 'Advanced Clinicals Vitamin C Serum 1.75fl oz / 52ml',
        price: '₦12,500',
        reviews: 0,
      },
      {
        img: backInStock5,
        caption: 'Advanced Clinicals Vitamin C Cream 16fl',
        price: '₦12,500',
        reviews: 0,
      }],
      [{
        img: backInStock6,
        caption: 'Bioderma Atoderm Gentle Cleansing Gel 1Litre',
        price: '₦28,760',
        reviews: 3,
      },
      {
        img: backInStock7,
        caption: 'Cerave Facial Moisturizing Lotion Am Spf 50 1.75floz',
        price: '₦18,000',
        reviews: 0,
      },
      {
        img: backInStock8,
        caption: 'Cerave Moisturizing Cream For Dry To Very Dry Skin (12 Oz)',
        price: '₦17,000',
        reviews: 4,
      },
      {
        img: backInStock9,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 16fl oz / 473ml',
        price: '₦16,300',
        reviews: 4,
      },
      {
        img: backInStock10,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 8fl oz 236ml',
        price: '₦13,300',
        reviews: 2,
      }],
      [{
        img: backInStock11,
        caption: 'Cerave Hydrating foaming Oil Cleanser 16oz',
        price: '₦19,500',
        reviews: 3,
      },
      {
        img: backInStock12,
        caption: 'Cerave Hydrating Cleanser (16fl Oz/473ml)',
        price: '₦14,500',
        reviews: 0,
      },
      {
        img: backInStock13,
        caption: 'Cerave Facial Moisturizing Lotion Pm 1.75Fl Oz',
        price: '₦18,000',
        reviews: 0,
      },
      {
        img: backInStock14,
        caption: 'Cerave Moisturizing Lotion Dry To Very Dry Skin 16Oz (473ml)',
        price: '₦17,700',
        reviews: 0,
      },
      {
        img: backInStock15,
        caption: 'Cerave Resurfacing Retinol Serum 30ml',
        price: '₦23,000',
        reviews: 3,
      },
    ]
  ];

  
  const newArrivalsItems = [
    [{
        img: newArrival1,
        caption: 'Be The Skin BHA+ Dark Spot ZERO Cream 35ml',
        price: '₦8,800',
        reviews: 2,
      },
      {
        img: newArrival2,
        caption: 'Cerave SA smoothing cleanser For Dry Rough Bumpy Skin 8fl oz 236ml',
        price: '₦12,800',
        reviews: 0,
      },
      {
        img: newArrival3,
        caption: 'La Roche-Posay Anthelios UVmune 400 Invisible Fluid SPF50+ 50ml (1.7oz)',
        price: '₦21,400',
        reviews: 0,
      },
      {
        img: newArrival4,
        caption: 'Advanced Clinicals Vitamin C Serum 1.75fl oz / 52ml',
        price: '₦12,500',
        reviews: 0,
      },
      {
        img: newArrival5,
        caption: 'Advanced Clinicals Vitamin C Cream 16fl',
        price: '₦12,500',
        reviews: 0,
      }],
      [{
        img: newArrival6,
        caption: 'Bioderma Atoderm Gentle Cleansing Gel 1Litre',
        price: '₦28,760',
        reviews: 3,
      },
      {
        img: newArrival7,
        caption: 'Cerave Facial Moisturizing Lotion Am Spf 50 1.75floz',
        price: '₦18,000',
        reviews: 0,
      },
      {
        img: newArrival8,
        caption: 'Cerave Moisturizing Cream For Dry To Very Dry Skin (12 Oz)',
        price: '₦17,000',
        reviews: 4,
      },
      {
        img: newArrival9,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 16fl oz / 473ml',
        price: '₦16,300',
        reviews: 4,
      },
      {
        img: newArrival4,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 8fl oz 236ml',
        price: '₦13,300',
        reviews: 2,
      }],
    
  ];

  const mobileNewArrivalsItems = [
    [{
        img: newArrival1,
        caption: 'Be The Skin BHA+ Dark Spot ZERO Cream 35ml',
        price: '₦8,800',
        reviews: 2,
      },
      {
        img: newArrival2,
        caption: 'Cerave SA smoothing cleanser For Dry Rough Bumpy Skin 8fl oz 236ml',
        price: '₦12,800',
        reviews: 0,
      }],
     [{
        img: newArrival3,
        caption: 'La Roche-Posay Anthelios UVmune 400 Invisible Fluid SPF50+ 50ml (1.7oz)',
        price: '₦21,400',
        reviews: 0,
      },
      {
        img: newArrival4,
        caption: 'Advanced Clinicals Vitamin C Serum 1.75fl oz / 52ml',
        price: '₦12,500',
        reviews: 0,
      }],
     [ {
        img: newArrival5,
        caption: 'Advanced Clinicals Vitamin C Cream 16fl',
        price: '₦12,500',
        reviews: 0,
      },
      {
        img: newArrival6,
        caption: 'Bioderma Atoderm Gentle Cleansing Gel 1Litre',
        price: '₦28,760',
        reviews: 3,
      },],
      [{
        img: newArrival7,
        caption: 'Cerave Facial Moisturizing Lotion Am Spf 50 1.75floz',
        price: '₦18,000',
        reviews: 0,
      },
      {
        img: newArrival8,
        caption: 'Cerave Moisturizing Cream For Dry To Very Dry Skin (12 Oz)',
        price: '₦17,000',
        reviews: 4,
      },],
      [{
        img: newArrival9,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 16fl oz / 473ml',
        price: '₦16,300',
        reviews: 4,
      },
      {
        img: newArrival4,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 8fl oz 236ml',
        price: '₦13,300',
        reviews: 2,
      }],
    
  ];


  const mobileBackInStockItems = [
    [{
        img: backInStock1,
        caption: 'Be The Skin BHA+ Dark Spot ZERO Cream 35ml',
        price: '₦8,800',
        reviews: 2,
      },
      {
        img: backInStock2,
        caption: 'Cerave SA smoothing cleanser For Dry Rough Bumpy Skin 8fl oz 236ml',
        price: '₦12,800',
        reviews: 0,
      }],
    [ {
        img: backInStock3,
        caption: 'La Roche-Posay Anthelios UVmune 400 Invisible Fluid SPF50+ 50ml (1.7oz)',
        price: '₦21,400',
        reviews: 0,
      },
      {
        img: backInStock4,
        caption: 'Advanced Clinicals Vitamin C Serum 1.75fl oz / 52ml',
        price: '₦12,500',
        reviews: 0,
      }],
     [ {
        img: backInStock5,
        caption: 'Advanced Clinicals Vitamin C Cream 16fl',
        price: '₦12,500',
        reviews: 0,
      },
      {
        img: backInStock6,
        caption: 'Bioderma Atoderm Gentle Cleansing Gel 1Litre',
        price: '₦28,760',
        reviews: 3,
      }],
     [ {
        img: backInStock7,
        caption: 'Cerave Facial Moisturizing Lotion Am Spf 50 1.75floz',
        price: '₦18,000',
        reviews: 0,
      },
      {
        img: backInStock8,
        caption: 'Cerave Moisturizing Cream For Dry To Very Dry Skin (12 Oz)',
        price: '₦17,000',
        reviews: 4,
      }],
    [ {
        img: backInStock9,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 16fl oz / 473ml',
        price: '₦16,300',
        reviews: 4,
      },
      {
        img: backInStock10,
        caption: 'Cerave Foaming Cleanser For Normal To Oily Skin 8fl oz 236ml',
        price: '₦13,300',
        reviews: 2,
      }],
      [{
        img: backInStock11,
        caption: 'Cerave Hydrating foaming Oil Cleanser 16oz',
        price: '₦19,500',
        reviews: 3,
      },
      {
        img: backInStock12,
        caption: 'Cerave Hydrating Cleanser (16fl Oz/473ml)',
        price: '₦14,500',
        reviews: 0,
      }],
     [ {
        img: backInStock13,
        caption: 'Cerave Facial Moisturizing Lotion Pm 1.75Fl Oz',
        price: '₦18,000',
        reviews: 0,
      },
      {
        img: backInStock14,
        caption: 'Cerave Moisturizing Lotion Dry To Very Dry Skin 16Oz (473ml)',
        price: '₦17,700',
        reviews: 0,
      }],
      [{
        img: backInStock15,
        caption: 'Cerave Resurfacing Retinol Serum 30ml',
        price: '₦23,000',
        reviews: 3,
      },
      {
        img: backInStock6,
        caption: 'Bioderma Atoderm Gentle Cleansing Gel 1Litre',
        price: '₦28,760',
        reviews: 3,
      }]
  ];

  useEffect(() => {
    let timeID: ReturnType<typeof setTimeout>;
    const newArrivalInterval: ReturnType<typeof setInterval> = setInterval(() => {
      setAnimationClass('carousel-exit')
      requestAnimationFrame(() => {
      timeID =  setTimeout(() => {
          setNewArrivalCount((prev) =>
          {
          
            const increaseNum = (prev + 1) % newArrivalsItems.length;
            return increaseNum;
          }
          )
          setAnimationClass('carousel-enter')
        }, 500)     
      })
    }, 5000);

    return () => {
      clearInterval(newArrivalInterval)
      clearTimeout(timeID)
    }
  }, [])

  useEffect(() => {
    let timeID: ReturnType<typeof setTimeout>;
    const bestSellerInterval: ReturnType<typeof setInterval> = setInterval(() => {
      setAnimationClass('carousel-exit')
      requestAnimationFrame(() => {
      timeID =  setTimeout(() => {
          setBestSellerCount((prev) =>
          {
          
            const increaseNum = (prev + 1) % bestSelleritems.length;
            return increaseNum;
          }
          )
          setAnimationClass('carousel-enter')
        }, 500)     
      })
    }, 5000);

    return () => {
      clearInterval(bestSellerInterval)
      clearTimeout(timeID)
    }
  }, [])

  useEffect(() => {
    let timeID: ReturnType<typeof setTimeout>;
    const backInStockInterval: ReturnType<typeof setInterval> = setInterval(() => {
      setAnimationClass('carousel-exit')
      requestAnimationFrame(() => {
      timeID =  setTimeout(() => {
          setBackInStockCount((prev) =>
          {
          
            const increaseNum = (prev + 1) % backInstockItems.length;
            console.log('backinstock  ', increaseNum)
            return increaseNum;
          }
          )
          setAnimationClass('carousel-enter')
        }, 500)     
      })
    }, 5000);

    return () => {
      clearInterval(backInStockInterval)
      clearTimeout(timeID)
    }
  }, [])

  useEffect(() => {
    let timeID: ReturnType<typeof setTimeout>;
    const mobileBackInStockInterval: ReturnType<typeof setInterval> = setInterval(() => {
      setAnimationClass('carousel-exit')

      requestAnimationFrame(() => {
       timeID = setTimeout(() => {
          setMobileBackInStockCount((prev) => {
            const increaseNum = (prev + 1) % mobileBackInStockItems.length;
            console.log('mobilebackinstock  ', increaseNum)
            return increaseNum;
          })
          setAnimationClass('carousel-enter')
        }, 500)  
      })

    }, 5000);

    return () => {
      clearInterval(mobileBackInStockInterval)
      clearTimeout(timeID)
    }
  }, [])

  useEffect(() => {
    let timeID: ReturnType<typeof setTimeout>;
    const mobileFeatureInterval: ReturnType<typeof setInterval> = setInterval(() => {
      setAnimationClass('carousel-exit')

      requestAnimationFrame(() => {
      timeID =  setTimeout(() => {
          setMobileFeatureCount((prev) => {
            const increaseNum = (prev + 1) % mobilefeaturesitems.length;
            console.log('increaseNum  ', increaseNum)
            return increaseNum;
          })
          setAnimationClass('carousel-enter')
        }, 500)  
      })

    }, 5000);

    return () => {
      clearInterval(mobileFeatureInterval)
      clearTimeout(timeID)
    }
  }, [])

  useEffect(() => {
    let timeID: ReturnType<typeof setTimeout>;
    const featureInterval: ReturnType<typeof setInterval> = setInterval(() => {
      setAnimationClass('carousel-exit')

      requestAnimationFrame(() => {
       timeID = setTimeout(() => {
          setFeatureCount((prev) => {
            const increaseNum = (prev + 1) % featuresitems.length;
            console.log('increaseNum  ', increaseNum)
            return increaseNum;
          })
          setAnimationClass('carousel-enter')
        }, 500)
            
      })

    }, 5000);

    return () => {
      clearInterval(featureInterval)
      clearTimeout(timeID)
  }
  }, [])

  useEffect(() => {
    let timeID: ReturnType<typeof setTimeout>;
    const authorizedImgInterval: ReturnType<typeof setInterval>  = setInterval(() => {
      setAnimationClass('carousel-exit')
      
      requestAnimationFrame(() => {
       timeID = setTimeout(() => {
          setAuthorizedCount((prev) => {
            const increaseNum = (prev + 1) % authorizedSeller.length;
            console.log('increaseNum  ', increaseNum)
            return increaseNum;
          })
          setAnimationClass('carousel-enter')
        }, 500)   
      })

    }, 5000);

    return () => {
      clearInterval(authorizedImgInterval)
      clearTimeout(timeID)
    }
  }, [])

  const handleLikeBackInStock = (item: productProps, index: number) => {
    
    if(backInStockCaption.includes(item.caption)){
      setBackInStockCaption((it) => it.filter((i => i !== item.caption) ))
      setBackInStockIcon((e) => e.filter((i => i !== index )))
    }else{
      setBackInStockCaption((i) => [...i, item.caption])
      setBackInStockIcon((e) => [...e, index])
    }
      
  }

  const handleLikeFeature = (item: productProps, index: number) => {
    
    if(featuredCaption.includes(item.caption)){
      setFeaturedCaption((it) => it.filter((i => i !== item.caption) ))
      setFeaturedIcon((e) => e.filter((i => i !== index )))
    }else{
      setFeaturedCaption((i) => [...i, item.caption])
      setFeaturedIcon((e) => [...e, index])
    }
      
  }

  const handleLikeNewArrival = (item: productProps, index: number) => {
    
    if(newArrivalCaption.includes(item.caption)){
      setNewArrivalCaption((it) => it.filter((i => i !== item.caption) ))
      setNewArrivalIcon((e) => e.filter((i => i !== index )))
    }else{
      setNewArrivalCaption((i) => [...i, item.caption])
      setNewArrivalIcon((e) => [...e, index])
    }
      
  }

  const handleLikeBestSeller = (item: productProps, index: number) => {
    
    if(bestSellerCaption.includes(item.caption)){
      setBestSellerCaption((it) => it.filter((i => i !== item.caption) ))
      setBestSellerIcon((e) => e.filter((i => i !== index )))
    }else{
      setBestSellerCaption((i) => [...i, item.caption])
      setBestSellerIcon((e) => [...e, index])
    }
      
  }

  return (
      <main>
        <section className='cursor-pointer'>
          <HomeBanner />
        </section>

        <article className='p-6 bg-[#fff3d0] border-t-[1px] sm:border-t-[2px] border-b-[1px] sm:border-b-[2px]  banner-font-family flex sm:gap-8 gap-2 items-center justify-center border-t-black border-b-black'>
          <h2 className='text-[15px]  sm:text-[22px] montserrat text-center leading-4 font-semibold'>JOIN TEEKA4 PLUS & BECOME A WHOLESALER </h2>
          <Link to='#'> <h2 className='sm:border-b-[2px] border-b-[1px] montserrat border-b-black pb-1 text-[15px] sm:text-[22px] text-center leading-4 font-semibold '>JOIN NOW</h2></Link>
        </article>

        <div className='w-full flex bg-[#fff3d0] relative'>
            <img className={`w-full h-[350px]  ${animationClass}`} src={authorizedSeller[authorizedCount]} alt='authorized reseller banner' />
            
            <div className='absolute bottom-[5%] left-[50%] flex gap-1 sm:gap-2 justify-center items-center overflow-hidden'>
              {
                authorizedSeller.map((img, index) => (
                  <div key={index} className={`p-1 bg-black ${authorizedCount === index ? 'bg-opacity-20' : 'bg-opacity-90'} rounded-full`}></div>
                ))
              }
              
            </div>
            <div className='animateupwardslider  libre-baskerville-regular flex flex-col gap-6 p-6'>
              <h1 className='text-3xl font-normal'>Authorized <br /> Resellers</h1>
              <ViewMoreBtn title='VIEW MORE' />
            </div>
        </div>

        <section className='px-2 sm:px-[10%]'>
          <HeaderTitle text='Our Collections' />
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 mx-auto  overflow-hidden'>
          {
            collections.map((item) => (
              <div className='flex flex-col gap-2'>
                <Link to='#' className='w-full' >
                  <img src={item.image} alt={item.title} className='w-full h-auto' />
                </Link>

                <button className='border border-black hover:bg-black hover:text-white flex justify-center p-1'>{item.title}</button>
              </div>
            ))
          }
          </div>
        </section>

          {/* featured  */}
        <section className='px-2'>
          <HeaderTitle text='Featured Items' />
          <div className={`sm:hidden grid grid-cols-2 gap-3 mx-auto ${animationClass}  overflow-hidden`}>
          {
            mobilefeaturesitems[mobilefeatureCount].map((item, index) => (
              <div key={index} className={`flex flex-col gap-2 bg-white p-2 gulzar-regular ${index === 1 ? 'carousel-delay' : ''}`} style={{
                // animationDelay: index === 1 ? '1s' : '0s'
                }}>
                <Link to='#' className='w-full relative' >
                  <img src={item.img} alt={item.caption} className='w-full h-auto' />
                  <span className='absolute top-2 right-2'>
                  <Heart className='w-6 h-6' onClick={() =>handleLikeFeature(item, index)} fill={`${featuredIcon.includes(index) && featuredCaption.includes(item.caption) ? 'red' : "white"}`} stroke={`${featuredIcon.includes(index) && featuredCaption.includes(item.caption) ? 'red' : "gray"}`} />
                  </span>
                </Link>
                <article>
                  <p className='p-2 text-left  text-[11px] text-gray-600'>{item.caption}</p>
                  <span className='p-2 text-left gulzar-regulars text-[9px]'>{item.price}</span>
                </article>

                <div className='flex gap-3 items-center'>
                  <div className='border border-gray-400 flex items-center gap-2 p-1 rounded-md '>
                    <Minus className='w-2 h-2' aria-hidden />
                    <span className='text-[8px]'>1</span>
                    <Plus className='w-2 h-2' aria-hidden />
                  </div>
                  
                  <div className='smooth-border'>
                    <p className='text-[10px] text-gray-600'>ADD TO CART</p>
                  </div>
                </div>
              </div>
            ))
          }
          </div>

          <div className={`hidden sm:grid sm:grid-cols-4 gap-3 mx-auto ${animationClass}  overflow-hidden`}>
          {
            featuresitems[featureCount].map((item, index) => (
              <div key={index} className={`flex flex-col gap-2 bg-white p-2 gulzar-regular ${index === 1 ? 'carousel-delay' : ''}`} style={{
                // animationDelay: index === 1 ? '1s' : '0s'
                }}>
                <Link to='#' className='w-full relative' >
                  <img src={item.img} alt={item.caption} className='w-full h-auto' />
                  <span className='absolute top-3 right-3'>
                  <Heart className='w-6 h-6' onClick={() =>handleLikeFeature(item, index)} fill={`${featuredIcon.includes(index) && featuredCaption.includes(item.caption) ? 'red' : "white"}`} stroke={`${featuredIcon.includes(index) && featuredCaption.includes(item.caption) ? 'red' : "gray"}`} />
                  </span>
                </Link>
                <article>
                  <p className='p-2 text-left  text-[15px] text-gray-600'>{item.caption}</p>
                  <span className='p-2 text-left gulzar-regulars text-[10px]'>{item.price}</span>
                </article>

                <div className='flex gap-3 items-center'>
                  <div className='border border-gray-400 flex items-center gap-2 p-1 rounded-md '>
                    <Minus className='w-3 h-3' aria-hidden />
                    <span className='text-[12px]'>1</span>
                    <Plus className='w-3 h-3' aria-hidden />
                  </div>
                  
                  <div className='smooth-border'>
                    <p className='text-[14px] text-gray-600'>ADD TO CART</p>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </section>

          {/* back in stock  */}
        <section className='px-2'>
          <HeaderTitle text='BACK IN STOCK' />
          <div className={`sm:hidden grid grid-cols-2 gap-3 mx-auto ${animationClass}  overflow-hidden`}>
          {
            mobileBackInStockItems[mobilebackInStockCount].map((item, index) => (
              <div key={index} className={`flex flex-col gap-2 bg-white p-2 gulzar-regular ${index === 1 ? 'carousel-delay' : ''}`} style={{
                // animationDelay: index === 1 ? '1s' : '0s'
                }}>
                <Link to='#' className='w-full relative' >
                  <img src={item.img} alt={item.caption} className='w-full h-auto' />
                  <span className='absolute top-2 right-2'>
                  <Heart className='w-6 h-6' onClick={() =>handleLikeBackInStock(item, index)} fill={`${backInStockIcon.includes(index) && backInStockCaption.includes(item.caption) ? 'red' : "white"}`} stroke={`${backInStockIcon.includes(index) && backInStockCaption.includes(item.caption) ? 'red' : "gray"}`} />
                  </span>
                </Link>
                <article>
                  <p className='p-2 text-left  text-[11px] text-gray-600'>{item.caption}</p>
                  <span className='p-2 text-left gulzar-regulars text-[9px]'>{item.price}</span>
                </article>

                <div className='flex gap-3 items-center'>
                  <div className='border border-gray-400 flex items-center gap-2 p-1 rounded-md '>
                    <Minus className='w-2 h-2' aria-hidden />
                    <span className='text-[8px]'>1</span>
                    <Plus className='w-2 h-2' aria-hidden />
                  </div>
                  
                  <div className='smooth-border'>
                    <p className='text-[10px] text-gray-600'>ADD TO CART</p>
                  </div>
                </div>
              </div>
            ))
          }
          </div>

          <div className={`hidden sm:grid sm:grid-cols-5 gap-3 mx-auto ${animationClass}  overflow-hidden`}>
          {
            backInstockItems[backInStockCount].map((item, index) => (
              <div key={index} className={`flex flex-col gap-2 bg-white p-2 gulzar-regular ${index === 1 ? 'carousel-delay' : ''}`} style={{
                // animationDelay: index === 1 ? '1s' : '0s'
                }}>
                <Link to='#' className='w-full relative' >
                  <img src={item.img} alt={item.caption} className='w-full h-auto' />
                  <span className='absolute top-3 right-3'>
                    <Heart className='w-6 h-6' onClick={() =>handleLikeBackInStock(item, index)} fill={`${backInStockIcon.includes(index) && backInStockCaption.includes(item.caption) ? 'red' : "white"}`} stroke={`${backInStockIcon.includes(index) && backInStockCaption.includes(item.caption) ? 'red' : "gray"}`} />
                  </span>
                </Link>
                <article>
                  <p className='p-2 text-left  text-[15px] text-gray-600'>{item.caption}</p>
                  <span className='p-2 text-left gulzar-regulars text-[10px]'>{item.price}</span>
                </article>

                <div className='flex gap-3 items-center'>
                  <div className='border border-gray-400 flex items-center gap-2 p-1 rounded-md '>
                    <Minus className='w-3 h-3' aria-hidden />
                    <span className='text-[12px]'>1</span>
                    <Plus className='w-3 h-3' aria-hidden />
                  </div>
                  
                  <div className='smooth-border'>
                    <p className='text-[14px] text-gray-600'>ADD TO CART</p>
                  </div>
                </div>
              </div>
            ))
          }
          </div> 
        </section>

          <div className='p-8 flex items-center justify-center'>
            <ViewMoreBtn title='VIEW MORE' />
          </div>

          
          {/* new arrival  */}
        <section className='px-2 my-4'>
          <HeaderTitle text='NEW ARRIVAL' />
          <div className={`sm:hidden grid grid-cols-2 gap-3 mx-auto ${animationClass}  overflow-hidden`}>
          {
            mobileNewArrivalsItems[mobileNewArrivalCount].map((item, index) => (
              <div key={index} className={`flex flex-col gap-2 bg-white p-2 gulzar-regular ${index === 1 ? 'carousel-delay' : ''}`} style={{
                }}>
                <Link to='#' className='w-full relative' >
                  <img src={item.img} alt={item.caption} className='w-full h-auto' />
                  <span className='absolute top-2 right-2'>
                  <Heart className='w-6 h-6' onClick={() =>handleLikeNewArrival(item, index)} fill={`${newArrivalIcon.includes(index) && newArrivalCaption.includes(item.caption) ? 'red' : "white"}`} stroke={`${newArrivalIcon.includes(index) && newArrivalCaption.includes(item.caption) ? 'red' : "gray"}`} />
                  </span>
                </Link>
                <article>
                  <p className='p-2 text-left  text-[11px] text-gray-600'>{item.caption}</p>
                  <span className='p-2 text-left gulzar-regulars text-[9px]'>{item.price}</span>
                </article>

                <div className='flex gap-3 items-center'>
                  <div className='border border-gray-400 flex items-center gap-2 p-1 rounded-md '>
                    <Minus className='w-2 h-2' aria-hidden />
                    <span className='text-[8px]'>1</span>
                    <Plus className='w-2 h-2' aria-hidden />
                  </div>
                  
                  <div className='smooth-border'>
                    <p className='text-[10px] text-gray-600'>ADD TO CART</p>
                  </div>
                </div>
              </div>
            ))
          }
          </div>

          <div className={`hidden sm:grid sm:grid-cols-5 gap-3 mx-auto ${animationClass}  overflow-hidden`}>
          {
            newArrivalsItems[newArrivalCount].map((item, index) => (
              <div key={index} className={`flex flex-col gap-2 bg-white p-2 gulzar-regular ${index === 1 ? 'carousel-delay' : ''}`} style={{
                // animationDelay: index === 1 ? '1s' : '0s'
                }}>
                <Link to='#' className='w-full relative' >
                  <img src={item.img} alt={item.caption} className='w-full h-auto' />
                  <span className='absolute top-3 right-3'>
                  <Heart className='w-6 h-6' onClick={() =>handleLikeNewArrival(item, index)} fill={`${newArrivalIcon.includes(index) && newArrivalCaption.includes(item.caption) ? 'red' : "white"}`} stroke={`${newArrivalIcon.includes(index) && newArrivalCaption.includes(item.caption) ? 'red' : "gray"}`} />
                  </span>
                </Link>
                <article>
                  <p className='p-2 text-left  text-[15px] text-gray-600'>{item.caption}</p>
                  <span className='p-2 text-left gulzar-regulars text-[10px]'>{item.price}</span>
                </article>

                <div className='flex gap-3 items-center'>
                  <div className='border border-gray-400 flex items-center gap-2 p-1 rounded-md '>
                    <Minus className='w-3 h-3' aria-hidden />
                    <span className='text-[12px]'>1</span>
                    <Plus className='w-3 h-3' aria-hidden />
                  </div>
                  
                  <div className='smooth-border'>
                    <p className='text-[14px] text-gray-600'>ADD TO CART</p>
                  </div>
                </div>
              </div>
            ))
          }
          </div> 
        </section>

        <div className='p-8 flex items-center justify-center'>
            <ViewMoreBtn title='VIEW MORE' />
          </div>

          <section className='flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-6 p-6 sm:py-4 sm:px-[10%]'>
          <div className='relative rounded-3xl overflow-hidden'>
            <img src={cleanerImg} alt="cleanser" className='w-full h-[300px] sm:h-[550px] img-center' />
            <div className='absolute bottom-7 left-7'>
              <ImgTitleAndBtn text='Cleansers' title='SHOP NOW' />
            </div>
          </div>

          <div className='relative rounded-3xl overflow-hidden'>
            <img src={foamImg} alt="cleanser" className='w-full h-[300px] sm:h-[550px] img-center' />
            <div className='absolute bottom-7 right-7'>
              <ImgTitleAndBtn text='Toners' title='SHOP NOW' />
            </div>
          </div>
          </section>


          {/* img gif */}
          
          <div className='sm:px-[10%] relative flex justify-center'>
            <img src={consultantgif} alt="consultant gif image" className='w-full h-[450px] img-center' />
            <div className='absolute bottom-5'>
              <div className='mx-auto'>
                <h1 className='text-[25px] sm:text-[73px] leading-[1.2rem]  text-white font-semibold libre text-center'>Talk To An Experienced </h1>
                <h1 className='text-[25px] sm:text-[73px]  leading-xs text-white font-semibold libre text-center'> Specialist Anytime, Anywhere</h1>
                <div className='flex justify-center border-[2px] border-[2px]-white rounded-md w-max mx-auto'>
                <button className='text-md text-white font-semibold px-6 py-2'>Book Consultation</button>
                </div>
              </div>
            </div>
          </div>

          {/* best seller  */}
        <section className='px-2'>
          <HeaderTitle text='BEST SELLER' />
          <div className={`sm:hidden grid grid-cols-2 gap-3 mx-auto ${animationClass}  overflow-hidden`}>
          {
            mobileBackInStockItems[mobileBestSellerCount].map((item, index) => (
              <div key={index} className={`flex flex-col gap-2 bg-white p-2 gulzar-regular ${index === 1 ? 'carousel-delay' : ''}`} style={{
                // animationDelay: index === 1 ? '1s' : '0s'
                }}>
                <Link to='#' className='w-full relative' >
                  <img src={item.img} alt={item.caption} className='w-full h-auto' />
                  <span className='absolute top-2 right-2'>
                  <Heart className='w-6 h-6' onClick={() =>handleLikeBestSeller(item, index)} fill={`${bestSellerIcon.includes(index) && bestSellerCaption.includes(item.caption) ? 'red' : "white"}`} stroke={`${bestSellerIcon.includes(index) && bestSellerCaption.includes(item.caption) ? 'red' : "gray"}`} />
                  </span>
                </Link>
                <article>
                  <p className='p-2 text-left  text-[11px] text-gray-600'>{item.caption}</p>
                  <span className='p-2 text-left gulzar-regulars text-[9px]'>{item.price}</span>
                </article>

                <div className='flex gap-3 items-center'>
                  <div className='border border-gray-400 flex items-center gap-2 p-1 rounded-md '>
                    <Minus className='w-2 h-2' aria-hidden />
                    <span className='text-[8px]'>1</span>
                    <Plus className='w-2 h-2' aria-hidden />
                  </div>
                  
                  <div className='smooth-border'>
                    <p className='text-[10px] text-gray-600'>ADD TO CART</p>
                  </div>
                </div>
              </div>
            ))
          }
          </div>

          <div className={`hidden sm:grid sm:grid-cols-5 gap-3 mx-auto ${animationClass}  overflow-hidden`}>
          {
            bestSelleritems[bestSellerCount].map((item, index) => (
              <div key={index} className={`flex flex-col gap-2 bg-white p-2 gulzar-regular ${index === 1 ? 'carousel-delay' : ''}`} style={{
                // animationDelay: index === 1 ? '1s' : '0s'
                }}>
                <Link to='#' className='w-full relative' >
                  <img src={item.img} alt={item.caption} className='w-full h-auto' />
                  <span className='absolute top-3 right-3'>
                  <Heart className='w-6 h-6' onClick={() =>handleLikeBestSeller(item, index)} fill={`${bestSellerIcon.includes(index) && bestSellerCaption.includes(item.caption) ? 'red' : "white"}`} stroke={`${bestSellerIcon.includes(index) && bestSellerCaption.includes(item.caption) ? 'red' : "gray"}`} />
                  </span>
                </Link>
                <article>
                  <p className='p-2 text-left  text-[15px] text-gray-600'>{item.caption}</p>
                  <span className='p-2 text-left gulzar-regulars text-[10px]'>{item.price}</span>
                </article>

                <div className='flex gap-3 items-center'>
                  <div className='border border-gray-400 flex items-center gap-2 p-1 rounded-md '>
                    <Minus className='w-3 h-3' aria-hidden />
                    <span className='text-[12px]'>1</span>
                    <Plus className='w-3 h-3' aria-hidden />
                  </div>
                  
                  <div className='smooth-border'>
                    <p className='text-[14px] text-gray-600'>ADD TO CART</p>
                  </div>
                </div>
              </div>
            ))
          }
          </div> 

          <div className='p-8 flex items-center justify-center'>
            <ViewMoreBtn title='VIEW MORE' />
          </div>
        </section>

        
      </main>
  )
}

export default Home
