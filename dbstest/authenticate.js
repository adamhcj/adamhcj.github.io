const CLIENTID = 'e4c21e05-7741-4dec-a4e3-9d428f7fa5f2'
const CLIENTSECRET = 'd419717c-c40a-4796-850f-bb921e4ca3af'

const redirecturi = 'http://piplupowo.github.io/dbstest/authenticate'

const authurl = `https://www.dbs.com/sandbox/api/sg/v1/oauth/authorize?client_id=${CLIENTID}&scope=Read&response_type=code&redirect_uri=${redirecturi}&state=0399&login_page=card`

const conjoinedstr = `${CLIENTID}:${CLIENTSECRET}`
const base64encoded = btoa(conjoinedstr)
console.log(base64encoded);

var url_string = window.location.href
var url = new URL(url_string);
const authcode = url.searchParams.get("code");
console.log(authcode);


const myHeaders = new Headers();
myHeaders.append('Authorization', `Basic ${base64encoded}`);

const myInit = {
method: 'POST',
headers: myHeaders,
mode: 'no-cors',
cache: 'default',
};

const myRequest = new Request(`https://www.dbs.com/sandbox/api/sg/v1/oauth/tokens?code=${authcode}&redirect_uri=${redirecturi}&grant_type=token`);

fetch(myRequest, myInit)
.then((response) => {
    console.log(response);
});
