import MenuItem from './MenuItem'

import '../styles/Menu.scss'

import Image1 from '../assets/grid_image1.png'
import Image2 from '../assets/grid_image2.png'
import Image3 from '../assets/grid_image3.png'
import Image4 from '../assets/grid_image4.png'
import Image5 from '../assets/grid_image5.png'
import Image6 from '../assets/grid_image6.png'



const Menu = () => {
  return (
    <div className="menu">
        <div className="green-tag">Our Menu</div>
        <h2>Explore Our Menu</h2>
        <div className="menuitem-con">
            <MenuItem imgsrc={Image1}/>
            <MenuItem imgsrc={Image1}/>
            <MenuItem imgsrc={Image3}/>
            <MenuItem imgsrc={Image4}/>
            <MenuItem imgsrc={Image5}/>
            <MenuItem imgsrc={Image6}/>
            <MenuItem imgsrc={Image3}/>
            <MenuItem imgsrc={Image5}/>
            <MenuItem imgsrc={Image1}/>
        </div>
    </div>
  )
}

export default Menu