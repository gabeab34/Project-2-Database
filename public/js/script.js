function data() {
  fetch("https://api.start.gg/gql/alpha")
    .then(function (rest) {
      return rest.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
data();
