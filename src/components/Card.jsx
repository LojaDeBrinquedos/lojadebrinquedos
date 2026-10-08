import React from 'react'

const Card = ({nome_produto = "nome padrão", preco = 10.00, descricao = "descrição padrão"}) => {
  return (
    <article className='flex flex-col gap-2 p-4 rounded-md bg-amber-50 border border-primary w-fit m-2'>
        <header>
              <h3 className='font-bold text-xl mb-2'>{nome_produto}</h3>
              <img width={200} height={100} src="/lego.jpg" alt="" className='h-50' />
        </header>
        <div>
            <p className='font-bold'>Descrição do produto: </p>
            <p>{descricao}</p>
        </div>
        <footer className='flex flex-col gap-2'>
            <p className='font-bold'>Preço: R${preco}</p>
              <button className='bg-[#2E90CF] py-1 px-2 rounded-full text-white hover:bg-[#3CBF96] transition-all hover:cursor-pointer'>Comprar</button>
        </footer>
    </article>
  )
}

export default Card