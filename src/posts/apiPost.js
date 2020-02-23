import { isAuthenticated } from "../auth";

export const create = (userId, token, post) =>{
   return fetch(`${process.env.REACT_APP_API_URL}/post/new/${userId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: post
    })
    .then(response => {
        console.log("Response:...", response);
        return response.json();

    }).catch(err => console.log(err));
};

export const list = (token) =>{
    const userId = isAuthenticated().user._id;
    return fetch(`${process.env.REACT_APP_API_URL}/posts/${userId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        return response.json();
    }).catch(error => console.log(error));
 };

 export const singlePost = (token,postId) =>{
    return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        return response.json();
    }).catch(error => console.log(error));
 };

 export const hasImage = (postId) =>{
    return  fetch(`${process.env.REACT_APP_API_URL}/post/photo/${postId}`,{
        method: "GET"
     }).then(response => {
        if(!response.error){
            return true
        }else{
            return false;
        }
     }).catch(err => console.log(err));
 }

 export const listByUser = (token,userId) =>{
    return fetch(`${process.env.REACT_APP_API_URL}/posts/by/${userId}`,{
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        return response.json();
    }).catch(error => console.log(error));
 };

 export const remove = (postId, token) =>{
    return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`,{
         method: "DELETE",
         headers: {
             Accept: "application/json",
             "Content-Type":"application/json",
             Authorization: `Bearer ${token}`
         }
     })
     .then(response => {
         return response.json();
     }).catch(err => console.log(err));
 };

 export const update = (postId, token, post) =>{
    //console.log("User data : ",user);
   return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: post
    })
    .then(response => {
        
        return response.json();

    }).catch(err => console.log(err));
};

export const like = (userId, token, postId, name) =>{
    //console.log("User data : ",user);

   return fetch(`${process.env.REACT_APP_API_URL}/post/like`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId,postId,name})
    })
    .then(response => {
        
        return response.json();

    }).catch(err => console.log(err));
};

export const unlike = (userId, token, postId) =>{
    //console.log("User data : ",user);
   return fetch(`${process.env.REACT_APP_API_URL}/post/unlike`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId,postId})
    })
    .then(response => {
        
        return response.json();

    }).catch(err => console.log(err));
};

export const comment = (userId, token, postId, comment) =>{
    //console.log("User data : ",user);
   return fetch(`${process.env.REACT_APP_API_URL}/post/comment`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId,postId,comment})
    })
    .then(response => {
        
        return response.json();

    }).catch(err => console.log(err));
};

export const uncomment = (userId, token, postId, comment) =>{
    //console.log("User data : ",user);
   return fetch(`${process.env.REACT_APP_API_URL}/post/uncomment`,{
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId,postId, comment})
    })
    .then(response => {
        
        return response.json();

    }).catch(err => console.log(err));
};



export const getUsersLikeApi = (postId, token) =>{
    return fetch(`${process.env.REACT_APP_API_URL}/users/like/${postId}`,{
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json();
    }).catch(error => console.log(error));
 };




