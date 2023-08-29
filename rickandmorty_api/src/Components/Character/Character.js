import React from 'react'

const Character = ({character}) =>{
    return(
        <div className="container">
            <div className='row'>
                {
                    character.map((item,index) =>
                    (
                        <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={item.image}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}