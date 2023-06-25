import React from 'react'
import { useState,useEffect } from 'react'

const Component = () => {

    let [state,setState] = useState([])
    let [input,setInput] = useState([])

    let change = (event) => {
        setInput(state.filter(f => f.first_name.toLowerCase().includes(event.target.value)))
    }

   
    let apiData = () => {

        fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(data => {
            setState(data.data)
            setInput(data.data)
        })
    }

    useEffect( () => {
        apiData()
    },[])
  return (
   <>
                <h1 className='heading'>SEARCH THE LIST BY FIRST NAME</h1>
                <input className='searchbox' type="text"  onChange={change} placeholder='enter the first name here'/>
                 {
                      input.map((elem) => {
                        return(
                            <>
                                 <div className='id'>
                                          <div>{elem.id}</div>
                                 </div>
                                 <div className='avatar_border'>
                                            <img src={elem.avatar} alt="" height="190px" width="240px" />
                                </div>

                                 <div className='firstname'>
                                         <h1>{elem.first_name}</h1>
                                </div>

                            </>
                    )
                })
            }      
   </>
  )
}

export default Component