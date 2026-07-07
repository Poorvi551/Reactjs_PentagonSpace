import React from 'react'

const App = () => {
  let users=[
    {id:1,name:'Rajesh',image:"https://media.istockphoto.com/id/1919265357/photo/close-up-portrait-of-confident-businessman-standing-in-office.jpg?s=612x612&w=0&k=20&c=ZXRPTG9VMfYM3XDo1UL9DEpfO8iuGVSsyh8dptfKQsQ="},
    {id:2,name:'Maasha',image:""},
    {id:3,name:'Tom',image:"https://img.magnific.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80"}
  ]
  return (
    <>
      <h1>Users</h1>
      <div style={{display:"flex",gap:"20px"}}>
        { users.map((x)=>{
          return<div>
            <h2>{x.id}</h2>
            <h3>{x.name}</h3>
            <img src={x.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ANz49vSwixmIZwGMtfJb8KO8raLm81ZN35BTJhoiGA&s"} height={"200px"} alt=""/>
          </div>
        })
        }</div>
    </>
  )
}

export default App
