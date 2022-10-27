export const getRandomWord = () => {
    // this.setState({
    //     fromFetch: true,
    //     loading: true,
  
    // })
    fetch("https://random-word-api.herokuapp.com/word?length=5&&number=4")
        .then(response => response.json())
        .then((responseJson) => {
            console.log('getting data from fetch', responseJson)
            console.log('first word is:', responseJson[0])
            // this.setState({
            //     loading: false,
            //     dataSource: responseJson
            // })
        })
        .catch(error => console.log(error))
  }