import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        //As this is a free API and our React app contains only front-end, so show here.
        //But in production env, we should put key on the back-end as security consideration.
        key: 'cfcef6314d9540b186eb4d3a6062e345'
    }
}   
)