import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import React from 'react'
import LembreteEntrada from './LembreteEntrada'
import LembreteLista from './LembreteLista'
export default class App extends React.Component {
  state = {
    lembretes: []
  }

  excluirLembrete = (index) => {
    const remove = this.state.lembretes.filter((_, i) => i !== index)
    this.setState({ lembretes: remove })
  }

  favoritarLembrete = (index) => {
    const favoritar = [...this.state.lembretes]
    favoritar[index].favorito = !favoritar[index].favorito
    this.setState({ lembretes: favoritar })
  }

  adicionarLembrete = (novo) => {
    this.setState({
      lembretes: [...this.state.lembretes, { lembrete: novo, favorito: false }]
    })
  }

  render() {
    return (
      <div
        className="d-flex align-items-center justify-content-center m-auto w-50 p-12 mt-4"
        style={{ backgroundColor: '#6a040f', padding: 12, borderRadius: 10, color: '#e0e1dd' }}>
        <div
          className="container mb-2">
          <div
            className="col align-items-center justify-content-center">
            <div
              className="col-sm-12 col-lg-6 col-xxl-4 text-center d-flex justify-content-center flex-column w-auto">
              <div className='mb-2'>
                {this.state.lembretes.map((item, index) => (
                  <LembreteLista
                    key={index}
                    lembreteLista={item.lembrete}
                    favorito={item.favorito}
                    remove={() => this.excluirLembrete(index)} 
                    favoritar={() => this.favoritarLembrete(index)}/>
                ))}
              </div>
              <LembreteEntrada
                onAdicionar={this.adicionarLembrete} />
            </div>
          </div>
        </div>
      </div>
    )
  }
} 
