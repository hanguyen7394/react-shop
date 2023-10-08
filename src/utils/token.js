import Cookies from 'js-cookie';
import { STORAGE } from '../constant/common';

export const localToken = {
  get() {
    return JSON.parse(localStorage.getItem(STORAGE.TOKEN) !== undefined ? localStorage.getItem(STORAGE.TOKEN) : null);
  },
  set(token) {
    return localStorage.setItem(STORAGE.TOKEN, JSON.stringify(token));
  },
  remove() {
    return localStorage.removeItem(STORAGE.TOKEN);
  },
};

export const cookieToken = {
  get() {
    return JSON.parse(Cookies.get(STORAGE.TOKEN) !== undefined ? Cookies.get(STORAGE.TOKEN) : null);
  },
  set(token) {
    return Cookies.set(STORAGE.TOKEN, JSON.stringify(token));
  },
  remove() {
    return Cookies.remove(STORAGE.TOKEN);
  },
};

const tokenMethod = {
  get() {
    return cookieToken.get();
  },
  set(token) {
    return cookieToken.set(token);
  },
  remove() {
    return cookieToken.remove();
  },
};

export default tokenMethod;
