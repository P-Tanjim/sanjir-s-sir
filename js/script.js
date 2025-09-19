document.querySelectorAll(".chapter").forEach(element => {
    element.addEventListener("click" , () => {
        if (element.classList.contains("no-content")) {
            redirect()
        } else {
            let number = parseInt(element.classList[0].replace("chp", ""))
            chapter(number)
        }
    })
})
function redirect() {
    window.location.href = "no-content.html";
}   
function chapter(number){
    window.location.href = `chapter${number}.html`;
}