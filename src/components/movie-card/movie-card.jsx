/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import './movie-card.scss';

class MovieCard extends React.Component {
  render() {
    const { movieData, onMovieClick } = this.props;
    return (
      <Card className="movie-card" style={{ borderRadius: '5px' }}>
        <Card.Body style={{ backgroundColor: '#77685D', borderRadius: '5px' }}>
          <Card.Img variant="top" src={movieData.ImageURL} thumbnail="true" />
          <Card.Title style={{ color: 'white' }}>{movieData.Title}</Card.Title>
          <Button style={{ backgroundColor: '#058ED9' }} onClick={() => { onMovieClick(movieData); }}>See More</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    // Genre: PropTypes.shape({
    //   Name: PropTypes.string.isRequired,
    //   Description: PropTypes.string.isRequired,
    // }).isRequired,
    // Director: PropTypes.shape({
    //   Name: PropTypes.string.isRequired,
    //   Bio: PropTypes.string.isRequired,
    //   Birth: PropTypes.instanceOf(Date).isRequired,
    //   Death: PropTypes.instanceOf(Date),
    // }).isRequired,
    Featured: PropTypes.bool.isRequired,
    ImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
export default MovieCard;
