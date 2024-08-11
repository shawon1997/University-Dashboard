import React from 'react'

const Theader = ({data}) => {
  return (
    <thead>
          <tr>
            {
                data?.map((item)=>{
                    return <th scope="col">{item}</th>
                })
            }
            
          </tr>
        </thead>
  )
}

export default Theader
