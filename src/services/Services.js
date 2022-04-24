import axios from 'axios';

export default class Services {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://biggest-roman-back.herokuapp.com/',
      timeout: 1000,
    });
  }

  async search(text) {
    const data = await this.axios.post('/search', { text });
    return data;
  }
}
