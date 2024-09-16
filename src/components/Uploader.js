import React, { useRef, useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'

const Uploader = ({ width, height, iconSize, iconTitle, fontSize }) => {
  const inputRef = useRef(null)
  const [image, setImage] = useState(null)
  const [filename, SetFilename] = useState('No selected file')
  return (
    <main>
      <form
        onClick={() => inputRef.current.click()}
        style={{ width, height }}
        className='flex justify-center flex-col items-center cursor-pointer'
      >
        <input
          type='file'
          accept='image/*'
          ref={inputRef}
          hidden
          onChange={({ target: { files } }) => {
            if (files[0]) {
              SetFilename(files[0].name)
              setImage(URL.createObjectURL(files[0]))
            }
          }}
        />
        {image ? (
          <img
            src={image}
            alt={filename}
            style={{ width, height }}
            className='object-cover'
          />
        ) : (
            <>
              <MdCloudUpload className='fill-[#454545]' size={iconSize} />
              <p className='font-montserrat font-medium' style={{ fontSize }}>
                {iconTitle}
              </p>
            </>
        )}
      </form>
    </main>
  )
}

export default Uploader
