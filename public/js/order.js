const form = document.getElementById('order_form');
const button = document.getElementById('create_order');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('order').add({
        name: form.order_name.value,
        phone: form.order_phone.value,
        address: form.order_address.value,
        email: form.order_email.value,
        item: form.order_item.value,
        num: form.order_num.value
    });
    form.order_name.value = '';
    form.order_phone.value = '';
    form.order_address.value = '';
    form.order_email.value = '';
    form.order_item.value = '';
    form.order_num.value = '';
});