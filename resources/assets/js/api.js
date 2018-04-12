import axios from 'axios'
export const api = axios.create({
	baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    contentType : 'application/json',
  },
});

export const setAuthorizationToken = (token) => {
  if(token) {
    axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['authorization'];
  }
}

export const register = (email, password, name) =>{
  return api.post('register', {
    email: email,
    password: password,
    name: name
  })
};

export const login = (email, password) =>{
  return api.post('login', {
    email: email,
    password: password
  })
};

export const logout = () =>{
  return api.get('logout?token=' + localStorage.getItem('token'))
};

export const fetchUser = () => {
  return api.get('user')
};

export const updateParc = (id) => {
  return api.put('parc/' + id , {
    name: 'parc',
  })
}

window.updateParc = updateParc
