'use client'

export function Form(){
    return(
        <form className='flex flex-col justify-center items-center gap-12'>
            <section className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <input name='name' id='name' type="text" placeholder="Nome" className="font-semibold text-white bg-inherit placeholder:text-white focus:outline-none text-base placeholder:text-base" required />
                    <div className="w-[25rem] h-px bg-linePurpleColor rounded-2xl" />
                </div>

                <div className="flex flex-col gap-4">
                    <input name='email' id='email' type="email" placeholder="E-mail" className="font-semibold text-white bg-inherit placeholder:text-white focus:outline-none text-base placeholder:text-base" required />
                    <div className="w-[25rem] h-px bg-linePurpleColor rounded-2xl" />
                </div>

                <div className="flex flex-col gap-4">
                    <input name='tel' id='tel' type="tel" placeholder="Telefone" className="font-semibold text-white bg-inherit placeholder:text-white focus:outline-none text-base placeholder:text-base" required />
                    <div className="w-[25rem] h-px bg-linePurpleColor rounded-2xl" />
                </div>

                <div className="flex flex-col gap-4">
                    <select name="blood" id="blood" className="font-semibold text-white bg-inherit outline-none text-base appearance-none" required>
                        <option value="" className="bg-purple-500">Tipo Sanguíneo</option>
                        <option value="AB+" className="bg-purple-500">AB+</option>
                        <option value="AB-" className="bg-purple-500">AB-</option>
                        <option value="A+" className="bg-purple-500">A+</option>
                        <option value="A-" className="bg-purple-500">A-</option>
                        <option value="B+" className="bg-purple-500">B+</option>
                        <option value="B-" className="bg-purple-500">B-</option>
                        <option value="O+" className="bg-purple-500">O+</option>
                        <option value="O-" className="bg-purple-500">O-</option>
                    </select>
                    <div className="w-[25rem] h-px bg-linePurpleColor rounded-2xl" />
                </div>
            </section>

            <button type="button" className="flex justify-center items-center w-72 h-16 text-xl font-bold border border-solid border-white rounded-lg">Organizar Agora!</button>
        </form>
    )
}