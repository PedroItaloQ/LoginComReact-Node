export default function products() {
    return (
        <main className="container">
            <h2 className="title">Cadastre-se</h2>

            <input className="input" type="email" name="email" placeholder="Email" />
            <input className="input" type="password" name="password" placeholder="Password" />
            <button className="button" type="submit">Criar</button>
        </main>
    )   
}