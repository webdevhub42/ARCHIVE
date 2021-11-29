const word = "Wh0leFoods is a store";
const reg1 = /Who*leFoods/; // zero or more o's
const reg2 = /Who?leFoods/; // zero or one o's
const reg3 = /Who+leFoods/; // one or more o's
const reg4 = /Who.leFoods/; // any one character
const reg5 = /^Wholefoods/; // start of input 
const reg6 = /WholeFoods$/; // end of input 
const reg7 = /^Wh[ove]leFoods/; // multiple options of what it could be 
const reg8 = /Wh[aA-zZ]leFoods/; // range of characters must be in brackets
const reg9 = /Wh[^aA-zZ]leFoods/; // not any of the chars in the bracket

// console.log(reg1.test(word));
// console.log(reg2.test(word));
// console.log(reg3.test(word));
// console.log(reg4.test(word));
// console.log(reg5.test(word));
// console.log(reg6.test(word));
// console.log(reg7.test(word));
// console.log(reg8.test(word));
// console.log(reg9.test(word));



// Five parts of a URL 

// http://example.com:8042/over/there?name=red%20ferret#nose
/**
 *
 * Scheme (protocols): http, https, file
 * Authority: example.com:8042  (usually domain name can also have port)
 * Path: /over/there returned from the http request and follows the authority. If no path is shown it's assumed to be "/"
 * Query: ?name=ferret is everything that comes after the question mark including the ? mark
 * Fragment: #nose starts at the # and will load a page starting at the section where the fragment is
 */

