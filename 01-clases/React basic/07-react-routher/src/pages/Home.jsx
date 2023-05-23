import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2>Home Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate enim
        consequuntur soluta placeat autem! Reiciendis, quo quos illo a unde eum
        repellendus qui quas minima, facilis voluptatibus, vero odit dolores.
      </p>

      <p>
        <span>
          Visita la página de <Link to="heroes">héroes</Link> 🦸
        </span>
      </p>
    </>
  );
};

export default Home;
