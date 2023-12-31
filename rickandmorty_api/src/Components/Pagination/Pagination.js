import React from 'react'

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handlePrevious = () => {
        onPrevious()
    }

    const handleNext = () => {
        onNext()
    }


// my-6 es de un margen
return (
    <nav className="my-6">
        <ul className="pagination justify-content-center">
            {
                prev ?
                (
                    <li className="page-item">
                    <button className="page-link" onClick={handlePrevious}>previous</button>
                    </li>
                ):null
            }
            {
                next ? 
                (
                    <li className="page-item">
                    <button className="page-link" onClick={handleNext}>next</button>
                    </li>
                ) :null
            }
        </ul>
    </nav>
    )
}

export default Pagination