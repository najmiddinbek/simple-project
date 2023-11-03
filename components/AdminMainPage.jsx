import Link from 'next/link';
import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import Count from "./Count"
import { BsFillEnvelopeFill } from "react-icons/bs"


export default function page() {

    return (
        <div className='mt-10 max-w-[1400px] ml-auto mr-auto'>
            <h1 className='page_text poppins text-3xl mb-4 font-bold'>Chortoq tumani 3-maktab o`quvchilari</h1>
            <>
                <div className='w-full h-[10px] bg-transparent rounded-xl'></div>
                <Link href={"/adminPanel"}>
                    <div className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full'>
                        <p className='text-[18px] poppins'>
                            3-maktab
                        </p>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 relative h-12 bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Count />
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        </div>
    );
}