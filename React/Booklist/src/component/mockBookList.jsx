const mockBookList =()=>{
return (
    Promise.resolve(
        {
            books:[
                "name of the wind",
                "The Wise Man's Fear",
                "Kafka on the Shore",
                "The Master and the Margarita"
            ]
        })
    )
}
export default mockBookList