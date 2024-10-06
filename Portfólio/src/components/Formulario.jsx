import React, { useState } from 'react';

export default function Formulario() {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [texto, setTexto] = useState('');

  function botao(evento) {
    evento.preventDefault(); 
    console.log(nome);
    console.log(email);
    console.log(texto);
  }

  return (
    <section className="bg-blue-900 p-5 rounded-xl">
      <h1 className='text-lg'><strong>Formulário de Contato</strong></h1>

      <form onSubmit={botao} className='text-white flex flex-col items-center'> 
        <div className='flex flex-col items-center'>
          <label htmlFor="nome">Nome:</label>
          <input className='bg-slate-950 rounded-xl'
            type="text"
            id="nome"
            name="nome"
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="email">E-mail:</label>
          <input className='bg-slate-950 rounded-xl'
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="texto">Mensagem:</label>
          <textarea className='bg-slate-950 rounded-xl'
            id="texto"
            name="texto"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            required
          />
        </div>
        <button className='hover:text-sky-500 text-lg' type="submit"><strong>Enviar</strong></button>
      </form>
    </section>
  );
}