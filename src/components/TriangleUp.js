import React from 'react';
import {Icon} from 'semantic-ui-react'
// import '../css/triangleDown.css';

const TriangleUp = (props)=>{
  return(
    <a href={`#${props.link}`} className="triangleUp"> <Icon size="huge" name="angle up"/></a>
  );
}
export default TriangleUp;