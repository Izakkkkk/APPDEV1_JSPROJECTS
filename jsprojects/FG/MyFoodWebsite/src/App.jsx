import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function App(){
  return(

    <>
    <Header/>
    <Body name= "Guest" food ="Unknown" isHealthy ="No" age = "0"/> 
    <Body name= "Mariano" food ="Sinigang" isHealthy ="Yes" age = "21"/> 
    <Body name= "Supsupin" food ="Pinakbet" isHealthy ="Yes" age = "46"/> 
    <Body name= "Follero" food ="Salad" isHealthy ="Yes" age = "22"/>
    <Body name= "Manalabe" food ="Adobo" isHealthy ="Yes" age = "22"/> 
    <Footer/>
    </>

  )
}