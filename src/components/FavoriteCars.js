import React, {Component} from 'react'


class FavoriteCars extends Component {
    constructor(props){
        super(props)
        this.state = {
            noteInput: props.cars.note,
            toggleEdit: false
        }
    }

    handleChange = (event) => {
        this.setState({ noteInput: event.target.value})
    }

    toggleEdit = () => {
        this.setState({ toggleEdit: !this.state.toggleEdit})
    }

    render(){

        let {cars} = this.props

        return (
            <li className='cars'>
                  <p className='delete-btn'
                    onClick={(e) => {e.stopPropagation();
                        this.props.deleteCar(this.props.index)}}>
                        {" X "}
                    </p>
                <h1>
                    {cars.make} <br/>
                    {cars.model}
                    
                </h1>
                 {this.state.toggleEdit ? (
                     <input
                      value={this.state.noteInput} 
                    onChange={this.handleChange}
                    />
                 ) : (
                     
                     <h2>Note: {cars.note}</h2>
                 )}

                 {this.state.toggleEdit ? ( 
                 <div>
                     <button className='edit-btn' onClick={() =>{
                     this.props.makeCarNote(
                         this.props.index, 
                         this.state.noteInput
                         )
                         this.toggleEdit()
                        }} 
                         >
                             Save
                             </button>
                             <button className='edit-btn' onClick={() => {
                                 this.setState({ noteInput: cars.note})
                                 this.toggleEdit()
                             }}
                             >
                                 Cancel
                             </button>
                             </div>
                             ) : null}

                 <button className='edit-btn' onClick={this.toggleEdit}>Edit</button>

                      
            </li>
        )
    }
}

export default FavoriteCars