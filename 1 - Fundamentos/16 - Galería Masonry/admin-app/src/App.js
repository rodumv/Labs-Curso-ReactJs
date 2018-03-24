import React from 'react'
import './App.css'
import Gallery from './components/gallery'
class App extends React.Component{
  constructor(){
    super();
  
  }
  render(){
    let images = [];
    let columns =  [350, 500, 750];
    const imageId = [635, 938, 837, 934, 288, 229, 839, 314, 256, 316, 92,643];
    for(let i = 0; i < imageId.length; i++){
      const size = 200 + Math.floor(Math.random()*10)*15;
      images.push("https://unsplash.it/250/" + size + "?image=" + imageId[i]);
    }
    return( <div>
            <Gallery images={images} columns={columns} />  
          </div>
          );    
  }
} 
export default App; 