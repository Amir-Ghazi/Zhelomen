let numberid = document.getElementById('number')
numberid.addEventListener('click',function(){
    numberid.innerHTML="09916789745"
    alert("این شماره برای تست است لطفا تماس نگیرید با تشکر")
    setTimeout(() => {
        numberid.innerHTML="تماس با ما"
    }, 10000);
})