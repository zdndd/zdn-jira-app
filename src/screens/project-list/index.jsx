
import { useEffect, useState } from "react"
import {SearchPanel} from "./search-panel"
import { List } from './list'
const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [param,setParam] = useState({
        name:'',
        personId:''
    })
    const [list,setList] = useState([])

    useEffect(() =>{
        fetch(` http://localhost:3001/projects`).then(async response =>{

            if(response.ok){  
                setList(await response.json())
            }
        })
    },[param])

    return <div>
        <SearchPanel param={param} setParam={setParam}/>
        <List list={list}/>
    </div>
}