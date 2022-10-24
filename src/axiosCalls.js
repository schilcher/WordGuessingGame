import axios from 'axios';

const getRandomWord = () => {
    console.log('getRandomWord');
    
    axios.get("https://random-word-api.herokuapp.com/word")
        .then(response => {
            console.log('getting data from axios', response.data);
            setTimeout(() => {
                return(response.data);
            }, 2000)
        })
        .catch(error => {
            console.log(error);
        });
}