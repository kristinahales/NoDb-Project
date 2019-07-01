import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
import DisplayMovies from './Components/DisplayMovies';
import Form from './Components/Form';
import Footer from './Components/Footer'



class App extends Component {
  constructor(){
    super()
      this.state = {
        movieCollection: [],
      }
      this.deleteMovie = this.deleteMovie.bind(this);
      this.addMovie = this.addMovie.bind(this);
      this.editRating = this.editRating.bind(this);
      this.selectGenre = this.selectGenre.bind(this);
      
  }

  componentDidMount() {
    axios.get('/api/movies')
    .then(res => {
      console.log(res.data)
      this.setState({movieCollection: res.data})
    })
    .catch(err => {
      console.log('err from server', err)
    })
  }

  deleteMovie(id) {
    axios.delete(`/api/movies/${id}`)
    .then(res => {
      this.setState({movieCollection: res.data})
    })
    .catch(err => {
      console.log('err from server', err)
    })
  }

  addMovie(movie) {
    return axios.post('/api/movies', movie)
    .then(res => {
      console.log('this is res.data', res.data)
        this.setState({

            movieCollection: res.data
        })
    })
    .catch(err => console.log('err', err))
  }


    editRating = (rating, id) => {
    axios
      .put(`/api/movies/${id}?newRating=${rating}`)
      .then(res => {
        this.setState({ movieCollection: res.data });
      })
      .catch(err => {
        console.log('err after update', err);
      });
    }

    selectGenre(e) {
      if(!e.target.value) return;
      this.setState({
        genre: e.target.value
      }, () => {
        axios.get(`/api/movies?genre=${this.state.genre}`)
          .then(res => this.setState({ movieCollection: res.data }))
      })
    }



  render() {

    return (
      <div>
        <Header selectGenre={this.selectGenre}/>
        <div className='large-container'>
        {this.state.movieCollection.map(movie => {
          return (
            <DisplayMovies key={movie.id}
                movie={movie}
                deleteMovie={this.deleteMovie}
                editRating={this.editRating}
                
              />
              
          );
          })}
          <Form addMovie={this.addMovie}/>
        </div>
        <Footer />
    </div>
    
    )
  }
}

export default App;
