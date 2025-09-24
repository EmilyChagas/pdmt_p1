import React, { Component } from 'react'

export class LembreteEntrada extends Component {
   state = {
    texto: "" 
  }

  escreveLembrete = (escreveu) => {
    this.setState({ texto: escreveu.target.value });
  }

   adicionaLembrete = () => {
    if (this.state.texto.trim() == "") return
        console.log("Chamando onAdicionar:", this.state.texto)
        this.props.onAdicionar(this.state.texto) 
        console.log("Limpando input...")
        this.setState({ texto: "" })              
  }

  render() {
    return (
        <div>
        <div className='d-flex flex-column flex-sm-row align-items-center justify-content-center w-auto'>
          <input 
            type="text"
            className="form-control w-100 w-sm-auto"
            placeholder="Digite um lembrete"
            value={this.state.texto}
            onChange={this.escreveLembrete}
          />
            <button 
            onClick={this.adicionaLembrete}
            className="btn w-40 w-sm-100 ms-sm-2 mt-2 mt-sm-0" style={{backgroundColor:'#e85d04'}}>
             <i className="fa-solid fa-paper-plane"></i>
            </button>
        </div>
      </div>
    )
  }
}

export default LembreteEntrada