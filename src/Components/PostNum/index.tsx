import { message } from "antd"
import { useEffect, useState } from "react"
import { GetPostNum } from "../../service/chart"

const PostNum =()=>{
    const[data,setData]=useState<number>(0)

    useEffect(()=>{
        asyncFetch()
    },[])

    const asyncFetch=async()=>{
        try{
            const{data,status}=await GetPostNum()
            if(status===200){
                setData(data)
            }
        }catch(error:any){
            message.error(error)
        }
    }
    return <div className='countNum'>{data}</div>
}

export default PostNum