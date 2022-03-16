import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router";


const Api = () =>{
let {topic,id,} = useParams()
let [noAPI,setNoAPI] = useState(false)
let [report,setReport] = useState([])
console.log("topic is", topic)


    useEffect(()=>{
        setNoAPI(false)
        console.log(`making request to this link: https://swapi.dev/api/${topic}/${id}`)
        axios.get(`https://swapi.dev/api/${topic}/${id}`)
        .then(response => {
            console.log(response)
            setReport(response.data)
      }).catch(err=>{
            setNoAPI(true)
            console.log(noAPI)
            console.log("error 404... no API found." + err);
      });

    },[topic,id])
    return <>
    <div>
        {noAPI == true?
        <div>
            <h3>These aren't the droids you're looking for</h3>
            <img src="https://www.hellomagazine.com/imagenes/film/20220118131127/obi-wan-kenobi-disney-plus-details-everything-to-know/0-638-559/star-wars-ep-3-t.webp?filter=high" alt="dead pic" />
        </div>:topic == "films"?
        <div>
            <ul>
                <li>Title: {report.title}</li>
                <li>Director: {report.director}</li>
                <li>Producer: {report.producer}</li>
                <li>Release Date: {report.release_date}</li>
            </ul>
        </div>:topic == "people"?
        <div>
            <ul>
                <li>Name: {report.name}</li>
                <li>Gender: {report.gender}</li>
                <li>Height: {report.height}</li>
                <li>Eye Color: {report.eye_color}</li>
            </ul>
        </div>:topic == "planets"?
        <div>
            <ul>
                <li>Name: {report.name}</li>
                <li>Diameter: {report.diameter}</li>
                <li>Population: {report.population}</li>
                <li>Climate: {report.climate}</li> 
            </ul>
        </div>:topic == "species"?
        <div>
            <ul>
                <li>Name: {report.name}</li>
                <li>Classification: {report.classification}</li>
                <li>Language: {report.language}</li>
                <li>Homeworld: {report.homeworld}</li>
            </ul>
        </div>:topic == "starships"?
        <div>
            <ul>
                <li>Name: {report.name}</li>
                <li>Length: {report.length}</li>
                <li>Model: {report.model}</li>
                <li>passengers: {report.passengers}</li>
            </ul>
        </div>:topic == "vehicles"?
        <div>
            <ul>
                <li>Name: {report.name}</li>
                <li>Manufacturer: {report.manufacturer}</li>
                <li>Model: {report.model}</li>
                <li>passengers: {report.passengers}</li>
            </ul>
        </div>:null}
    </div>
    </>


} 
export default Api