import request from 'superagent';

const URL = `https://fathomless-fortress-68501.herokuapp.com`;

export async function userSignUp(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })

    return response.body;
}

export async function userSignIn(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })

    return response.body;
}

// a lot of these functions could be made leaner by calling this function, which would reduce duplication
// async function makeRequest(url, param, token) {
//     const response = await request
//         .get(`${URL}${url}${param}`)
//         .set('Authorization', token);
//     return response.body;
// }

// export async function deleteThing(thingId, token) {
//     return await makeRequest('/api/thing/', thingId, token);
// }


export async function getAllStrains() {
    const response = await request
        .get(`${URL}/strains`)

    return response.body;
}

export async function getStrainByName(name) {
    const response = await request
        .get(`${URL}/name?search=${name}`)

    return response.body;
}

export async function getStrainDescriptionById(id) {
    const response = await request
        .get(`${URL}/description?search=${id}`)

    return response.body;
}

export async function getAllUserFavorites(token) {
    const response = await request
        .get(`${URL}/api/favorites`)
        .set('Authorization', token)

    return response.body;
}

export async function addUserFavorite(newFavorite, token) {
    const response = await request
        .post(`${URL}/api/favorites`)
        .set('Authorization', token)
        .send(newFavorite)

    return response.body;
}

export async function deleteUserFavorite(favoriteId, token) {
    const response = await request
        .delete(`${URL}/api/favorites/${favoriteId}`)
        .set('Authorization', token)

    return response.body;
}

export async function shareUserFavorite(favoriteId) {
    const response = await request
        .get(`${URL}/share/${favoriteId}`)

    return response.body;
}