import Unsplash from 'unsplash-js';

var username = 'boost';
var clientId = 'd9d9b6bb6e8151feb35fefead943df411715301f07c49c882f5d35282aecdcbc';

const unsplash = new Unsplash({
  applicationId: clientId,
  secret: "c799248b81335f2dd8a4728771b487d772a5432692c40d7e8c3118bfc7fb0a8e",
  callbackUrl: "http://jcano.me"
});

function randomElement(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}
console.log("HI THERE")
unsplash.users.likes(username)
  .then(resp => resp.json())
  .then(json => {
    // Your code
    console.log(randomElement(json.map(obj => obj.urls.full)))
  });

