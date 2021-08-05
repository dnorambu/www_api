import React, {Component} from 'react';
import Contacts from './Contacts';
class App extends Component {
    //Nuestro estado donde guardamos info por renderizar
    state = {
        contacts: []
    }
    
    //Recordad que didMount se ejecuta automaticamente
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
    }

    render () {
        return (
            <Contacts contacts={this.state.contacts} />
        );
    }   
}

export default App;