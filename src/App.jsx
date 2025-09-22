import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
const App = () => {
  return (
    <div
      className="container d-flex align-items-center justify-content-center">
        <div
          className="row align-items-center justify-content-center">
          <div
            className="col-sm-12 col-lg-6 col-xxl-4 text-center" 
            style={{ margin: 'auto', width: 768, backgroundColor: '#1b263b', padding: 12, borderRadius: 8, color:'#e0e1dd'}}>
            <p>Hello, Lembretes</p>
          </div>
        </div>
    </div>
  )
}

export default App
