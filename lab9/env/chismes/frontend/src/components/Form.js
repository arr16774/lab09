import React, { Component } from "react";
import PropTypes from "prop-types";
class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    titulo: "",
    desc: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { titulo, desc } = this.state;
    const chisme = { titulo, descripcion };
    const conf = {
      method: "post",
      body: JSON.stringify(chisme),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
    window.location.reload();
  };
  render() {
    const { titulo, descripcion } = this.state;
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Titulo</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="titulo"
                onChange={this.handleChange}
                value={titulo}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="descripcion"
                onChange={this.handleChange}
                value={desc}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Enviar Chismes
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;