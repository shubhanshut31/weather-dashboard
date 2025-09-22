import React from 'react';

export default function Footer(){
    const date = new Date();
    const year= 1900 + date.getYear();

    return(
        <footer className='myFont bold'>
            <a href='https://shubhanshuportfolio.netlify.app/'><span role='img' aria-label='copyright'>©️</span>{year} Shubhanshu Tiwari</a>       
        </footer>
    )
} 
