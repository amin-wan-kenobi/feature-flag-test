function A(){
    console.log('HELLO THERE A');
}
function B(func){
    console.log('HELLO THERE B');
}

let obj = {
    components: [
        {
            A: {
                render: true,
                children: [B]
            }
        }
    ]
}

function C(func){
    let funcName = func.name;
    console.log(obj.components[0])
    console.log(obj.components[0][funcName])
}

C(A)