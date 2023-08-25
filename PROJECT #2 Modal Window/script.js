'use strict;'
 
const modal = document.querySelector('.modal') ;
const overlay = document.querySelector('.overlay') ;

const btnClossModal = document.querySelector('.close-modal') ;

// whenever we use queryselector with multiple selector which actually matches multiple elements then only , first element is taken 
// const btnsOpenModal = document.querySelector('.show-modal') ;


// We get node list 
const btnsOpenModal = document.querySelectorAll('.show-modal') ;
// console.log( btnsOpenModal );


const closeModal = function() {
    modal.classList.add('hidden') ; //that modal box 
    overlay.classList.add('hidden') ; //dusky background on modal display 
}


const openModel = function() {
    console.log('Button Clicked ');
    // we can remove multiple classes by separating it with comma(,) ---> modal.classList.remove('hidden', 'ddd')

    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

    // modal.style.display = 'block' ;
    // imagine that one class had 10 properties to order to remove we had to write for each of them , so classList.remove helps 
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    // console.log( btnsOpenModal[i] ) ;
    // console.log( btnsOpenModal[i].textContent ) ;
    btnsOpenModal[i].addEventListener('click',openModel);

}


btnClossModal.addEventListener('click',closeModal) ;
overlay.addEventListener('click', closeModal) ;

// if we can to the same thing on multiple event Listenser then we make a function , and keep calling them 

// e for event 
document.addEventListener('keydown', function(e){ //e (event) as argurement 
    // console.log('A key was pressed');
    // console.log(e);
    console.log(e.key);
    
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        // console.log("Esc was pressed ");
        closeModal() ;
    }

});

// Keyboard Event object generated 