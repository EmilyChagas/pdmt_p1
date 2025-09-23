import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import React from 'react'
import LembreteEntrada from './LembreteEntrada'
export default class App extends React.Component {
state = {
    lembretes: [] 
  }

  adicionarLembrete = (novo) => {
    this.setState({
      lembretes: [...this.state.lembretes, novo] 
    })
  }

  render() {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ margin: 'auto', width: 768, backgroundColor: '#1b263b', padding: 12, borderRadius: 8, color: '#e0e1dd' }}>
        <div
          className="container">
          <div
            className="row align-items-center justify-content-center">
            <div
              className="col-sm-12 col-lg-6 col-xxl-4 text-center d-flex justify-content-center flex-row w-auto">
              <LembreteEntrada onAdicionar={this.adicionarLembrete} />
            </div>
          </div>
        </div>
      </div>
    )
  }
} 
