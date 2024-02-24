import React from 'react'
import Button from './Button'

const SectionTwo = () => {
  return (
    <section className='contact container m-auto lg:p-20 mb-[80px] px-10 ' id='contact'>
      <div className="grid gap-5 lg:grid-cols-2 grid-cols-1">
        <div className="formImg flexCenter lg:w-[500] lg:h-[500] md:w-[300] md:h-[300] sm:w-[200] sm:h-[200]">
        <image
          className='lg:w-[500] lg:h-[500] md:w-[300] md:h-[300] sm:w-[200] sm:h-[200]'
          src="../public/Hero.png"
          alt="Logo"
          width={200}
          height={200}
        />
        </div>
        <div className="form gap-1 grid grid-cols-2 ">
          <h1 className='col-span-2 regular-40 text-white'>Get In Touch</h1>
          <input className='border-2 border-main-4  px-5 py-2 rounded-3xl bg-transparent text-main-3 focus:bg-main-4 transition-all text-[18px]' type="text" placeholder='First Name' name="firstname" id="" />
          <input className='border-2 border-main-4  px-5 py-2 rounded-3xl bg-transparent text-main-3 focus:bg-main-4 transition-all text-[18px]' type="text" placeholder='Last Name' name="lastname" id="" />
          <input className='border-2 border-main-4  px-5 py-2 rounded-3xl bg-transparent text-main-3 focus:bg-main-4 transition-all text-[18px]' type="email" name="mail" placeholder='Your Email' id="" />
          <input className='border-2 border-main-4  px-5 py-2 rounded-3xl bg-transparent text-main-3 focus:bg-main-4 transition-all text-[18px]' type="number" name="phone" placeholder='Your Phone Number' id="" />
          <textarea className=' col-span-2 border-2 border-main-4  px-5 py-2 rounded-3xl bg-transparent text-main-3 focus:bg-main-4 transition-all text-[18px]' name="messege" id="" cols={30} rows={10} placeholder='Enter You Msg' style={{resize:"none"}}></textarea>
        <Button
        classes="lg:col-span-1 col-span-2 mt-[10px]"
        type="submit"
        title="Send"
        theme="btn_gray_blue "
        />
        </div>
      </div>
    </section>
  )
}

export default SectionTwo