import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/photos', {
        headers: {
            Authorization: 'Client-ID MusvkCd8f2osDK2z9Nmj0nzVd2LtOVLW_sCCXj1AYvU'
        },
        params:{
            query: term,
        },
    });


    return response.data.results;



};

export default searchImages;