const form = document.getElementById('order_form');
const button = document.getElementById('create_order');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const product = {
        name: form.order_name.value,
        phone: form.order_phone.value,
        address: form.order_address.value,
        email: form.order_email.value,
        item: form.order_item.value,
        num: form.order_num.value
    }
    console.log('[訂購商品]', product);
    axios.post("/order/product", product)
        .then(res => {
            console.log("成功訂購商品", res);
            alert("成功訂購商品");
        })
        .catch(err => {
            console.log("發生錯誤", err);
            alert("發生錯誤");
        });

    form.order_name.value = '';
    form.order_phone.value = '';
    form.order_address.value = '';
    form.order_email.value = '';
    form.order_item.value = '';
    form.order_num.value = '';
});