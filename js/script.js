const buttonAdd = document.querySelector('#add')
buttonAdd.addEventListener('click',sum)
const buttonRemove =document.querySelector('#remove')
buttonRemove.addEventListener('click',remove)
function sum(){
    a = parseInt(document.querySelector('.first-number').value)
    b = parseInt(document.querySelector('.Secend-number').value)
    sum =a + b
    document.querySelector('.Answer').innerHTML = sum

}
function remove(){
    document.querySelector('.first-number').value = ""
    document.querySelector('.Secend-number').value = ""
    document.querySelector('.Answer').innerHTML = 'Answer'
    
}
