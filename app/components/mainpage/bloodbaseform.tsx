'use client'

import { useRouter } from 'next/navigation';

export function BloodBaseForm(){
    const router = useRouter();

    return(
        <>
            <div className='flex flex-col justify-center items-center gap-8'>
                <h1 className='text-4xl font-semibold'>Bancos de sangue, nesse momento</h1>
                <div className="w-[50.688rem] h-[2.438rem] border-2 border-solid rounded-lg border-[#883EDD]">
                    <div className="w-[12.813rem] h-[2.203rem] bg-[#EB5353] rounded-md" />
                </div>
            </div>
            <button className='font-bold text-white text-xl w-64 h-16 bg-mainPurpleColor rounded-lg' onClick={() => {
                router.push('/querodoar')
            }}>Ajudar Agora!</button>
        </>
    )
}