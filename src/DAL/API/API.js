const API_URL = 'http://127.0.0.1:8000/';

export const signIn = async (body) => {
    const response = await fetch(`${API_URL}api-token-auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    return await processResponse(response);

};

export const deleteCommnet=async(id)=>{
    const response = await fetch(`${API_URL}comments/${id}/`,{
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('token')}`
        },
    });
    return await processResponse(response);

};

export const createComment = async (body) => {
    const response = await fetch(`${API_URL}comments/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body),
    });
    return await processResponse(response);

};

export const getProducts = async (page) => {
    const response = await fetch(`${API_URL}product/?offset=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    });
    return await processResponse(response);
};

export const orderProduct = async (body) => {
    const response = await fetch(`${API_URL}orderedproduct/`, {
        method: "POST",
        headers: {
            'Content-Type': `application/json`,
            'Authorization': `JWT ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(body),
    });
    return await processResponse(response)

}

export const getProductsDetails = async (id) => {
    const response = await fetch(`${API_URL}product/${id}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await processResponse(response);
};

export const GetOrder = async (id) => {
    const response = await fetch(`${API_URL}order/${id}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('token')}`
        },
    });
    return await processResponse(response);
};
export const CreateOrder = async (body) => {
    const response = await fetch(
        `${API_URL}order/`, {
            method: "POST",
            headers: {
                'Content-Type': `application/json`,
                'Authorization': `JWT ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(body),
        });
    return await processResponse(response)

}


export const UserIn = async (body) => {

    return fetch(`${API_URL}users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),

    })


};

export const addAddress = async (body) => {
    const response = await fetch(`${API_URL}addresses/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('token')}`

        },
        body: JSON.stringify(body),

    })
    return await processResponse(response);
};
export const deleteAddress = async (id) => {
    const response = await fetch(`${API_URL}addresses/${id}/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('token')}`,
        },
    })
    return await processResponse(response);
};
export const verifyToken = async (body) => {
    const response = await fetch(`${API_URL}api-token-verify/`, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),

    })
    return await processResponse(response);
};
export const patchUserData = async (body, id) => {
    const response = await fetch(`${API_URL}users/${id}/`, {

        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),

    })
    return await processResponse(response);
};
export const patchAddress = async (id, body) => {
    const response = await fetch(`${API_URL}addresses/${id}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),
    })
    return await processResponse(response);
};

export const getUser = async () => {
    const response = await fetch(`${API_URL}users/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('token')}`
        },
    });
    return await processResponse(response);
};

export const getAddress = async () => {
    const response = await fetch(`${API_URL}addresses/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('token')}`
        },
    });
    return await processResponse(response);

};



export const processResponse = async (response) => {
   try{const status = response.status;
       const result = await response.json();

       if (status >= 400) {
           throw await result;
       } else {
           return result;
       }}
       catch (e) {
       console.log(e)

       }
};





