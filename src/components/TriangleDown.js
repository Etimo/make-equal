import React from 'react';
import {Icon} from 'semantic-ui-react'
import '../css/triangleDown.css';

const TriangleDown = (props)=>{
  return(
    <a href={`#${props.href}`} className="triangleDown"> <Icon size="huge" name="angle down"/></a>
  );
}
export default TriangleDown;