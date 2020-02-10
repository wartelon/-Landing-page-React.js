
//import React from 'react';
import axios from 'axios';


const api = axios.create({ 
    baseURL:'http://api.github.com/users/wartelon/repos'
})

export default api;