import request from 'superagent';

const URL = `https://fathomless-fortress-68501.herokuapp.com`;  // update with Heroku

export async function userSignUp(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({ email, password })

    return response.body;  //id, email, token
}

export async function userSignIn(email, password) {
    const response = await request
        .post(`${URL}/auth/signin`)
        .send({ email, password })

    return response.body;
}

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
        .post(`${URL}/api/favorite`)
        .set('Authorization', token)
        .send({ newFavorite })

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