export default {
  async send(path, method, data) {
    const baseURL = `http://localhost:3000` || process.env.API_URL;

    let myHeaders = new Headers();
    var raw = JSON.stringify(data);

    var requestOptions = {
      method: method,
      headers: myHeaders,
      // body: raw,
      redirect: "follow",
    };

    return fetch(`${baseURL}${path}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return { error: error };
      });
  },
};
