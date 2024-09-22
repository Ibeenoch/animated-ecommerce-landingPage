import BannerImage from '../../assets/images/home-banner.png'

const HomeBanner = () => {
  return (
    <div className={`w-full h-auto pt-[210px]`}>
      <img className='w-full h-auto' src={BannerImage} alt="Feelam Welcome Page Banner image" />
    </div>
  )
}

export default HomeBanner
