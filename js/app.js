let a1=document.querySelector("#product");
function getData(){
    let htmlProduct="";

    localStorage.setItem("productList",JSON.stringify(productList));

    for(let i=0;i<productList.length;i++){
    
        htmlProduct +=`<div class="col-md-3">
        <div class="card mb-4">
          <img src="img/${productList[i].img}" class="card-img-top" alt="Product 1">
          <div class="card-body">
            <h5 class="card-title">${productList[i].name}</h5>
            <p class="card-text">${productList[i].detail}</p>
            <h6 class="card-subtitle mb-2 text-muted">Giá: $${productList[i].price}</h6>
            <a href="#" class="btn btn-primary">Mua hàng</a>
          </div>
        </div>
      </div>` 

      document.getElementById("product").innerHTML =htmlProduct;   
    
    } 
}
getData();
