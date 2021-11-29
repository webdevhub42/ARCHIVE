const jwt = require('json-web-token');

const payload = {
    hello: 'world'
}
const secret = 'SHHHH';

const token = jwt.sign(
    payload,
    secret,
    { expriresIn: 604800 }
)
const atob = require('atob');

const decoded = atob(token.split('.')[1]);
//header tells what the algo was used, alg:, typ:
//payload - make sure secret is here
//signature is to make sure that this token came from us. everyone knows drivers license but it's state issued, hashed output of header + payload +secret
