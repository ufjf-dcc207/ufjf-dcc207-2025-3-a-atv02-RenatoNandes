import "./disciplina.css"

type disciplinaProps = {
    codigo: string,
    nome: string
}

export default function Disciplina(props: disciplinaProps) {
    return (
        <>
            <div className="disciplina">
                <h1>{props.codigo}</h1>
                <h2>{props.nome}</h2>
            </div>
        </>
    );
}
