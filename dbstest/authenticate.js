const CLIENTID = 'e4c21e05-7741-4dec-a4e3-9d428f7fa5f2'
const CLIENTSECRET = 'd419717c-c40a-4796-850f-bb921e4ca3af'

const redirecturi = 'http://piplupowo.github.io/dbstestapi/authenticate'

const authurl = `https://www.dbs.com/sandbox/api/sg/v1/oauth/authorize?client_id=${CLIENTID}&scope=Read&response_type=code&redirect_uri=${redirecturi}&state=0399&login_page=card`

const conjoinedstr = `${CLIENTID}:${CLIENTSECRET}`
const base64encoded = btoa(conjoinedstr)

//get access token
response = fetch('https://www.dbs.com/sandbox/api/sg/v1/oauth/tokens', {
    method: 'POST',
    headers: {
        'Authorization': `Basic ${base64encoded}`,
    },
    body: `code=${authcode}&redirect_uri=${redirecturi}&grant_type=token`
});

console.log(response);