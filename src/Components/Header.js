import React from 'react';

export default function(props) {
    return (
        <div>
            <div className='header-container'>
                <header className='header-text'>My Movies</header>
                <select className='searchbar' onChange={props.selectGenre}>
                    <option value=''>Select Genre</option>
                    <option value='Musical'>Musical</option>
                    <option value='Romantic Comedy'>Romantic Comedy</option>
                    <option value='Family'>Family</option>
                    <option value='Drama'>Drama</option>
                    <option value="Action">Action</option>
                </select>
            </div>

            <div className='image-container'>
                <img className='img1' src='https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
                <img className='img2' src='https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
                <img className='img3' src='https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
            </div>
        </div>
    )
} 