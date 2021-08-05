import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
class App extends Component {
    //Real world app, empty state from the beggining (shoping cart)
    state = {
        characters:[],
    }

    removeCharacter = (index) => {
        const {characters} = this.state
    
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    //Usa el operador spread (ES6)
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters,character]})
    }
    render() {
        const name = "Diego"
        //Creacion del objeto state!
        const {characters} = this.state

        return (
            <div className="App">
                <h1>Hola {name}, desde el tuto1</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App