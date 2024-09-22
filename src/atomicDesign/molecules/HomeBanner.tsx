import BannerImage from '../../assets/images/home-banner.png'

const HomeBanner = () => {
  return (
    <div className={`w-full h-auto pt-[185px] `}>
      <img className='w-full h-[250px] sm:h-auto' src={BannerImage} alt="Feelam Welcome Page Banner image" />
    </div>
  )
}

export default HomeBanner
