function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; 


    console.log(modalTimerId); // каждый раз, когда будет открываться модальное окно будем смотреть на "modalTimerId" на всякий случай

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}


function modalWindow(triggerSelector, modalSelector, modalTimerId) {


    const modalTrigger = document.querySelectorAll(triggerSelector), 
          modal = document.querySelector(modalSelector);


    
    modalTrigger.forEach( btn => {  
        btn.addEventListener( 'click', () => openModal(modalSelector, modalTimerId)); 
    });


    modal.addEventListener( 'click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });


    document.addEventListener( 'keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener( 'scroll', showModalByScroll );
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

export default modalWindow;
export {openModal};
export {closeModal};   