import LogoImage from '../images/logo.svg';
import Image from 'next/image';

export function Logomark(props) {
  return (
    <Image src={LogoImage}  alt="logo" width={32} height={32} />
   
  )
}

export function Logo(props) {
  return (
    <div className='flex space-x-1'>
      <Image src={LogoImage}  alt="logo" width={32} height={32} />
      <span className='text-xl'>CardPay</span>
    </div>
  )
}
