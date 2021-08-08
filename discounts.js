
//Data coupons input by user.

const coupons = [
{    
    name: "JuanDC_es_Batman",
    discount: 15,
},
{    
    name: "pero_no_le_digas_a_nadie",
    discount: 30,
},
{    
    name: "es_un_secreto",
    discount: 25,
},
];


//Interact with HTML

function onClickButtonPriceDiscount(){
    input_price = document.getElementById("InputPrice");
    const priceValue = Number(input_price.value);

    input_Coupon = document.getElementById("InputCoupon");
    const couponValue = input_Coupon.value;

}

//function for calculate discount with reedem coupons

function calculatePricewithdiscount(price, discount){
    percentWtDiscount = 100 - discount;
    pricewtdiscount = (price * percentWtDiscount)/ 100;

    return pricewtdiscount;
}

const isCouponValueValid = function(coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon){
    alert(`The reedem code: ${userCoupon} not valid :C`);
}
else{
    const discount= userCoupon.discount;
    const pricewtdiscount = calculatePricewithdiscount(priceValue, discount);

    resultP = document.getElementById("resultP");
    resultP.innerText = "The price with discount are: $" + pricewtdiscount;
}

