'use client'

export function Form(){
    return(
        <form className='flex flex-col justify-center items-center'>
            <label htmlFor="name">Nome</label>
            <input name='name' id='name' type="text" />

            <label htmlFor="email">E-mail</label>
            <input name='email' id='email' type="email" />

            <label htmlFor="tel">Telefone</label>
            <input name='tel' id='tel' type="tel" />

            <label htmlFor="name">Tipo Sanguíneo</label>
            <input name='name' id='name' type="text" />

            <button>Organizar Agora!</button>
        </form>
    )
}