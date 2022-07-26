import React from 'react'
import { useState } from 'react'


const LoginSettings = ()=>{
    const [state,setState] = useState( {
        Title:'',
        Description:'',
        TitleSize: '',
        DescriptionSize:'',
        TitleColor:'',
        DescriptionColor:'',
        image:''
    } )
  
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }
    const uploadImage = (e) => {
        const element = e.currentTarget
        const fileList = element.files;
        console.log(element.files)
        if (fileList && fileList?.length) {
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            console.log(reader)
         
            setState({...state,image:reader.result})
          });
          reader.readAsDataURL(fileList[0]);
        }
      }
      const saveChanges = ()=>{
        localStorage.setItem('state', JSON.stringify(state));
      }

    
    return(<div className='P-full-div'>
        <div className='settings'>

        
        <div className='inputDiv'>
            <input
                className='Text' 
                onChange={handleChange}
                type = 'text'
                placeholder='Title'
                name='Title'/> 
            <input 
                placeholder='FontSize px'
                className='Text' 
                onChange={handleChange}
                type = 'number'
                name = 'TitleSize'
                min = {20}
                max = {50}/> 
            <input 
                className = 'color'
                type = 'color'
                onChange={handleChange}
                name = 'TitleColor'/> 

        </div>
        <div className='inputDiv'>
            <input
                className='Text' 
                onChange={handleChange}
                type = 'text'
                placeholder='Description'
                name='Description'/> 
            <input 
                placeholder='FontSize px'
                className='Text' 
                onChange={handleChange}
                type = 'number'
                name = 'DescriptionSize'
                min = {20}
                max = {40}/> 
            <input 
                className = 'color'
                type = 'color'
                onChange={handleChange}
                name = 'DescriptionColor'/> 
            
        </div>
        <div className='P-file'>
            <p>BackgroundImage</p>
            <input 
            type = 'file'
            onChange={uploadImage}/>
            </div>
        
        <button onClick = {saveChanges} className='P-save'>Save</button>
    </div>
    <div className='changeDiv' style = {{backgroundImage:`url('${state.image}')`}}>
        <h1  style={{fontSize:state.TitleSize+'px', color:state.TitleColor}}>{state.Title}</h1>
        <p style = {{fontSize:state.DescriptionSize+'px',color:state.DescriptionColor}}>{state.Description}</p>

    </div>
            


    </div>


    )

}
export default LoginSettings