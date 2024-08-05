const shop =()=>{

const btn_save = document.querySelector("#btn-save");
const code = document.querySelector("#code");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const qty = document.querySelector("#qty");

let html = "";
btn_save.addEventListener("click", function(){

    if(code.value != "" && name.value != "" && price.value != "" && qty.value != ""){

        let total = Number(price.value) * Number(qty.value);

        if(total > 0 && total < 30){
            dis = 0;
        }else if(total >  30 && total < 50){
            dis = 25;
        }else{
            dis = 50;
        }

                let pay = total - (total*dis)/100;
    
        html +=`
            
            <tr>
                <td>${code.value}</td>
                <td>${name.value}</td>
                <td>${price.value}$</td>
                <td>${qty.value}</td>
                <td>${total}$</td>
                <td>${dis}%</td>
                <td>${pay}$</td>
            </tr>`;

            code.value  = "";
            name.value  = "";
            price.value = "";
            qty.value   = "";

            swal("Add Successful...", "You clicked the button!", "success");
            document.querySelector("tbody").innerHTML = html;
    }else{
        swal("Please Input...", "You clicked the button!", "error");
    }
    });
}
shop();
