import React from 'react'
import { styled } from 'styled-components'

const Buttun = (props) => {
//   function plus1(){
//     props.onplus
//   }
  return (
    <div>
      <Buttunstyle onClick={props.onClick} back={props.back} width={props.width}>{props.text}</Buttunstyle>
    </div>
  )
}

export default Buttun

const Buttunstyle=styled.button`
    background-color: red;
    width:${(props)=>props.width};
    height: 50px;
    background-color: ${(props)=>props.back} ;
`
