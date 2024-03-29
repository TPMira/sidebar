import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'



import { useStateContext } from '../context/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button type='button' onClick={customFunc} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
    <span style={{background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
      {icon}
  </button>
)

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();

  useEffect(()=> {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={ <AiOutlineMenu/> } />
      <div className='flex'>
        
      </div>
    </div>
  )
}

export default Navbar