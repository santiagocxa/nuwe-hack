import React, { useState, useEffect } from 'react';
import getUser from '../assets/utils/getUser';
import Repo from './Repo';

import '../assets/styles/Repos.css';

const Repos = ({ nickName }) => {
  const [repos, setRepos] = useState([]);

  const API = `https://api.github.com/users/${nickName}/repos`;

  //llamada a la API para traer los repositorios del usuario
  useEffect(() => {
    getUser(API).then((resp) => setRepos(resp));
  }, []);

  // pinta  los repo mediante map
  return (
    <div className='Repos'>
      {repos.map((item) => (
        <Repo key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Repos;
