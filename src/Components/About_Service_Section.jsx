import React from 'react'
import icon_1 from "../assets/icon-1.png"
import icon_2 from "../assets/icon-2.png"
import icon_3 from "../assets/icon-3.png"
import icon_4 from "../assets/icon-4.png"
import icon_5 from "../assets/icon-5.png"
import icon_6 from "../assets/icon-6.png"
const About_Service_Section = () => {
    const services = [
        {
            heading:"Best Prices & Offers",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            image:icon_1
            
        },
        {
            heading:"Wide Assortment",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            image:icon_2
            
        },
        {
            heading:"Free Delivery",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            image:icon_3
            
        },
        {
            heading:"Easy Returns",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            image:icon_4
            
        },
        {
            heading:"100% Sastisfaction",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            image:icon_5
            
        },
        {
            heading:"100% Sastisfaction",
            description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            image:icon_6
            
        },

    ]
  return (
    <div  className='w-[80%] mr-auto ml-auto mt-20'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-3xl font-medium'>What we Provide</h2>
            <div className='flex  justify-evenly items-center flex-wrap gap-4'>
                {
                    services.map((service , id)=>{
                        return(
                            <div
                            key={service.id}
                            className="flex flex-col justify-center items-center mt-10 max-w-[400px]"
                            >
                                <div className="bg-[#2F2E30] w-[160px] h-[160px] rounded-full flex  justify-center items-center">
                                    <div className="bg-black w-[120px] h-[120px] rounded-full flex  justify-center items-center">
                                    <img src={service.image} className="w-[80px] " />
                                    </div>
                                </div>
                                <h1 className=" text-xl font-bold break-words mt-2 mb-2">
                                    {service.heading}
                                </h1>
                                <p className="text-lg  font-normal break-words my-2">
                                    {service.description}
                                </p>
                                <p className='text-lg'>Read More</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default About_Service_Section