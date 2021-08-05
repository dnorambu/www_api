import React, {Component} from 'react'

//Simple component
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}
//Simple component
const TableBody = (props) => {
    const rows = props.characterData.map((row,index)=>{
        return (
            //Buena practica usar keys
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=> props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}
class Table extends Component {
    render(){
        const {characterData, removeCharacter} = this.props
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}

export default Table