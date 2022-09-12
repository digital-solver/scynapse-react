/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  setUsername, setPassword, setEmail, setBirthday,
} from '../../actions/actions';

function UpdateUser(props) {
  const {
    userdata, setUsername, setPassword, setEmail, setBirthday,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(
      `https://kds-movie-api.herokuapp.com/users/${localStorage.getItem('user')}`,
      {
        Username: userdata.user.Username,
        Email: userdata.user.Email,
        Password: userdata.user.Password,
        Birthday: userdata.user.Birthday,
      },
      { headers: { Authorization: `Bearer ${userdata.token}`, 'Content-Type': 'application/json' } },
    ).then((res) => {
      alert(`${userdata.user.Username}'s profile has been updated.`);
      localStorage.setItem('user', userdata.user.Username);
      window.open(`/users/${userdata.user.Username}}`, '_self');
    }).catch((err) => console.log(err));
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Edit Profile: </h2>

      <label>
        Username:
        <input type="text" name="Username" defaultValue={userdata.user.Username} onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label>
        Email:
        <input type="email" name="Email" defaultValue={userdata.user.Email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label>
        Password:
        <input type="password" name="Password" required defaultValue="" onChange={(e) => setPassword(e.target.value)} />
      </label>

      <label>
        Date of Birth:
        <input type="date" name="DoB" defaultValue={userdata.user.Birthday} onChange={(e) => setBirthday(e.target.value)} />
      </label>

      <button type="submit">Submit</button>

    </form>
  );
}

UpdateUser.propTypes = {
  userdata: PropTypes.shape({
    user: PropTypes.shape({
      Username: PropTypes.string.isRequired,
      Password: PropTypes.string,
      Email: PropTypes.string.isRequired,
      Birthday: PropTypes.string.isRequired,
    }),
    token: PropTypes.string.isRequired,
  }).isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setBirthday: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { userdata } = state;
  return { userdata };
}

export default connect(mapStateToProps, {
  setUsername, setPassword, setEmail, setBirthday,
})(UpdateUser);
