import React from 'react'

class Encuestas extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.encuestas && this.props.encuestas.map(encuesta => {
                        return <tr>
                            <td>{encuesta.encuestaId}</td>
                            <td>{encuesta.titulo}</td>
                            <td>{encuesta.descripcion}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        );
    }
}

export default Encuestas;