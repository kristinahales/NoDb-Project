import React, {Component} from 'react';



class DisplayMovies extends Component {
    constructor(props) {
        super()
        this.state = {
            rating: props.movie.rating,
            editing: false,
            heartClicked: false,
            laughClicked: false,
            cryClicked: false,
            thumbClicked: false,
        }
        this.flipEdit = this.flipEdit.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.heartClicked = this.heartClicked.bind(this);
        this.laughClicked = this.laughClicked.bind(this);
        this.cryClicked = this.cryClicked.bind(this);
        this.thumbClicked = this.thumbClicked.bind(this);
    }

    flipEdit() {
        this.setState({editing: !this.state.editing})
    }

    saveChanges() {
        this.flipEdit();
        this.props.editRating(this.state.rating, this.props.movie.id);
    };

    handleChange = e => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    heartClicked() {
        this.setState({
            heartClicked: !this.state.heartClicked
        })
    }

    laughClicked() {
        this.setState({
            laughClicked: !this.state.laughClicked
        })
    }

    cryClicked() {
        this.setState({
            cryClicked: !this.state.cryClicked
        })
    }

    thumbClicked() {
        this.setState({
            thumbClicked: !this.state.thumbClicked
        })
    }

    render() {
        let {movie} = this.props
        let {editing, rating} = this.state
        return (
            <div className='movie-container'> 
                <button className='button1'onClick={() => this.props.deleteMovie(this.props.movie.id)}>&times;</button>
                <img src={movie.image} width='100px' height='150px' className='box1'/>
                <p className='box2'>{movie.name}</p>
                <p className='box3'>Genre: {movie.genre}</p>
                <p className='box4'>Release Year: {movie.yearReleased}</p>
                
                {editing ? (
                <input value={rating} onChange={this.handleChange} name='rating'/>
                ) : (
                <p className='rating'>Rating: {movie.rating}</p>
                )}
                {editing ? (
                <button className='button2' onClick={this.saveChanges}>Save Changes</button>
                ) : (
                <button className='button2' onClick={this.flipEdit}>Edit Rating</button>
                )}

                <div>
                <i id='heart' className="fas fa-heart" style={{color: this.state.heartClicked ? '#A31621' : 'black'}} onClick={this.heartClicked}></i> 
                <i id='cry' className="far fa-sad-cry" style={{color: this.state.cryClicked ? '#646C65' : 'black'}} onClick={this.cryClicked}></i>
                <i id='thumbs-up' className="far fa-thumbs-up" style={{color: this.state.thumbClicked ? '#0549C6' : 'black'}} onClick={this.thumbClicked}></i>
                <i id='laugh' className="far fa-grin-squint-tears" style={{color: this.state.laughClicked ? '#FFD131' : 'black'}} onClick={this.laughClicked}></i>
                </div>
            </div>
            
        )       
    }
}

export default DisplayMovies;