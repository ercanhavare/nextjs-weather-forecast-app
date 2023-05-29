import axios from "axios"

// http://api.weatherapi.com/v1/forecast.json
// http://api.weatherapi.com/v1/forecast.json?key=41b9ba945aca4c6dbe3124211232605&q=London&days=10&aqi=no&alerts=no
// http://api.weatherapi.com/v1/current.json?key=${weather_api}&q=${city}&aqi=no
const weather_api = process.env.WEATHER_API
export default async(req, res)=>{
   try{

   const city = req.query.city
    const weather = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${weather_api}&q=${city}&days=10&aqi=no&alerts=no`)
    const data = weather.data

    return res.status(200).json({message:"sent successfully", mainData:data})
   }catch(error){
    console.log(error)
    return res.status(500).json({message:"Internal server error"})
   }
}