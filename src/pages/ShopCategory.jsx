import React, { useContext, useState, useEffect } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item.jsx'
import { useLocation } from 'react-router-dom'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  const [sortOption, setSortOption] = useState('Default')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleSortChange = (option) => {
    setSortOption(option)
    setDropdownOpen(false)
  }

  // Filter products by category first
  const filteredProducts = all_product.filter(item => props.category === item.category)

  // Sort products based on sortOption
  let sortedProducts = [...filteredProducts]
  if (sortOption === 'Price: low to high') {
    sortedProducts.sort((a, b) => a.new_price - b.new_price)
  } else if (sortOption === 'Price: high to low') {
    sortedProducts.sort((a, b) => b.new_price - a.new_price)
  } // Default keeps original order

  useEffect(() => {
    if (location.state && location.state.scrollToBanner) {
      const element = document.querySelector('.shopcategory-banner')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location.state])

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p><span>Showing 1-12</span>out of 36 products</p>
        <div className="shopcategory-sort" onClick={toggleDropdown} style={{ cursor: 'pointer', position: 'relative' }}>
          sort by <img src={dropdown_icon} alt="" />
          {dropdownOpen && (
            <div className="sort-dropdown" style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              backgroundColor: 'white',
              border: '1px solid #ccc',
              boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
              zIndex: 10,
              width: '150px'
            }}>
              <div
                className={`sort-option${sortOption === 'Price: low to high' ? ' selected' : ''}`}
                onClick={() => handleSortChange('Price: low to high')}
                style={{ padding: '8px 12px', cursor: 'pointer' }}
              >
                Price: low to high
              </div>
              <div
                className={`sort-option${sortOption === 'Price: high to low' ? ' selected' : ''}`}
                onClick={() => handleSortChange('Price: high to low')}
                style={{ padding: '8px 12px', cursor: 'pointer' }}
              >
                Price: high to low
              </div>
              <div
                className={`sort-option${sortOption === 'Default' ? ' selected' : ''}`}
                onClick={() => handleSortChange('Default')}
                style={{ padding: '8px 12px', cursor: 'pointer' }}
              >
                Default
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
