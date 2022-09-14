/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */

// External Dependencies
import React from 'react';
import { PropTypes } from 'prop-types';
import { Col, Row, Container } from 'react-bootstrap';

// Internal Dependencies
import MovieCard from '../movie-card/movie-card';

// Component
function FavoriteMovies(props) {
  // Props
  const {
    favoriteMovies,
    movies,
    user,
  } = props;

  // Methods
  const getFavoriteMovies = () => {
    if (!favoriteMovies) {
      return <p>Favorite Some Movies To See Your List</p>;
    }

    return movies.map((mov) => {
      if (favoriteMovies.includes(mov._id)) {
        return (
          <Col
            xxl={3}
            xl={4}
            lg={6}
            md={6}
            sm={12}
          >
            <MovieCard movieData={mov} key={mov._id} favorite={mov._id} user={user} />
          </Col>
        );
      }

      return <div />;
    });
  };

  // JSX
  return (
    <Container fluid="xxl" className="favorite-movies-list-container">
      <hr className="favorite-movies-divider" />
      <Row>
        {getFavoriteMovies()}
      </Row>
    </Container>
  );
}

// PropTypes
FavoriteMovies.propTypes = {
  favoriteMovies: PropTypes.arrayOf(PropTypes.string),
  movies: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
  })).isRequired,
  user: PropTypes.string.isRequired,
};

FavoriteMovies.defaultProps = {
  favoriteMovies: [''],
};

// Export
export default FavoriteMovies;
