window.addEventListener('DOMContentLoaded', () => {
    resizeRulesTab();
    resizeContactTab();
});

window.addEventListener('resize', () => {
    resizeRulesTab();
    resizeContactTab();
});

function resizeRulesTab(){
    let tab = document.getElementById('rulesHead');
    let rules = document.getElementById('rules');
    if(window.innerWidth > 899) {
        tab.style.paddingTop = (rules.offsetHeight - document.getElementById('rulesTitle').offsetHeight) / 2 + "px";
        tab.style.paddingBottom = (rules.offsetHeight - document.getElementById('rulesTitle').offsetHeight) / 2 + "px";
    } else {
        tab.style.paddingTop = "5px";
        tab.style.paddingBottom = "5px";
    }
}

function resizeContactTab(){
    let tab = document.getElementById('contactHead');
    let rules = document.getElementById('contact');
    if(window.innerWidth > 899) {
        tab.style.paddingTop = (rules.offsetHeight - document.getElementById('contactTitle').offsetHeight) / 2 + "px";
        tab.style.paddingBottom = (rules.offsetHeight - document.getElementById('contactTitle').offsetHeight) / 2 + "px";
    } else {
        tab.style.paddingTop = "5px";
        tab.style.paddingBottom = "5px";
    }
}