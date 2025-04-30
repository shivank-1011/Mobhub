import React from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import data_product from '../Assets/data'
import FadeInSection from '../FadeInSection/FadeInSectio';

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <FadeInSection>
        <h1>Related Products</h1>
      </FadeInSection>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item, i) => {
          return (
            <FadeInSection key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <Item
                key={i}
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

export default RelatedProducts;