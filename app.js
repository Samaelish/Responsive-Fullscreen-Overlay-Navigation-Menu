const toggleBtn = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggleBtn.onclick = function() {
    this.classList.toggle('active')
    navigation.classList.toggle('active')
}