window.addEventListener('DOMContentLoaded',()=>{
    let tabsParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent');

    function hideTabsContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show','fade');
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    } 
    hideTabsContent();

    function showTabsContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show','fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    showTabsContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item,i) => {
                if (item === target) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            })
        }
        
    })
})