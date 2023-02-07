let tbody = document.getElementById('tbody');
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {

    console.log(response.data);
    response.data.map((val, idx) => {
      const element1 = document.createElement('tr');
      let userid = document.createElement('td');
      userid.innerText = `${val.userId}`
      let id = document.createElement('td');
      id.innerText = `${val.id}`
      let title = document.createElement('td');
      title.innerText = `${val.title}`
      let body = document.createElement('td');
      body.innerText = `${val.body}`

      element1.appendChild(userid);
      element1.appendChild(id);
      element1.appendChild(title);
      element1.appendChild(body);

      tbody.appendChild(element1);})
  })
  .catch((error) => {

    console.log(error);
  })


