import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from  './brain.png'
const Logo =()=>{
return(

   <div style={{display:'inline-block'}} className="ma4 mt0">
<Tilt  className=' Tilt br2 shadow-2'> 
      <div  className='pa3 tc'  style={{ height: '160px', width:'160px'  }}>
       <img style={{paddingTop:'12px'}} src={brain} alt='brain' />
      </div>
    </Tilt>
   </div>
)

};
export default Logo;