import React from "react";
class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    increment = () => {
        let c = this.state.count;
        this.setState({
            count:++c
        })
    }
    decrement = () => {
        let c = this.state.count;
        this.setState({
            count:--c
        })
    }

    /**
     * konsep sama spt encapsulation ada fungsi yang digunakan untuk
     * mengontrol dan memodifikasi data private
     * 
     * data private = state
     * accesor = this.state.nama
     * mutator = this.setState{( nama: value)}
     */
    render(){
        
        return(
            <div className="row col-4">
                <div className="col-3">
                    <button className="btn btn-warning btn-block" onClick={this.decrement}>
                        -
                    </button>
                </div>

                <div className="col-6">
                    <input type="number" value={this.state.count} className="form-control" readOnly/>
                </div>

                <div className="col-3">
                    <button className="btn btn-dark btn-block" onClick={this.increment}>
                        +
                    </button>
                </div>
            </div>
        )
    }
}
export default Counter;