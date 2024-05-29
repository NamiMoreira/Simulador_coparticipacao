function inRunningTime() {

}

function validateUser(){
   
    var beneficiaryCard      = document.getElementById('beneficiaryCard')
    var beneficiaryCPF       = document.getElementById('beneficiaryCPF')
    var beneficiaryBirthDate = document.getElementById('beneficiaryBirthDate')
    var beneficiaryEmail     = document.getElementById('beneficiaryEmail')
    
    fetch('http://192.168.30.26:8080/validateUser' , {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'}
        }) 

}
