import React from 'react';
import styled from 'styled-components';

const PortfolioItem = () => {
  return (
    <StyledPortfolioItem>
      <div className="logo">
        <img src="/algen-logo.png" alt="Algen.io Logo" />
      </div>
      <div className="info">
        <h3>Algen.IO</h3>
        <p>
          Algen.io is an AI e-commerce platform that increase profits and accelerate the operation process
          swiftly using advanced data and high-performance algorithms.
        </p>
        <p className="founder">FOUNDER AND CEO</p>
      </div>
    </StyledPortfolioItem>
  );
};

const StyledPortfolioItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .logo {
    img {
      max-width: 100px;
    }
  }

  .info {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .founder {
      color: #4caf50;
      font-weight: bold;
      margin-top: 1rem;
    }
  }
`;

export default PortfolioItem;