import React, {useContext} from "react"
import ArtistCollectionCard from "../components/ArtistCollectionCard"
import {Context} from "../Context"
import Image from "../components/Image";
import { getClass } from "../utils/index";
import {useParams} from "react-router-dom"

function ArtistCollection(){
     const {allPhotos} = useContext(Context)
     const {artistName} = useParams()

     const photos = allPhotos.map((photo, i) => {
          if(photo.artist === artistName){
               return <Image key={photo.id} img={photo} className={getClass(i)} />
          }else{
               return null
          }
     });

     return(
          <div className="artist-collection container">
               <ArtistCollectionCard />
               <p className="artist-collection-title">Willy Serdan Collection</p>
               <main className="photos container">{photos}</main>
          </div>
     )
}

export default ArtistCollection

/**
 * name, description, image. (hardcoded) card-
 * get the name with useParams and render the photos
 *  props - name - image url
 * 
 * */