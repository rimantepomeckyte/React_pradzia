import React from 'react';
import Booklist from "../booklist/Booklist";
import Contacts from "../contacts/Contacts";


const Main = () => {
    return(
        <div>
            <Booklist />
            <Contacts name='Rimante' email='rimante@gmail.com'/>
        </div>
    )
}

export default Main