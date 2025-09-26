import "./disciplina.css"

type disciplinaProps = {
    codigo: string,
    nome: string
}

export default function Disciplina({codigo, nome}: disciplinaProps) {
    return (
        <>
            <div className="disciplina">
                <h1>{codigo}</h1>
                <h2>{nome}</h2>
            </div>
        </>
    );
}
