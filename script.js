const list = document.querySelector("ul")

function currentValue(value){
    const newFormatValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newFormatValue
}


function mostrarTodo(){
    myLi = ""
    menuOptions.forEach(element => {
        myLi = myLi +`
        <li>
            <img src = ${element.src} >
            <p>${element.name}</p>
            <p class="item-price">${currentValue(element.price)}</p>
        </li>
        `
    });

    list.innerHTML = myLi
}

function descontPercent(){
    myLi = ""
    const newPrice = menuOptions.map((element) => ({
        ...element,
        price: element.price - element.price/10
    }))
    newPrice.forEach(element => {
        myLi = myLi +`
        <li>
            <img src = ${element.src} >
            <p>${element.name}</p>
            <p class="item-price">${currentValue(element.price)}</p>
        </li>
        `
    });

    list.innerHTML = myLi
} 

function totalValue(){
    myLi =""
    const totalValue = menuOptions.reduce((acc, element) => acc + element.price, 0)
    list.innerHTML = `
        <li>
            <p>El valor total de todos los productos es de : ${currentValue(totalValue)} </p>
        </li>
    `

}

function showVeganOnly(){
    myLi = ""
    const veganOnly = menuOptions.filter((element) => element.vegan)
    veganOnly.forEach(element => {
        myLi = myLi +`
        <li>
            <img src = ${element.src} >
            <p>${element.name}</p>
            <p class="item-price">${currentValue(element.price)}</p>
        </li>
        `
    });

    list.innerHTML = myLi
}



































/*  const list = document.querySelector("ul") 


let myLi = ""

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}

function mostrarTodo() {
    myLi = ""
    menuOptions.forEach(element => {
        myLi = myLi + `
            <li>
                <img src=${element.src}>
                <p class="burguer-name">${element.name}</p>
                <p class="item-price"> ${formatCurrency(element.price)}</p>
            </li>
            `
            
    });
    list.innerHTML = myLi
}



function descontPercent(){
    myLi = ""
    const newPrices = menuOptions.map((product) => ({
       ...product, 
        price: product.price * 0.9,
        
    }))

    newPrices.forEach(element => {
        myLi = myLi + `
            <li>
                <img src=${element.src}>
                <p class="burguer-name">${element.name}</p>
                <p class="item-price"> ${formatCurrency(element.price)}</p>
            </li>
            `
            
    });
    list.innerHTML = myLi

}

function totalValue(){
    const valorTotal = menuOptions.reduce( (acc, current) => acc + current.price, 0).toFixed(2)
    list.innerHTML = `
        <li>
            <p>El valor total de todos los productos es de : <br> R$ ${valorTotal}</p></p>
        </li>
    `
    
}

function showVeganOnly(){
    myLi = ""
    const veganOnly = menuOptions.filter((item) => item.vegan)
    veganOnly.forEach(element => {
        myLi = myLi + `
            <li>
                <img src=${element.src}>
                <p class="burguer-name">${element.name}</p>
                <p class="item-price"> ${formatCurrency(element.price)}</p>
            </li>
            `
            
    });
    list.innerHTML = myLi
}

*/









