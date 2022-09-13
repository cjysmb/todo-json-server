import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const todoURL = '/todo';

const axiosRequest = () => {
    return axios.create({
        baseURL,
    })
}

export const fetchData = async (type='') => {
    try {
        let response = await axiosRequest().get(`${todoURL}?type=${type}`);
        return response;
    }

    catch (e) {
        console.log(e);
    }
}

export const fetchById = async (id) => {
    try {
        let response = await axiosRequest().get(`${todoURL}/${id}`);
        return response;
    }

    catch (e) {
        console.log(e);
    }
}

export const createOrUpdateData = async (type, params) => {
    try {
        let response;
        let request = await axiosRequest();
        if(type === "update")
            response = request.put(`${todoURL}/${params.id}/`, params);
        if(type === "create")
            response = request.post(`${todoURL}/`, params);

        return response;
    }

    catch (e) {
        console.log(e);
    }
}

export const removeData = async (id) => {
    try {
        let response = await axiosRequest().delete(`${todoURL}/${id}`, {
            data: {
                id
            }
        })

        return response;
    }

    catch (e) {
        console.log(e)
    }   
}