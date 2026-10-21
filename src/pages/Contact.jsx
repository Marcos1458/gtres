import { useState } from 'react';
import './Contact.css'

const initialForm = {
    cep: '',
    street: '',
    neighborhood: '',
    state: '',
    city: '',
    number: '',
    message: '',
};

export default function Contact() {
    const [form, setForm] = useState(initialForm);
    const cleanCep = form.cep.replace(/\D/g,'');
    if (cleanCep.length !== 8) {
        setStatus({ Type: 'error', message: 'Digite um cep válido!'})
        return;
    }

    async function searchCep() {
        try {
            const response = fetch('https://viacep.com.br/ws/01001000/json/');
            if (!response.ok) throw new Error('Falaha na busca do Cep!');
            const address = await response.json();
            if (address.erro) throw new Error ('Cep não encontrado!');
            setForm(
                (current) => ({
                    ...current,
                    cep: cleanCep,
                    street: address.logradouro || '',
                    neighborhood: address.bairro || '',
                    state: address.uf || '',
                    city: address.localidade || '',
                    
                })
            )

        } catch (e) {}
    }

    return (
        <section className="contact-page">
            <span className="section-label">Fale com a gente</span>
            <h1>Entre em contato</h1>
            <p className="page-intro">Consulte o CEP para completar seu endereço e escolha uma cidade carregada pela API do IBGE.</p>
            <form className="contact-form">
                <div className="form-section">
                    <h2>Endereço</h2>
                    <div className="form-grid">
                        <label>CEP
                            <div className="cep-field">
                                <input 
                                    name="cep" 
                                    inputMode="numeric" 
                                    value={form.cep}
                                    onChange={(evento)=> setForm(
                                        (current) => ({
                                            ...current,
                                            cep: evento.target.value,
                                        })
                                    )}
                                />
                                <button type="button" on onClick={searchCep}>
                                </button>
                            </div>
                        </label>
                        <label>Estado
                            <select 
                                name="state" 
                            >
                            </select>
                        </label>
                        <label>Cidade
                            <select 
                                name="city" 
                            >
                            </select>
                        </label>
                        <label>Rua
                            <input 
                                name="street" 
                                placeholder="Nome da rua" 
                                value={form.street}
                            />
                        </label>
                        <label>Número
                            <input 
                                name="number" 
                                placeholder="123" 
                                value={form.number}
                            />
                        </label>
                        <label>Bairro
                            <input 
                                name="neighborhood" 
                                placeholder="Seu bairro" 
                                value={form.neighborhood}
                            />
                        </label>
                    </div>
                </div>
                <label>Mensagem
                    <textarea 
                        name="message" 
                        rows="5" 
                        placeholder="Como podemos ajudar?" 
                    />
                </label>
                <button className="submit-button" type="submit">Enviar mensagem</button>
            </form>
        </section>
    );
}