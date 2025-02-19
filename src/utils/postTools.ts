import axios from "axios"

export interface IPost {
    id:number;
    title : string;
    body : string;
    userId: 1;
}


const postsApiInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout : 1000
})

export const getPosts = async()=>{
    try{
        const response = await postsApiInstance.get('/posts')
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }

}

export const getPost = async(id:number)=>{
    try{
        const response = await postsApiInstance.get(`/posts/${id}`)
        const data = await response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
    
}

export const getPostComments = async(id:number)=>{
    try{
        const response = await postsApiInstance.get(`/posts/${id}/comments`);
        const comments = response.data;
        return comments;
    }
    catch(error){
        console.log(error);
    }
}

export const addPost = async(data:IPost) =>{
    try{
        const response = await postsApiInstance.post('/posts',JSON.stringify({data}),{
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            }
        });
        alert(`New Post : ${response.data.data.id}, title : ${response.data.data.title}, body : ${response.data.data.body}, post staus : ${response.status}`);

    }
    catch(error){
        console.log(error);
    }
}

