export default function () {
    const tabsHeaderEls = document.querySelectorAll('.tabs__tab')
    const tabs = document.querySelectorAll('.tab')

    function closeAllTabs() {
        tabsHeaderEls.forEach(tabHeader => {
            tabHeader.classList.remove('tabs__tab--active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('tab--active')
            tab.style.height = 0
        })
    }

    tabsHeaderEls.forEach(el => {
        el.addEventListener('click', () => {
            const id = el.dataset.id

            if(id) {
                const tab = document.getElementById(id)

                if(tab) {
                    closeAllTabs()
                    tab.classList.add('tab--active')
                    el.classList.add('tabs__tab--active')


                    tab.style.height = tab.scrollHeight + "px"
                }
            }
        })
    })
}