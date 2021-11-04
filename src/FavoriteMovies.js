import React from 'react';

const FavoriteMovies=(props)=>{
  return(
    <ol>
    {props.profiles.map(profile=><li>{`${props.users[profile.userID].name} favorite movie is ${props.movies[profile.favoriteMovieID].name}`}</li>)}
    </ol>
  );
}

export default FavoriteMovies;