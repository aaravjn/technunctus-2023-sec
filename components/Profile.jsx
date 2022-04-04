import React from 'react'
import Image from "next/image"
import { IconButton } from '@mui/material'
import Link from "next/link"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';

const Profile = ({key,name,type,contact_no,email,source_url}) => {
  return (
    <div className="rounded bg-black">
        <div className='rounded p-2 grid grid-cols-[128px,1fr]'>
            <div className="relative h-32 w-32 rounded">
                <Image 
                src={source_url}
                alt="Profile Icon"
                layout="fill"
                objectFit="cover"
                objectPosition={"top"}
                className="rounded"
                />
            </div>
            <div className=" px-4 overflow-hidden flex flex-col justify-center">
                <div className='flex justify-between items-end'>
                    <p className=' gradientText text-sm '>
                        {type}
                    </p>
                    <div className='flex'>
                        <Link
                            href={"mailto:"+email}
                        >
                         <a>
                            <IconButton>
                                <AlternateEmailIcon className="text-sm text-white"/>
                            </IconButton>
                         </a>
                        </Link>
                        <Link
                            href={"tel:"+contact_no}
                        >
                            <a>
                                <IconButton>
                                    <CallIcon className="text-sm text-white"/>
                                </IconButton>
                            </a>
                        </Link>
                    </div>

                </div>
                <p className="text-3xl font-bold ">{name}</p>
            </div>
        </div>
    </div>
  )
}

export default Profile