import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { streamData, students, updateStudent } from './DummyData'

const StudentDetailsForm = () => {
    const {id}=useParams()
    const [studentMarks,setStudentMarks]=useState([])
   let studentDetail= students?.find((item)=>item.id==id)
   let subjects = streamData?.find((item)=>item.stream===studentDetail?.stream)



   useEffect(()=>{
    let data=[]
    subjects?.subject?.map((singleSub)=>{
        data.push({subject:singleSub,marks:0})
    })
    setStudentMarks([...data])
   },[subjects])
   const handleItemChange=(e,index)=>{
    e.preventDefault()
    studentMarks[index].marks=e.target.value
    setStudentMarks([...studentMarks])

   }

   const handleSubmit=()=>{
    students?.map((item)=>{
        if(item.id==id){
           return {...item,studentMarks}
        }else{
            return item
        }
    })
    updateStudent()
   }
  return (
    <div style={{background:"white"}}>
      <h1>{studentDetail?.name}</h1>

         {
            studentMarks?.map((item,index)=>{
                return <div className='d-flex'>
                       <div>{item.subject}  :- </div> <input type='number' max={100} value={item.marks} onChange={(e)=>handleItemChange(e,index)}/>
                </div>
            })
         }

         <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default StudentDetailsForm
