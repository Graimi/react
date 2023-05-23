import React from 'react';

const Review = ({ title, score }) => {
  console.log('Renderizando review');
  return (
    <div>
      <p>
        {title} || {score}
      </p>
    </div>
  );
};

export default Review;
