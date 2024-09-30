import axios from "axios";

const base_url=("https://ctserver-8b86.onrender.com")

 export const addcontacts=async(data)=>{
    return await axios.post(`${base_url}/contacts`,data)
}

export const getcontacts=async()=>{
    return await axios.get(`${base_url}/contacts`)
}

export const deleteVideo=async(id)=>{
    return await axios.delete(`${base_url}/contacts/${id}`)
}
export const addCategory=async(data)=>{
    return await axios.post(`${base_url}/category`,data)
}
export const getCategories=async()=>{
    return await axios.get(`${base_url}/category`)
}

export const deleteCategory=async(id)=>{
    return await axios.delete(`${base_url}/category/${id}`)
}
export const updatecategory=async(id,data)=>{
    return await axios.put(`${base_url}/category/${id}`,data)
}
export const checkEmailApi=async(email)=>{
    return await axios.get(`${base_url}/users?email=${email}`)
}
export const registerApi=async(data)=>{
    return await axios.post(`${base_url}/users`,data)
}

export const loginApi=async(email,password)=>{
    return await axios.get(`${base_url}/users?email=${email}&password=${password}`)
}

export const updateContact = async (id, data) => {
    return await axios.put(`${base_url}/contacts/${id}`, data)
}