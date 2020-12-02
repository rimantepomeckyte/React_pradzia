import React from 'react';
import Booklist from "../booklist/Booklist";
import Contacts from "../contacts/Contacts";
//Komponentai visada is didziosios raides. Folders - is mazosios.

const Main = () => {
    return(
        <div>
            <Booklist />
            <Contacts name='Rimante' email='rimante@gmail.com'/>
        </div>
    )
}

export default Main