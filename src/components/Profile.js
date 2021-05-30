import React, { useState, useEffect } from 'react';
import Repos from './Repos';
import getUser from '../assets/utils/getUser';

import '../assets/styles/Profile.css';

const API = 'https://api.github.com/users/';

//con este componente pintamos toda la presentacion del usuario

const Profile = ({ nickName }) => {
  const [user, setUser] = useState([]);

  //se hace un llamado a la API y luego carga los datos al estado
  useEffect(() => {
    getUser(API + nickName)
      .then((resp) => setUser(resp))
      .catch(setUser([]));
  }, []);

  const { avatar_url, name, blog, public_repos } = user;

  return (
    <div className='Profile'>
      <div className='Profile-description'>
        <img src={avatar_url} />
        <div className='Profile-details'>
          <h1>{name || 'Usuario No Econtrado'}</h1>
          <p>
            Web Site: <strong>{blog}</strong>
          </p>
          <p>
            Number Repos: <strong>{public_repos}</strong>
          </p>
        </div>
      </div>
      {<Repos nickName={nickName} />}
    </div>
  );
};

export default Profile;
