import React from 'react'

import { GoPrimitiveDot  } from 'react-icons/go'

import { Button } from '../components'
import { earningData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'

const Ecommerce = () => {

  const {currentColor} = useStateContext();

  return (
    <div className='flex-1 dark:text-white justify-between'>
      Soon

    </div>
  )
}

export default Ecommerce