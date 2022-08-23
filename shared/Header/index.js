import Image from "next/image"
import logo from '../../assets/logo.png'

function HeaderWrapper(props) {
  return (
    <div className=" container mx-auto h-14 mb-4">
      <div className="header__container flex justify-between" >
         <div ><Image width={`${props.img?props.img*1.7:117} px`} height={`${props.img?props.img:70} px`} src={logo}  alt='Logo'/></div>
        <div className="flex mr-4  justify-around" style={{gap:'2vw'}}>{props.children} </div>
      </div>
      
    </div>
  )
}

export default HeaderWrapper