import React, { useEffect, useState } from 'react'
import "./Popular.css"
import data_product from '../Assets/data'
import Item from '../Item/Item'
import FadeInSection from '../FadeInSection/FadeInSectio';

const Popular = () => {
  return (
    <div className="popular" id="popular-section">
      <FadeInSection>
        <h1>Trending Now</h1>
      </FadeInSection>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <FadeInSection key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <Item
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
};

export default Popular
