import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonial = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        SlideToShow:3,


        Responsive:[
            {
                breakpoint:992,
                settings:{
                    SlideToShow:2,
                    SlideToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    SlideToShow:1,
                    SlideToScroll:1,
                    
                
            
            },
        },

        


        ]
    }













  return (
   <Slider   {...settings}>
    <div className="testimonial    py-4 px-m          ">
        <p>The Travel experience was just awesome,and Aloka ji and Aman ji from Uphoria Travels was very good at handling things and all . All the stay and Tempo Traveller provided by agency also well-behaved. A big thank to Uphoria Travels. The Kaziranga stay , Cherapunji stay and all the selection of sightseeing places are very good.</p>

        <div    className='d-flex  align-items-center    gap-4    mt-3' >
            <img src={ava01} alt=""    className='w-25  h-25    rounded-2 '  />
            <div>
                <h6  className='mb=0 mt-3'  >John Deo</h6>
                <p>Customer</p>
            </div>

        </div>

    </div>

    <div className="testimonial    py-4 px-m          ">
        <p>We had a wonderful trip to Vietnam and cambodia. It was organized very nicely by Asia authentic travels and coordinated by Rossie.All the tours and hotels were great. Cruise in Halong bay and Angyor wat temple.</p>

        <div    className='d-flex  align-items-center  gap-4   mt-3' >
            <img src={ava02} alt=""    className='w-25  h-25    rounded-2 '  />
            <div>
                <h6  className='mb=0 mt-3'  >Alexa</h6>
                <p>Customer</p>
            </div>

        </div>

    </div>



    <div className="testimonial    py-4 px-m          ">
        <p>Experience was good. Pro: Hotel locations was good. All travelling experience was good. (Transfer to places) Management was good. Cons:- Taxi Driver should have better english communication Breakfast was awful in all hotel.</p>

        <div    className='d-flex align-items-center gap-4  mt-3' >
            <img src={ava03} alt=""    className='w-25  h-25    rounded-2 '  />
            <div>
                <h6  className='mb=0 mt-3'  >Dravid</h6>
                <p>Customer</p>
            </div>

        </div>

    </div>


    
   </Slider>
  )
}

export default Testimonial