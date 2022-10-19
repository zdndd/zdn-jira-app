import { useState } from "react"

export const SearchPanel = (param,setParam) => {
   
    const [users,setUsers] = useState([])
    

    return <form>
        <input type="text"  value={param.name} onChange={evt => setParam({
            ...param,
            name:evt.target.value
        })}/>
        <select value = {param.personId} onChange={evt => setParam({
            ...param,
            personId:evt.target.value
        })}>
            <option value={''}>负责人</option>
        </select>
    </form>
}