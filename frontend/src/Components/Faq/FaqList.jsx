import React from 'react'
import {faqs} from './../../assets/data/faqs.js'
import FaqItem from './FaqItem'

const FaqList = () => {
  return (
    <ul className='mt-[36px]'>
        {faqs.map((item,index) => <FaqItem item={item} key={index}/>)}
    </ul>
  )
}

export default FaqList