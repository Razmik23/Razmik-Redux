import React from "react";


const Modal = (props) => {


  return <div className={'G-modal-section'}>
    <div className='P-background' onClick={props.close}/>
    <div className="P-modal-container">
      {props.children}
    </div>
  </div>
}
export default Modal