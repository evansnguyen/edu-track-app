import axios, {AxiosResponse} from 'axios';

const API_BASE_URL = 'https://e3k1u4orz1.execute-api.ap-southeast-2.amazonaws.com/prod/auth';

const apiRequest = async (endpoint:string, method:string, data:any) => {
    try {
        const response = await axios({
            method: 'POST',
            url: API_BASE_URL,
            data: {
                ...data,
                operation: endpoint
            }
        });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response ? error.response.data.message : error.message);
    }
};

export const signUp = async (username:string, password:string, email:string) => {
    if (!username || !password) {
        throw new Error('username and password are required.');
    }
    return await apiRequest('signup', 'POST', {username, password, email});
};

export const verifyAccount = async  (username:string, code: string) => {
    if (!username || !code) {
        throw new Error('username and code are required.');
    }
    return await apiRequest('verify', 'POST', {username, code});
};

export const login = async (username:string, password: string) => {
    if (!username || !password) {
        throw new Error('username and password are required.');
    }
    return await apiRequest('login', 'POST', {username, password});
};

export const logout = async () => {
    const accessToken = window.localStorage.getItem('accessToken')
    return await apiRequest('logout', 'POST', {accessToken});
};

export const getUser = async () => {
    const accessToken = window.localStorage.getItem('accessToken')
    return await apiRequest('getUser', 'POST', {accessToken});
};

export const refreshToken = async () => {
    const refreshToken = window.localStorage.getItem('refreshToken')
    return await apiRequest('getSession', 'POST', {refreshToken});
};