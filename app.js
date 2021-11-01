const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views enginee', 'ejs');

const nodemailer = require('nodemailer');
const credentials = require('./credentials');
const mailTransport = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    auth: {
        user: credentials.sendgrid.user,
        pass: credentials.sendgrid.password
    }
});

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/order', (req, res) => {
    console.log(req.body);
    async function go(req) {
        try {
            const result = await mailTransport.sendMail({
                from: '"Leo" <item907@gmail.com>',
                to: req.body.order_email,
                subject: '訂購明細',
                html: '<h1>訂購明細</h1>' +
                    `<h2>訂購人:${req.body.order_name}</h2>` +
                    `<h2>連絡電話:${req.body.order_phone}</h2>` +
                    `<h2>地址:${req.body.order_address}</h2>` +
                    `<h2>訂購商品:${req.body.order_item}</h2>` +
                    `<h2>數量:${req.body.order_num}</h2>` +
                    `<h2>此郵件為自動發送,請勿直接回覆</h2>`,
                text: '訂購明細\n' +
                    `訂購人:${req.body.order_name}\n` +
                    `連絡電話:${req.body.order_phone}\n` +
                    `地址:${req.body.order_address}\n` +
                    `訂購商品:${req.body.order_item}\n` +
                    `數量:${req.body.order_num}\n` +
                    `此郵件為自動發送,請勿直接回覆`
            });
            console.log('mail send successfully:', result);
        } catch (err) {
            console.log('could not send mail:' + err.message);
        }
    };
    go(req);
    res.render('order.ejs', req.body);
});

app.listen(8888, () => {
    console.log('server run on port 8888');
});