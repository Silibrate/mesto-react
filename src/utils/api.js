 class Api {

  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }

  handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  UserInfo() {
    return fetch(this.url + `/users/me`, {
      method: 'GET',
      headers: this.headers
    })
      .then(this.handleResponse)
  }

  updateInfo(data) {
    return fetch(this.url + `/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.username,
        about: data.userjob
      })
    })
      .then(this.handleResponse)
  }

  getInitialCards() {
    return fetch(this.url + `/cards`, {
      method: 'GET',
      headers: this.headers,

    })
      .then(this.handleResponse)
  }

  createCard(data) {
    return fetch(this.url + `/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.cardname,
        link: data.photo
      })
    })
      .then(this.handleResponse)
  }

  deleteCard(data) {
    const id = data;
    return fetch(this.url + `/cards/` + id, {
      method: 'DELETE',
      headers: this.headers,
      body: JSON.stringify({ id })
    })
      .then(this.handleResponse)
  }

  likeCard(data) {
    const id = data;
    return fetch(this.url + `/cards/` + id + `/likes/`, {
      method: 'PUT',
      headers: this.headers,
    })
      .then(this.handleResponse)
  }

  dislikeCard(data) {
    const id = data;
    return fetch(this.url + `/cards/` + id + `/likes/`, {
      method: 'DELETE',
      headers: this.headers,
      body: JSON.stringify({ id })
    })
      .then(this.handleResponse)
  }

  updateAvatar(data) {
    return fetch(this.url + `/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(this.handleResponse)
  }

  getAllNeededData() {
    return Promise.all([this.getInitialCards(), this.UserInfo()])
  }
}

const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: '470ad620-2a28-423a-83e5-333c76ae2cdf',
    'Content-Type': 'application/json'
  }
}
const api = new Api(config)

export default api
