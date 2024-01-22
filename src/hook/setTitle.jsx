
import { useEffect } from "react";

const setTitle = title =>{
    useEffect(()=>{
    document.title = `House Hunter | ${title}`;
    },[title])
}

export default setTitle;