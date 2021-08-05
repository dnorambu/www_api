import React, {Component} from 'react'

class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    // const url ='https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
    const url = 'https://xo2f3bt2e2.execute-api.us-east-1.amazonaws.com/encu/encuestas'
    // const url = 'http://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        console.log("Hola 2")
        console.log(typeof(result.encuestas))
        // let algo = result.encuestas
        // algo.map((index,value) => {
        //   console.log(index,value)
        // })
        this.setState({
          data: result,
        })
      })
    
  }

  render() {
    const {data} = this.state
    console.log("Hola 1")
    console.log(typeof(data))
    // const result = typeof(data.encuestas)
    
    // const result = data.map((entry, index) => {
    //     return (
    //       <li key={index}>{entry}</li>
    //     )
    // })
    // console.log(result)
    return <ul>2</ul>
  }
}

export default App