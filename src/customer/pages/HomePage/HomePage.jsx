import React from 'react'
import MainCarousel from '../../component/HomeCarousel/MainCarousel'
import HomeSectionCarosel from '../../component/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../data/mens_kurta'

const HomePage = () => {
  return (
    <>
        <div>
            <MainCarousel />
        </div>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={mens_kurta} sectionName="Men's Kurta" />
            <HomeSectionCarosel data={mens_kurta} sectionName="Men's Suits" />
            <HomeSectionCarosel data={mens_kurta} sectionName="Men's Shirt" />
            <HomeSectionCarosel data={mens_kurta} sectionName="Women's Saree"/>
            <HomeSectionCarosel data={mens_kurta} sectionName="Women's Dress" />
        </div>
    </>
  )
}

export default HomePage
