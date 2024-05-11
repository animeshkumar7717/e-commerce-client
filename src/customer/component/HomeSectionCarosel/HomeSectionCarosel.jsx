import React, { useState } from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { Button } from '@mui/material';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';

const HomeSectionCarosel = ({ data, sectionName }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(prevIndex => Math.max(0, prevIndex - 1));
    const slideNext = () => setActiveIndex(prevIndex => Math.min(prevIndex + 1, data.length - 1));

    const syncActiveIndex = ({ item }) => {
        const index = items.findIndex((element) => element.key === item.key);
        setActiveIndex(index);
      };
         

    const items = data.map((item, index) => <HomeSectionCard key={index} product={item} />);
  
    return (
        <div className='border'>
            <h2 className='text-2xl font-extra-bold text-gray py-5'>{sectionName}</h2>
            <div className='relative p-5 '>
            <AliceCarousel
                items={items}
                responsive={responsive}
                onSlideChanged={syncActiveIndex}
                activeIndex={activeIndex}
            />
            {activeIndex !== data.length - 1 && (
                <Button 
                    onClick={slideNext}
                    variant='contained' 
                    className='z-50 bg-white' 
                    sx={{
                        position: 'absolute', 
                        top:'8rem', 
                        right:'0rem', 
                        transform:"translateX(50%) rotate(90deg)", 
                        bgcolor: "white" 
                    }} 
                    arial-label='next'
                >
                    <ArrowBackIosNewTwoToneIcon 
                        sx={{transform: "rotate(90deg)", color:'black'}} 
                    />
                </Button>
            )}
            {activeIndex !== 0 && (
                <Button 
                    onClick={slidePrev}
                    variant='contained' 
                    className='z-50 bg-white' 
                    sx={{
                        position: 'absolute', 
                        top:'8rem', 
                        left:'0rem', 
                        transform:"translateX(-50%) rotate(90deg)", 
                        bgcolor: "white" 
                    }} 
                    arial-label='next'
                >
                    <ArrowBackIosNewTwoToneIcon sx={{transform: "rotate(-90deg)", color:'black'}} />
                </Button>
            )}
            </div>
        </div>
    );
};

export default HomeSectionCarosel;
