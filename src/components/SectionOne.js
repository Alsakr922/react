import React from 'react'


const SectionOne = () => {
  return (
    <section className='container m-auto lg:p-20 p-10 '>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <image
          className='rounded-2xl'
            src={""}
            alt='Photo'
            width={600}
            height={400}
          />
        </div> {/*img*/}
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <image
          className='rounded-2xl'
            src={""}
            alt='Photo'
            width={600}
          height={400}/>
        </div> {/*img*/}
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <image
          className='rounded-2xl'
            src={""}
            alt='Photo'
            width={600}
            height={400}
          />
        </div> {/*img*/}
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <image
          className='rounded-2xl'
            src={""}
            alt='Photo'
            width={600}
          height={400}/>
        </div> {/*Image*/}
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <image
          className='rounded-2xl'
            src={""}
            alt='Photo'
            width={600}
          height={400}/>
        </div> {/*Image*/}
        <div className='cursor-pointer hover:scale-105 transition-all'>
          <image
          className='rounded-2xl'
            src={""}
            alt='Photo'
            width={600}
          height={400}/>
        </div> {/*img*/}
      </div>
    </section>
  )
}

export default SectionOne