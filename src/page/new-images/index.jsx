import React, {useEffect, useState} from "react";

const NewImages = () => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getImagesList()
  }, [])

  const getImagesList = async () => {
    setIsLoading(true)
  const result = await fetch('https://jsonplaceholder.typicode.com/photos', {
      method: 'GET'
    })
      .then(data => {
        return data.json()
      }).then(data => {
        return data
      })
      .catch(err => {
        console.log(err, 'errrrr')
      })


    if (result.length) {
      setImages(result)
      console.log(result)
      setIsLoading(false)
    }
  }
return <div className="P-full-image">
<div className='P-images-list'>
    {isLoading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div>: images.length? images.map((item, index) => {
      return <div className='P-image-box'>
        <div style={{backgroundImage: `url('${item.url}')`}}/>
        <h3>{item.title}</h3>
        </div>
    }) : <div>Empty list</div>}

  </div>
  </div>
}
export default NewImages