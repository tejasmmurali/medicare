import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCard from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section>
        <div className='continer'>
            <div className='flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>

                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg}/>
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                    <img src={aboutCard}/>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud to be one of the nations Best.</h2>
                    <p className='text__para'>For 30 years in a row, People have recongnised us as one of the best hospitals in the Country.</p>
                    <p className='text__para mt-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Mattis aliquam faucibus purus in massa tempor. Venenatis tellus in metus vulputate. Ornare massa eget egestas purus.
                     At lectus urna duis convallis convallis tellus id interdum. Nisl tincidunt eget nullam non. Nunc mi ipsum faucibus vitae. </p>
                     <Link to='/'><button className='btn'>Learn more</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About