'use client'

import { useRouter } from 'next/navigation';

export function BloodForm(){
    const router = useRouter();
    
    return(
        <form className='flex flex-col gap-y-6'>
            <h1 className='text-5xl w-mainPageText font-bold'>Quantas vidas você já salvou hoje?</h1>

            <button type="button" className='flex justify-center items-center text-white bg-mainPurpleColor rounded-lg w-60 h-16 text-xl font-bold' onClick={() => {
                router.push('/querodoar')
            }}>Quero Doar!</button>
        </form>
    )
}