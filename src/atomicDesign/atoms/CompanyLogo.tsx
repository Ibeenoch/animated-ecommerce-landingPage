import '../../index.css'

interface Props {
    onClick: () => void
}

const CompanyLogo = ({ onClick }: Props) => {
  return (
    <div className='font-semibold' onClick={onClick}>
        <h2 className='leading-6 text-3xl lora text-[#8d8d8d]'>FEELAM</h2>
    </div>
  )
}

export default CompanyLogo
