import React from 'react'
////className="col-lg-3 col-md-6 col-sm-12 mb-4" es para tener un resppnsive design.
// p*3 repetir p
const Character = ({character}) =>{ //rafc es un template, usar esas palabras.
    return(
        <div className="container" style={{margin: "30px"}}>
        <div className="row">
            { 
                character.map((item, index) => (
                    <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <div className="card h-100 animate__animated animate__bounce  bg-primary" style={{minWidth: "250px"}}>
                            <img className="card-img-top" src={item.image} alt="character"/>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <h3 className="card-subtitle mb-2 text-muted">ID: {item.id}</h3>
                                <hr />
                                <p className="card-text">Species: {item.species}</p>
                                <p className="card-text">Gender: {item.gender}</p>
                                <p className="card-text">Location: {item.location.name}</p>
                                <p className="card-text">Status: {item.status}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
    )
}

export default Character