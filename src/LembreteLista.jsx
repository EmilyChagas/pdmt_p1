const LembreteLista = (props) => (
    <div className="d-flex mb-2 mt-2 w-auto" style={{ backgroundColor: '#9d0208', color: '#ffffffff', borderRadius: 8 }}>
        <div className="d-flex align-items-center ms-4 mt-2 w-100">
            <h4>{props.lembreteLista}</h4>
        </div>
        <div className="  w-30 ms-2 me-4 d-flex justify-content-right align-items-center">
            <i className="fa-regular fa-star me-2" style={{ color: '#ffc300', cursor: 'pointer' }}></i>
            <i className="fa-solid fa-trash" style={{ color: 'write', cursor: 'pointer' }} onClick={props.remove}></i>
        </div>
    </div>
)

export default LembreteLista;
