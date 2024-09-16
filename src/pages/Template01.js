import React, { useRef, useState } from 'react'
import temp01BG from '../assets/temp01_bg.jpg'
import Uploader from '../components/Uploader'
import { toJpeg } from 'html-to-image'

const Template01 = () => {
  const sizeSize = '70px'
  const templateRef = useRef(null)
  const [title1, setTitle1] = useState('Title 1')
  const [title2, setTitle2] = useState('Title 2')
  const [location, setLocation] = useState('Location')
  const [realtorName, setRealtorName] = useState('Realtors Name')

  const resetButton = (e) => {
    setTitle1('')
    setTitle2('')
    setLocation('')
    setRealtorName('')
  }

  const handleDownload = (e) => {
    e.preventDefault()
    if (templateRef.current) {
      toJpeg(templateRef.current, { quality: 0.95 })
        .then((dataUrl) => {
          const link = document.createElement('a')
          link.href = dataUrl
          link.download = `${realtorName} Template ${Date.now()}`
          link.click()
          console.log('Download initiated')
        })
        .catch((err) => {
          console.error('Failed to download image:', err)
        })
    } else {
      console.error('templateRef is not assigned')
    }
  }

  return (
    <section className='pl-[10rem] flex'>
      <div className='mr-[4rem] mt-[15rem]'>
        <h1 className='text-2xl font-montserrat font-semibold mb-4'>
          Template 01
        </h1>
        <form className='container w-[40rem]'>
          <div className='my-[1rem]'>
            <label className='block text-sm font-montserrat font-medium'>
              Enter Title 1
            </label>
            <input
              type='text'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              onChange={(e) => {
                setTitle1(e.target.value)
              }}
            />
          </div>

          <div className='my-[1rem]'>
            <label className='block text-sm font-montserrat font-medium'>
              Enter Title 2
            </label>
            <input
              type='text'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              onChange={(e) => {
                setTitle2(e.target.value)
              }}
            />
          </div>

          <div className='my-[1rem]'>
            <label className='block text-sm font-montserrat font-medium'>
              Enter Location
            </label>
            <input
              type='text'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              onChange={(e) => {
                setLocation(e.target.value)
              }}
            />
          </div>

          <div className='my-[1rem]'>
            <label className='block text-sm font-montserrat font-medium'>
              Realtor’s Name
            </label>
            <input
              type='text'
              className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
              onChange={(e) => setRealtorName(e.target.value)}
            />
          </div>

          <div className='flex'>
            <button
              className='bg-green-600 text-white w-[10rem] py-3 rounded-lg cursor-pointer hover:bg-green-500 transition-all font-montserrat font-medium mr-5'
              onClick={(e) => {
                e.preventDefault()
                handleDownload(e)
              }}
            >
              Download
            </button>
            <button
              className='py-3 cursor-pointer hover:font-bold transition-all font-montserrat font-medium underline'
              onClick={resetButton}
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className='relative h-[100vh] w-[60%] p-10 flex justify-center items-center'>
        <div
          className='bg-[#F4F4F4] h-[750px] w-[750px] relative'
          ref={templateRef}
        >
          <div className='w-[750px] h-[12%] bg-black bg-opacity-50 absolute flex items-center justify-end'>
            <div
              className={`text-white w-[${sizeSize}] h-[${sizeSize}] bg-none flex justify-center items-center`}
            >
              <Uploader
                width={`${sizeSize}`}
                height={`${sizeSize}`}
                iconSize={30}
                iconTitle={'Add logo'}
                fontSize={'12px'}
              />
            </div>
            <div
              className={`text-white w-[${sizeSize}] h-[${sizeSize}] bg-none flex justify-center items-center mr-7`}
            >
              <Uploader
                width={`${sizeSize}`}
                height={`${sizeSize}`}
                iconSize={30}
                iconTitle={'Add logo'}
                fontSize={'12px'}
              />
            </div>
          </div>

          <Uploader
            width={'750px'}
            height={'480px'}
            iconSize={90}
            iconTitle={'Click to upload listing Image'}
            fontSize={'16px'}
          />

          <div className='w-[750px] h-[36%] overflow-hidden relative'>
            <div className='flex absolute w-full h-full'>
              <div className='w-[50%] h-full p-[1rem] mt-[4rem] ml-[3rem]'>
                <div className='text-customGold text-[60px] font-brittany'>
                  {title1}
                </div>
                <div className='text-customGold text-[50px] font-montserrat uppercase leading-10'>
                  {title2}
                </div>
                <div className='text-customGold text-[24px] font-montserrat leading-10 text-right uppercase'>
                  {location}
                </div>
              </div>

              <div className='w-[50%] h-full flex flex-col items-center mt-[3.5rem] p-[1rem]'>
                <div className='w-[140px] h-[140px] rounded-[50%] bg-white relative overflow-hidden'>
                  <Uploader
                    width={'140px'}
                    height={'140px'}
                    iconSize={25}
                    iconTitle={'Profile Photo'}
                    fontSize={'12px'}
                  />
                </div>
                <div className='font-montserrat text-[20px] mt-[6px] text-customGold font-medium'>
                  {realtorName}
                </div>
              </div>
            </div>
            <div className='bg-linearGrad w-full h-[15px] absolute mt-[2.6rem]'></div>
            <img
              src={temp01BG}
              alt='Template01-BG'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Template01
