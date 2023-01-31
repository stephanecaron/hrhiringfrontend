
import axios from 'axios'
axios.defaults.withCredentials=true; 

export async function getAllCharacters () { 
    return await axios.get("http://localhost:8000/getcharacters")
} 

export async function sendForm (data) { 
    try {
        return await axios.post("http://localhost:8000/post", {data});
    } catch (error) {
        console.error(error);
    }
} 

export async function deletePlayer (entryId) { 
    return await axios.delete(`http://localhost:8000/delete?id=${entryId}`)
} 