import { useState } from "react"
import axios from "axios";

export default function products() {

    const [data, setData] = useState({
        email:"",
        password: ""
    });

    const [message, setMessage] = useState("");

    //Receber os dados do campo formulário
    const valueInput = e => setData({...data, [e.target.name]: e.target.value});

    const sendMsg = async (e) => {
        e.preventDefault();

        console.log(`Email: ${data.email}`);
        console.log(`Password: ${data.password}`);

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        };

        await axios.post('http://localhost:8080/cadastro', data, headers)
        .then((response) => {
            setMessage(response.data.message)
        }).catch((err) => {
            setMessage(err.data.message)
        })
    };


    return (
        <main className="nain">

            <form onSubmit={sendMsg} className='container'>
            <h2 className="title">Cadastre-se</h2>

            {message ? <p>{message}</p> : ""}

                <input className="input"
                type="email" name="email" 
                placeholder="Email" 
                onChange={valueInput}/>
            
                <input className="input" 
                type="password" 
                name="password" 
                placeholder="Password" 
                onChange={valueInput}/>
            
                <button className="button" type="submit">Criar</button>
            </form>
        </main>
    )   
}