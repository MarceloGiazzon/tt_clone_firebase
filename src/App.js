import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video';
import db from './config/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


function App() {

  let maxHeigth;
  if(window.innerHeight <= 800){
    maxHeigth = window.innerHeight;
  }
  const [video,setVideos] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())

    setVideos(videosList)
  }

  useEffect(() =>{
    getVideos();
  }, [])


  return (
    <div className="App" style={ {maxHeight: maxHeigth + "px"}}>
      <div className="app__videos">
        {video.map((item) =>{
          return(
            <Video
            likes={item.likes}
            messages={item.messages}
            shares={item.shares}
            name={item.name}
            description={item.description}
            music={item.music}
            url={item.url}
            />
            )}
        )}
        
        {/*<Video
          likes={128}
          messages={200}
          shares={330}
          name="Marcelo"
          description="test desc"
          music="Pink Floyd"
          url="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"/>
        */}
      </div>    
    </div>
  );
}

export default App;
