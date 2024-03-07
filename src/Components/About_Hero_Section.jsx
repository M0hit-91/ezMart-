import React from 'react'
import about_main_img from "../assets/about_main_img.jpg"
const About_Hero_Section = () => {
  return (
    <div className='mt-4 w-[80%] mr-auto ml-auto'>
        <div className='flex gap-10'>
            <img src={about_main_img} alt="image" className=' rounded-lg w-[500px] h-[550px]'/>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-5 justify-center py-4'>
                    <h2 className='text-3xl font-medium'>Welcome to ezMart</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quas necessitatibus, recusandae deleniti repellendus ipsum a atque explicabo labore assumenda id excepturi, odit officiis! Itaque inventore sit eum quo nobis!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum eaque quia aliquam dolor quasi nemo culpa voluptatem, molestiae porro fuga consectetur, recusandae quae eveniet tempora? Amet doloremque consequatur odit.</p>
                </div>
                <div className='mt-2 text-3xl'>
                    ek carausal lagana hai yaha
                </div>
            </div>
        </div>
    </div>
  )
}

export default About_Hero_Section;