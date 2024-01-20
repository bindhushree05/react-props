import { Component } from "react";
import "./App.css"
import imageData from './components/Datacomponents';


export default class AppClass extends Component{
  

  // code here
  images=function (){
    return imageData.map((item)=>{
      console.log(item)
      return <img  key={item.id} id={item.id} className="images" src={item.img}></img>
    })
  }

  render(){
    return <>
           <div className="h1Container"><h1>Kalvium gallary</h1></div>
           <div className="imagesContainer">{this.images()}</div>
           </>
  }
}