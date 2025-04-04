let form=document.getElementById('form')
let  name=document.getElementById('name')
let password=document.getElementById('password')
let errormassage=document.getElementById('error')

form.addEventListener('submit',(e)=>{
    
    e.preventDefault()
    let massage=[]
    if(name.value===''  || name.value== null){
        massage.push('name cannot be empty')
    }
   
if(massage.length>6){
massage.push('massage length should be less than 6')

}
if(massage.length>0){
    errormassage.innerText=massage.join(',')
    
}
else{
    errormassage.innerHTML="some Error"
}
})