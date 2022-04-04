let before_element = document.getElementById('products1').querySelector('button');
let before_div = 0;

    let Rice_Grains = [
    {
        name:'Rice & Grains'
    },
    {
        name:'Daawat Biryani Basmati Rice',
        img:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/cjdLRDdQemJGN2hEWkRjRnc5cStjQT09-product_image.jpg',
        volume:'1kg',
        price:220
    },
    {
        name:'Fortune Biryani Special Basmati Rice',
        img:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/aW9mM3dOYy94eFNjbndEanN1SWRSdz09-product_image.jpg',
        volume:'1kg',
        price:175
    },
    {
        name:'Sabudana',
        img:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615706681361_product_5c282c2ff7e98871f4f8c193_1.jpg',
        volume:'500gms',
        price:59
    }
];

let Pulses =[
    {
        name:'Pulses'
    },
    {
        name:'Groundnuts',
        img:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615706651987_product_5c135ae66994164bc9f7fdc0_1.jpg',
        volume:'500gms',
        price:117,
    },
    {
        name:'Kabuli Chana',
        img:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615706289164_product_5c135ae66994164bc9f7fdd1_1.jpg',
        volume:'500gms',
        price:123,
    },
    {
        name:'Black Urad Dal',
        img:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/cFVnVmxjcGJpUEJQMEVzaDNwaHRrdz09-product_image.jpg',
        volume:'1kg',
        price:140,
    }
];


let Atta_Flour =[
    {
        name:'Atta & Flour'
    },
    {
        name:'Aashirvaad Multigrain Atta',
        img:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/aFlwL0h0d2RoT0poaG1WaU1zb3djUT09-product_image.jpg',
        volume:'5kgs',
        price:310,
    },
    {
        name:'Besan Flour',
        img:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/VVhnT3Y5YlZkbzVlL2RCVWVpamFsQT09-product_image.jpg',
        volume:'500gms',
        price:60,
    },
    {
        name:'Aashirvaad Superior Mp Atta',
        img:'https://ik.imagekit.io/dunzo/tr:w-144,h-144,cm-pad_resize/1615700352436_product_5c2638fbbbc7ac725f291d26_1.jpg',
        volume:'5kgs',
        price:305,
    }
];

let Provisions = [Rice_Grains,Pulses,Atta_Flour];

localStorage.setItem('provisions',JSON.stringify(Provisions));

let CovidEssentials = [
    {
        name:'Others'
    },  
    {
        name: "Classic Mild",
        volume: "Pack of 10",
        price: "167",
        img: "https://image3.mouthshut.com/images/Restaurant/Photo/-29145_182576.jpg",
    }, {
        name: "Malboro Gold (light/white)",
        volume: "Pack of 20",
        price: "330",
        img: "https://image.shutterstock.com/z/stock-photo-birmingham-al-usa-october-pack-of-marlboro-light-cigarettes-sitting-on-a-counter-1829206715.jpg",
    }, {
        name: "Pineapple chutney saada paan",
        volume: "1 PC",
        price: "25",
        img: "https://5.imimg.com/data5/TQ/AN/BJ/ANDROID-52576409/save-20200130-193014-jpg-500x500.jpg",
    }, 
     {
         name: "Malboro advance",
         volume: "Pack of 20",
         price: "350",
         img: "https://i.pinimg.com/474x/81/e4/13/81e41314de600d2b5eb1d893352361e9.jpg",
     },
      {
         name: "Gold flake kings",
         volume: "Pack of 10",
         price: "165",
         img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Gold_Flake.JPG",
     },
     {
        name: "Magai paan Hookah Flavour",
        volume: "50 GMS",
        price: "100",
        img: "https://ik.imagekit.io/dunzo/home/icons/home/dunzodaily/Paan_SKU_4x.png?tr=w-144,h-144,cm-pad_resize",
    },
    {
        name: "Malboro Red (Hard)",
        volume: "Pack of 20",
        price: "330",
        img: "https://ik.imagekit.io/dunzo/home/icons/home/dunzodaily/Paan_SKU_4x.png?tr=w-144,h-144,cm-pad_resize",
    },
 ];

    let covidEssentials = [CovidEssentials];
    localStorage.setItem('covidEssentials',JSON.stringify(covidEssentials));



    function display(arr) {
    let main_div = document.getElementById("prds");

        arr.forEach(function(type) {
        type.forEach(function(products,index) {
        if(index === 0){
        let h2 = document.createElement('h2');
        h2.innerText = products.name;
        h2.style.fontWeight = 'bold';
        main_div.append(h2);

                    }else{
                        var div = document.createElement("div");
                        var img = document.createElement("img");
                        img.setAttribute("id","img")
                        var details = document.createElement("div");
                        var name = document.createElement("h4")
                        var quantity = document.createElement("p");
                        var price = document.createElement("h5");
                        var button = document.createElement("button");

        // -------------------Adding all products dynamically.------------------------------------
                        img.src = products.img;
                        name.textContent=products.name;
                        quantity.textContent=products.volume;
                        price.textContent=`₹ ${products.price}`;
                        button.innerText="+ADD"
                        details.append(name,quantity,price);
                        quantity.setAttribute("class","quantity");
                        name.setAttribute("class","name");
                        price.setAttribute("class","name")
                        details.setAttribute("id","details")
                        div.append(img,details,button);
                        div.setAttribute("id","divs")
                        document.getElementById("prds").append(div);
                        button.addEventListener('click',moveToCart);
                        div.addEventListener('mouseenter',function(){
                        div.querySelector('h4').style.color = 'green';
                        div.setAttribute('class','transform');
                        })
                        div.addEventListener('mouseleave',function(){
                        div.querySelector('h4').style.color = 'black';
                        div.setAttribute('class','transformBack');
                        })
                    }

            })
        });
        before_div = document.getElementById('prds');
    }

    function displayitems(e,id){
        before_element.style = "none";
        console.log(before_div)

        while (before_div.firstChild) {
            before_div.removeChild(before_div.lastChild);
        }

        let btn = e.target;
        btn.style.fontSize = "large";
        btn.style.fontWeight = "bold";
        btn.style.color="rgb(0, 179, 122)";
        before_element = btn;

        let itemsHead = document.getElementById('heading');
        itemsHead.innerText = btn.innerText;
        let data = JSON.parse(localStorage.getItem(id));

        if(data == null){
        let main_div = document.getElementById("prds");
        let h2 = document.createElement('h2');
        h2.innerText = "Not Available Sorry..";
        main_div.append(h2);
        }else{
        display(JSON.parse(localStorage.getItem(id)));
        }

    }



    display(JSON.parse(localStorage.getItem('covidEssentials')));


    function moveToCart() {
    location.reload();
    let cart = [];
    let isThere = false;

    let price = event.target.parentNode.querySelector('h5').innerText;
    let arr = price.split(" ");
    price = Number(arr[1]);

    let item = {
        name:event.target.parentNode.querySelector('h4').innerText,
        img:event.target.parentNode.querySelector('img').src,
        volume:event.target.parentNode.querySelector('p').innerText,
        price:price,
        qty:1,
        };

        console.log(item);

        cart = JSON.parse(localStorage.getItem('dCart')); 

        if(cart === null){
        console.log('set the cart');
        cart = [item];
        localStorage.setItem('dCart',JSON.stringify(cart));
        }else{
        cart.forEach(function(prd){
        if(prd.name === item.name){
        prd.qty = prd.qty + 1;
        isThere = true;
        } 
            });

            if(isThere == false){
            cart[cart.length]=item;
            localStorage.setItem('dCart',JSON.stringify(cart));
            isThere = false;
            }else{
            localStorage.setItem('dCart',JSON.stringify(cart));
            }

        }
        if(JSON.parse(localStorage.getItem('dCart')) != null){
        displayCartItems();
        }

    }


    function displayCartItems() {
    let total_price = 0;
    let main_div = document.getElementById('products3')
    main_div.style.overflow = 'scroll';
    let cart = JSON.parse(localStorage.getItem('dCart'));
    console.log(cart);

        while (main_div.firstChild) {
        main_div.removeChild(main_div.lastChild);
        }

            let p = document.createElement('p');
            p.innerText = 'Your Cart';
            let ul = document.createElement('ul');
            main_div.append(p);

            cart.forEach(function(prd){
            let li = document.createElement('li');
            li.style.display = 'flex';
            li.style.marginBottom = '15px'

            let div1 = document.createElement('div');
            div1.style.width = '40%'
            let h3 = document.createElement('h3');
            h3.innerText = prd.name;
            h3.style.fontWeight = 'lighter';
            let h5 = document.createElement('h5');
            h5.style.fontWeight = 'lighter';
            h5.innerText = prd.volume;

            let div2 = document.createElement('div');
            div2.id = "box";
            div2.style.width = '15%'
            let btn1 = document.createElement('button');
            btn1.id = 'minus';
            btn1.addEventListener('click',function(){

            let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

            let cart = JSON.parse(localStorage.getItem('dCart'));

            cart.forEach(function(prd,index){
            if(prd.name == name){
            prd.qty = prd.qty-1;
            if(prd.qty == 0){
            cart.splice(index,1)

            }
            total_price -= prd.price;
            }
            });
            localStorage.removeItem('dCart')
            localStorage.setItem('dCart',JSON.stringify(cart));
            location.reload();
            if(JSON.parse(localStorage.getItem('dCart')).length === 0){
            localStorage.removeItem('dCart')
            }

            })


                let span = document.createElement('span');
                span.id ='val';


                let btn2 = document.createElement('button');
                btn2.id = 'plus';
                btn2.addEventListener('click',function(){

                let name = event.target.parentNode.parentNode.firstChild.querySelector('h3').innerText;

                let cart = JSON.parse(localStorage.getItem('dCart'));

                cart.forEach(function(prd){
                if(prd.name == name){
                prd.qty = prd.qty+1;
                total_price += prd.price;
                }
                });

                localStorage.removeItem('dCart')
                localStorage.setItem('dCart',JSON.stringify(cart));
                location.reload();
                })

                span.innerText = prd.qty;
                btn1.innerText = '-';
                btn2.innerText = '+';

                let div3 = document.createElement('div');
                div3.style.width = '20%'
                let h4 = document.createElement('h4');
                h4.innerText = '₹'+ prd.price * prd.qty;

                total_price += prd.price*prd.qty;

                div1.append(h3,h5);
                div2.append(btn1,span,btn2);
                div3.append(h4)
                li.append(div1,div2,div3);
                ul.append(li)

            })
                let div4 = document.createElement('div');
                div4.id = 'checkout';
                let checkout_btn = document.createElement('button');
                checkout_btn.innerText = `checkout ₹${total_price}`;
                checkout_btn.setAttribute("class","checkout")
                checkout_btn.addEventListener('click',function(){
                    window.location.href = "manage-payment.html";
                });
                div4.append(checkout_btn);

               main_div.append(ul,div4);

    }

    if(JSON.parse(localStorage.getItem('dCart')) != null){
    displayCartItems();
    }
    // -------------------logo redirect to home------------------------------


    document.getElementById("logo").addEventListener("click",redirect);
    function redirect(){
        window.location.href="../index.html"
    }
    //------------------------------adding location;----------------------------

    document.getElementById("location").innerText=JSON.parse(localStorage.getItem("location"));
    document.getElementById("location").addEventListener("click",getLoc);
    function getLoc(){
    var input = prompt("Please enter your location.");
    if(localStorage.getItem("location")==null){
    localStorage.setItem("location",JSON.stringify(input));
    }
    else if(localStorage.getItem("location")!=null){
    var data = localStorage.getItem("location");
    data = JSON.parse(data);
    if(data!=input){
    localStorage.setItem("location",JSON.stringify(input));
    } 
    }
    }
    document.getElementById("cart").addEventListener("click",cart);
    function cart(){
    window.location.href="../pay/pay.html"
    }
        //----------------------------------shops location----------------------------------------

        document.getElementById("head").querySelector("p").innerText=`India > ${JSON.parse(localStorage.getItem("location"))}`

        if(JSON.parse(localStorage.getItem('dCart')) != null){
        var circle = document.getElementById('circle');

        let arr = JSON.parse(localStorage.getItem('dCart'));
        let qty = 0;

        arr.forEach(function(prd){
        qty += prd.qty;
        });

        circle.innerText = qty;
        }else{
        document.getElementById('circle').style.display = "none";
        } 