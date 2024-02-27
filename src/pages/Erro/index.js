import {Link} from 'routes'


export function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada</h2>

            <Link to='/'>INICIO</Link>
        </div>
    )
}
