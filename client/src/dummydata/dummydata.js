import mouse from "../assets/mouse.jpg";
import keyboard from "../assets/keyboard.jpg";
import photoprofile from "../assets/photoprofile.jpg"

export let statusLogin = {'status': true};

export let dataProduct = [{
    name : 'Mouse',
    desc : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nesciunt possimus temporibus totam, ut vero.     ',
    price : 600000,
    stock : 700,
    image : mouse
},{
    name : 'Keyboard',
    desc : ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nesciunt possimus temporibus totam, ut vero.     ',
    price : 700000,
    stock : 500,
    image : keyboard
}]

export let dataCategory = ['mouse', 'keyboard', 'monitor'];

export let dataProfile = {
    name: 'Muhamad Rizki Firmansyah',
    email: 'rizki@gmail.com',
    phone: '08515555555',
    gender: 'Male',
    address: 'Bogor Utara, Kota Bogor',
    image: photoprofile
};

export let dataTransaction = [{
    name: 'Mouse',
    date: 'Saturday, 14 Juli 2022',
    price: 500000,
    qty: 1,
    image: mouse
},{
    name: 'Keyboard',
    date: 'Saturday, 14 Juli 2022',
    price: 500000,
    qty: 1,
    image: keyboard
}]