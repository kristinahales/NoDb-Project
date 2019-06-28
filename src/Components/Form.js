import React, {Component} from 'react';
import './form.css';
class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            genre: '',
            yearReleased: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmitForm(e) {
        e.preventDefault()
        this.props.addMovie({
            name: this.state.name,
            image: this.state.image,
            genre: this.state.genre,
            yearReleased: this.state.yearReleased
        })
        this.setState({            
            name: '',
            image: '',
            genre: '',
            yearReleased: 0,
        })
    }




    render() {
        let {name, image, genre, yearReleased} = this.state;
        return (
            <div>
                <form className='form-container'>
                    <div><input placeholder='Movie title' name='name' onChange={this.handleChange} value={name} type='text'/></div>
                    <div><input placeholder='Movie genre' name='genre'onChange={this.handleChange} value={genre}/></div>
                    <div><input placeholder='Movie Release Year' name='yearReleased'onChange={this.handleChange} value={yearReleased}/></div>
                    <div><input placeholder='Movie Image URL' name='image' onChange={this.handleChange} value={image}/></div>
                    <div><button className='submit-button' onClick={this.handleSubmitForm}>Submit</button></div>
                </form>

            </div>

        )
    }
}

export default Form;