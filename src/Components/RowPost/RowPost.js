import axios from '../../axios';
import YouTube from 'react-youtube';
import React,{useEffect,useState} from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import './RowPost.css';
function RowPost(props) {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [url,setUrl] = useState()
  const handleMovie = (id) => {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
     
      if(response.data.reults.length!==0){
        setUrl(response.data.results[0])
      }
    })
  }
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response) =>{
      setPosts(response.data.results)
     
     })
  }, [])
  return (
    <div className = 'row'>
        <h2>{props.title}</h2>
        <div className = 'posters'>
          {
            posts.map((obj)=>
              <img onclick={()=> handleMovie(obj.id)} className= {props.isSmall? 'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
            )
          }
             
    </div>
  {url &&  <YouTube opts= {opts} videoId={url.key}></YouTube>}
    </div>
  )
}

export default RowPost