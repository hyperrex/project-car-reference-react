import jwt from 'jsonwebtoken';
import getUser from '../api/getUser'

export default async function checkAuthentication() {
  try {
    const token = localStorage.getItem('token');

    if (!token) {
      localStorage.removeItem('token');
      return null;
    }

    const { identity: user_id, expiration } = jwt.decode(token);

    if (expiration * 1000 < Date.now()) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return null;
    }

    const user = await getUser(user_id);

    return { user, token };
  } catch (error) {
    console.error(error);
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    return null;
  }
}


