import { useState } from "react"
import StateHook from "./components/useState/StateHook"
import Text from "./components/useState/Text"



function App() {

  const [isShow, setIsShow] = useState(true)

  return (
    <>
      {/* <Card title="1" name="Kasam" />   
      <Card title="2" name="Sirish" />   
      <Card extra = "extraCard"/>   
      <CardContainer title="4" name="Sonam" />  
      <SecondCard/>  */}

      {/* 
        lifecycles of react components
        1. initialize
        2. mount
        3. update
        4. unmount

        useEffect syntax:
        1. import useEffect from react
        2. useEffect(()=>{
            my logic here;
          }, [])
      */}



      <Text/>

      <button onClick={()=>{setIsShow(!isShow)}}>toggle</button>
      <br />
      <br />
      {isShow ? <StateHook/> : ""}
    </>
  )
}

export default App



// const Card = ()=>{
//   return(
//     <>
//       <div className="cardContainer">
//         <img src="" alt="" className="img"/>
//         <div className="info">
//           <h1>this is title1</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae officia eligendi facilis doloremque, voluptatum quia sapiente exercitationem quos iste tempora voluptate totam sit autem facere! Illum cum enim magnam. Officia.</p>
        
//         </div>
//       </div>
//     </>
//   )
// }
