import React from 'react';
import './book.css';
import Sell from "../sell/Sell";

function Book (){
    return(
        <div className='oneBook'>
            <Image/>
            <Author/>
            <Title/>
            <Price/>
            <Sell/>
        </div>
    )
}

const Image = () => <img src="https://visualhunt.com/photos/2/eyeglasses-on-open-book.jpg?s=s"/>;
const Author = () => <h2>Autorius knygos</h2>;
const Title = () => <h3>Knygos pavadinimas</h3>;
    const Price = () => <p>tik 19 Eur</p>;
    export default Book;
