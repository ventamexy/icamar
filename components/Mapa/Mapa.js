import React from 'react';

const mapa = () => {
    return (
        <div>
           <div id="mapa" class="mapa">
           <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.2139242781192!2d-102.19348151535286!3d17.959056475352508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84315c6e40000001%3A0x690e8b3dd6d30a98!2sICAMAR!5e0!3m2!1ses-419!2smx!4v1652550388126!5m2!1ses-419!2smx"
           height="450" 
           style={{border:0, width:"100%"}} 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
        </div>
    );
}

export default mapa;
