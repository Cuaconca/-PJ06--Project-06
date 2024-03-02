var btnFAQ = document.querySelectorAll(".faq-group_btn")

btnFAQ.forEach(btn => {
    btn.onclick = function() {

        if (!btn.parentElement.parentElement.parentElement.querySelector(`#${btn.getAttribute("for")}`).checked) {
            btn.innerText = "+"
        } else {
            btn.innerText = "-"
        }
        
    }
});