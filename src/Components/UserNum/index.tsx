import { message } from "antd"
import { useEffect, useState } from "react"
import { GetUserNum } from "../../service/chart"

const UserNum =()=>{
    const[data,setData]=useState<number>(0)

    useEffect(()=>{
        asyncFetch()
    },[])

    const asyncFetch=async()=>{
        try{
            const{data,status}=await GetUserNum()
            if(status===200){
                setData(data)
            }
        }catch(error:any){
            message.error(error)
        }
    }
    return <div className='countNum'>{data}</div>
}

export default UserNum