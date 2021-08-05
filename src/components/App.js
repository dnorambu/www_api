import React from "react";
import Encuestas from "./Encuestas";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      encuestas: [],
      titulo: "",
      encuestaId: "",
      descripcion: "",
    };

    this.create = this.create.bind(this);
    // this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // get all entities - GET
    fetch(
      "https://xo2f3bt2e2.execute-api.us-east-1.amazonaws.com/encu/encuestas",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          encuestas: response.encuestas,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  create(e) {
    // add entity - POST
    e.preventDefault();

    // creates entity
    fetch(
      "https://xo2f3bt2e2.execute-api.us-east-1.amazonaws.com/encu/encuesta",
      {
        method: "POST",
        body: JSON.stringify({
          titulo: this.state.titulo,
          descripcion: this.state.descripcion,
          encuestaId: this.state.encuestaId,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

//   update(e) {
//     update entity - PUT
//     e.preventDefault();

//     this will update entries with PUT
//     fetch(
//       "https://xo2f3bt2e2.execute-api.us-east-1.amazonaws.com/encu/encuesta",
//       {
//         method: "PATCH",
//         body: JSON.stringify({
//           encuestaId: this.state.encuestaId,
//           titulo: this.state.titulo,
//           descripcion: this.state.descripcion,
//         }),
//       }
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

  delete(e) {
    // delete entity - DELETE
    e.preventDefault();
    // deletes entities
    fetch(
      `https://xo2f3bt2e2.execute-api.us-east-1.amazonaws.com/encu/encuesta?encuestaId=${this.state.encuestaId}`,
      {
        method: "DELETE",
        body: JSON.stringify({
            encuestaId: this.state.encuestaId,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(changeObject) {
    this.setState(changeObject);
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-4 text-center">La Grandiosa API de encuestas</h1>
            <h1 className="display-4 text-center">Grupo KAWWWAI</h1>
            <form className="d-flex flex-column">
              <legend className="text-center">
                Add-Delete Encuesta
              </legend>
              <hr></hr>
              <label htmlFor="titulo">
                Titulo:
                <input
                  name="titulo"
                  id="titulo"
                  type="text"
                  className="form-control"
                  value={this.state.titulo}
                  onChange={(e) =>
                    this.handleChange({ titulo: e.target.value })
                  }
                  required
                />
              </label>
              <hr></hr>
              <label htmlFor="descripcion">
                Descripcion:
                <input
                  name="descripcion"
                  id="descripcion"
                  type="test"
                  className="form-control"
                  value={this.state.description}
                  onChange={(e) =>
                    this.handleChange({ descripcion: e.target.value })
                  }
                  required
                />
              </label>
              <hr></hr>
              <label htmlFor="encuestaId">
                ID Encuesta:
                <input
                  name="encuestaId"
                  id="encuestaId"
                  type="text"
                  className="form-control"
                  value={this.state.encuestaId}
                  onChange={(e) =>
                    this.handleChange({ encuestaId: e.target.value })
                  }
                />
              </label>
              <hr></hr>
              <button
                className="btn btn-primary"
                type="button"
                onClick={(e) => this.create(e)}
              >
                Add
              </button>
              {/* <button
                className="btn btn-info"
                type="button"
                onClick={(e) => this.update(e)}
              >
                Update
              </button> */}
              <button
                className="btn btn-danger"
                type="button"
                onClick={(e) => this.delete(e)}
              >
                Delete
              </button>
            </form>
            <Encuestas encuestas={this.state.encuestas} />
          </div>
        </div>
      </div>
    );
  }
}
// let domContainer = document.querySelector('#App');
// ReactDOM.render(<App />, domContainer);
export default App;
