import { useState } from "react";
import { ImImages } from "react-icons/im";
import { IoMdVideocam } from "react-icons/io";
import { Upload } from 'lucide-react';
import { CiCirclePlus } from "react-icons/ci";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css'

export default function Write() {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')

    const handleOpen = () => {
        setOpen(!open)
    }

  return (
    <div className="mt-[5rem] relative">
        <input type="text" name="" id="" placeholder="Title" className=" p-12 text-[3.5rem] border-none outline-none bg-primaryBg placeholder:text-[#b3b3b1]" />
        <div className="flex gap-5 h-[44rem] relative">
            <div className="flex gap-9 left-12 absolute z-20 w-full ">
            <button onClick={handleOpen}>
            <CiCirclePlus  className="w-16 h-16 text-black/30 dark:text-white/30 bg-primaryBg"/>
            </button>
            {open && (
                <div className="flex gap-5 items-center bg-primaryBg">
                    <button className="border-2 rounded-full border-[#1a8917] p-4">
                        <ImImages className="w-6 h-6 text-[#1a8917]"/>
                    </button>
                    <button className="border-2 rounded-full border-[#1a8917] p-4">
                        <Upload className="w-6 h-6 text-green-600"/>
                    </button>
                    <button className="border-2 rounded-full border-[#1a8917] p-4">
                        <IoMdVideocam className="w-6 h-6 text-[#1a8917]"/>
                    </button>
                </div>
            )}
            </div>
            
                
            <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder="Tell your story" className="w-full mt-16 ml-20 "/>
        </div>
        
    </div>
  )
}
