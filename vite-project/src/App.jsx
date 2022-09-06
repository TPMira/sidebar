import React, { useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders } from './pages';

import { useStateContext } from './context/ContextProvider';


import './App.css'

const App = () => {

    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
        <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
            <div className="fixed right-4 bottom-4" style={{zIndex: '1000' }}>
                <TooltipComponent content='Settings' position='Top'>
                    <button type='button' className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" onClick={() => setThemeSettings(true)} style={{background: currentColor, borderRadius: '50%'}}>
                        <FiSettings/>
                    </button>
                </TooltipComponent>
            </div>
            {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white shadow-drop-bottom swing-in-top-fwd transition-all ">
                    <Sidebar/>
                </div>
                
            ) : (
                <div className='w-0 bg-main-dark-bg'>
                    <Sidebar/>
                </div>
            )}
            <div className={ `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}` }>
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                    <Navbar/>
            </div>
            

            <div>
                { themeSettings && <ThemeSettings /> }
                <Routes>
                    {/* dashboard  */}
                    <Route path="/" element={(<Ecommerce />)} />
                    <Route path="/ecommerce" element={(<Ecommerce />)} />

                    {/* pages  */}
                    <Route path="/Roi" element={<Orders />} />
                    

                    
                </Routes>
            </div>
        </div>
    </div>
    </BrowserRouter>
    </div>
  )
}

export default App