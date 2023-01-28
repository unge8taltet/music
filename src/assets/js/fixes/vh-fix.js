function calcOffsetContainer() {
    let modificator = 0

    const containerWidth = document.querySelector('.container').clientWidth + modificator
    let containerOffset = (window.innerWidth - containerWidth) / 2 || 0


    // if (window.innerWidth < 1023 && window.innerWidth >= 560) {
    //     if (containerOffset < 40) {
    //         containerOffset = 40
    //     }
    // } else if (window.innerWidth < 560) {
    //     if (containerOffset < 20) {
    //         containerOffset = 20
    //     }
    // } else {
    //     if (containerOffset < 30) {
    //         containerOffset = 30
    //     }
    // }

    return containerOffset
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + 'px');
document.documentElement.style.setProperty('--cp', calcOffsetContainer() + 'px');

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
    document.documentElement.style.setProperty('--cp', calcOffsetContainer() + 'px');
});