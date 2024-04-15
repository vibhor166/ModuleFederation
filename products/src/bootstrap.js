import faker from 'faker';

const mount = (el) => {
    let products ='';

    for(let i=0; i<5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }

    el.innerHTML = products
};

// Context/Situation #1
// When we are running this app in development in isolation
// We are using our local index.html file
// Which definitely has an element with id of 'dev-products'
// We want to immediately render out app into that element

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if(el) {
        mount(el);
    }
}

//Context 2
// We are running this file in development or production through the container app 
// There is no guarantee that an element with that specific id ('dev-products') exists
// WE DO NOT WANT TO IMMEDIATELY RENDER THAT APP

export {mount};