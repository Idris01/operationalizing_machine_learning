document.addEventListener("DOMContentLoaded",(evt)=>{
    function updatePrice(value){
        document.getElementById('house_price').innerHTML=value;
    };
    
    // set initial values of predictors
    let data={"CHAS":0,"RM":6.575,"TAX":296.0,"PTRATIO":15.3,"B":396.9,"LSTAT":4.98}
    let keys = ['chas','rm','tax','ptratio','b','lstat']
    keys.forEach(key => {
        document.getElementById(key).value=data[key.toUpperCase()]
    });
    
    document.getElementById("predictor").onsubmit=async function(evt){
        evt.preventDefault();
        let target = evt.target;
        let formData = new FormData(target);
        let rm = formData.get('rm');
        let b = formData.get('b');
        let chas = formData.get('chas');
        let ptratio = formData.get('ptratio');
        let tax = formData.get('tax');
        let lstat = formData.get('lstat')
        
        let payLoad = {"CHAS":{"0":chas},"RM":{"0":rm},"TAX":{"0":tax},"PTRATIO":{"0":ptratio},"B":{"0":b},"LSTAT":{"0":lstat}};
        console.log(payLoad);
        fetch('/predict',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payLoad)
        })
        .then(response =>response.json())
        .then(data => {
            console.log(data.prediction[0])
            updatePrice(data.prediction[0])
        })
    };
});
