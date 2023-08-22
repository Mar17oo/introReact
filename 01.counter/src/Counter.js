import React from 'react'
import './Counter.css'


class Counter extends React.Component{
    Constructor(props){
        super(props)
        this.state = {
            count: props.initCount //Coount es el valor inicial de mi contador
        }
    }

    render(){
        return(
            <div className='counter-main'>
                <h5>{this.state.count}</h5>{}
                <div className='counter-button'>{}
                {}
                <button onClick={()=> this.setState({count:this.state.count+1})}> Agregar </button>

                <button onClick={()=> this.setState({count:this.state.count+1})}>Disminuir</button>

                </div>
            </div>
        )
    }
}

export default Counter