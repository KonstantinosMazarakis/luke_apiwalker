import React, {useState} from "react";
import { useHistory } from "react-router-dom";


const Form = () =>{
    let[topic,setTopic] = useState("films")
    let[id,setId] = useState()
    let history = useHistory()


    const submitHandler = (e)=>{
        e.preventDefault()
        history.push(`/${topic}/${id}`)
    }

    return<>
    <h1>STAR WARS</h1>
    <form onSubmit={submitHandler}>
    <label className="m-2">Search for: </label>
    <select onChange={(e)=>setTopic(e.target.value)}>
        <option value="films">films</option>
        <option value="people">people</option>
        <option value="planets">planets</option>
        <option value="species">species</option>
        <option value="starships">starships</option>
        <option value="vehicles">vehicles</option>
    </select>
    <label className="m-2">ID: </label>
    <input type="number" onChange={(e)=>setId(e.target.value)}/>
    <input type="submit" value="Search" className="btn btn-primary m-2"/>
    </form>
    </>
}
export default Form