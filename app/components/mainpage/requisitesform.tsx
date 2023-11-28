'use client'

import { useRouter } from 'next/navigation';

export function RequisitesForm(){
    const router = useRouter();

    return(
        <form className="flex flex-col gap-6 w-[39.25rem]">
            <div className="flex flex-col gap-4">
                <h1 className='text-4xl font-semibold'>O que você precisa para doar:</h1>
                <p>Saiba os requisitos necessários para doar. Não se preocupe, com certeza você atende todos eles</p>
            </div>
            <button type="button" className="flex justify-center items-center w-64 h-16 bg-mainPurpleColor rounded-lg text-xl font-bold text-white" onClick={() => {
                router.push('/informacoes')
            }}>Iniciar Jornada</button>
        </form>
    )
}