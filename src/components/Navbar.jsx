import React from 'react'

const Navbar = ({ count, setCount }) => {
  return (
    <>
      <div className="nav">
        <div className="left">
            <img src="https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/300_186_4.png?$568_N_PNG$" alt="" />
        </div>
        <div className="right">
            <h3>Home</h3>
            <div className='cart'>
            <img src="https://img.freepik.com/premium-vector/vector-white-shopping-cart-icon_940471-658.jpg" alt="" height={'45px'} width={'45px'}/>
            <span id='addItem'>{count}</span>
            </div>
            <img src="https://static.vecteezy.com/system/resources/previews/023/465/823/non_2x/three-vertical-dots-menu-dark-mode-glyph-ui-icon-kebab-menu-represent-user-interface-design-white-silhouette-symbol-on-black-space-solid-pictogram-for-web-mobile-isolated-illustration-vector.jpg" alt="" height={'45px'} width={'45px'} />
        </div>
      </div>
    </>
  )
}

export default Navbar
