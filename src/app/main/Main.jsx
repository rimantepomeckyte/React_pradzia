import React from 'react';
import Booklist from "../booklist/Booklist";
import Contacts from "../contacts/Contacts";
import VideoState from "../videostate/VideoState";
//Komponentai visada is didziosios raides. Folders - is mazosios.

const Main = () => {
    return(
        <div>
            <VideoState />
            <Booklist />
            <Contacts name='Rimante' email='rimante@gmail.com' initialAge={21}/>
        </div>
    )
}

export default Main