import './App.css';
import {useState,useEffect} from 'react'


function App() {
  const [images,setImages] =useState([]);
  const [isLoaded,setIsLoaded]=useState(false);

  function loadImage(){
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(
      (result)=>{
      console.log(result);
      const gallery=[];
      for (let i=0;i<result.data.memes.length;i++) {
        gallery.push(result.data.memes[i]);
      }
      setIsLoaded(true);
      setImages(gallery);
    })
  }

  useEffect(()=>{
    loadImage();
  },[]);


  if (!isLoaded) { return<div>
    Loading
  </div>; }
  else
  return (
    <div >
      <div className='container'>
        <div className='center'>
          <button  onClick={()=>loadImage()}>
          Reload
          </button>
        </div>
      </div>
     
      <ul >
        {
          images.map((imageSrc,index)=>(
            <div className='gallery'>
               <img src={imageSrc.url} key={index}>
              
              </img>
            </div>
           
          ))
        }
      </ul>
    </div>
  );
}

export default App;
