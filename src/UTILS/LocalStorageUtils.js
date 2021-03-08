export const USER = 'USER';

export function setUserStorage(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(USER, stringyUser);
}

export function getStoredUserToken() {
    const user = localStorage.getItem(USER);
    const parsedUser = JSON.parse(user);

    if (parsedUser) {
        return parsedUser.token;
    } else {
        return {
            token: '',
        }
    }
}