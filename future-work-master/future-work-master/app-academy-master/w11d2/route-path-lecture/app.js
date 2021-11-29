const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('view', 'views');

app.get('/', (req, res) => {
    const productPaths = [
        '/product/1',
        '/product/2',
        '/product/3',
        '/product/asdf',
    ];
    const productsPaths = [
        `/products`,
        `/our-products`,
        `/product`,
        `/prodcts`,
        `/productts`,
        `/productos`
    ];
    res.render('index', { productPaths, productsPaths });
});

// /product/1
// /product/2

app.get('/product/:id(\\d+)', function (req, res) {
    const productId = parseInt(req.params.id, 10);

    res.send(`Product ID: ${productId}`);
});

// app.get('/*produ?ct+s?', function (req, res) {
//     res.send(`${res}`);
// });

app.get(/^\/((our-)?produ?ct{1,2}s?)|productos\/?$/i, function (req, res) {
    if (!req.path.toLocaleLowerCase().startsWith('/products')) {
        res.redirect('/products');
    }
    res.send(`${res}`);
});

const port = 8081

app.listen(port, () => console.log(`Listening to port ${port}`));
