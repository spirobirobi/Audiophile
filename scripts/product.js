fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());

        function createItem(object) {

            const pv = document.createElement("div");
            pv.setAttribute("id", "productView");
            const img = document.createElement("img");
            img.setAttribute("src", object.image.desktop);
            pv.appendChild(img);
            const tb = document.createElement("div");
            tb.setAttribute("class", "textBox");
            if (object.new == true) {
                const new1 = document.createElement('p');
                new1.textContent = 'new product';
                new1.setAttribute("class", "np");
                tb.appendChild(new1);
            }
            const ht = document.createElement("h2");
            ht.textContent = object.name;
            tb.appendChild(ht);
            const desc = document.createElement("p");
            desc.textContent = object.description;
            tb.appendChild(desc);
            const pr = document.createElement("p");
            pr.setAttribute("id", "price");
            pr.textContent = "$" + object.price;
            tb.appendChild(pr);
            const cart2 = document.createElement("div");
            cart2.setAttribute("id", "cart2");
            const inputs = document.createElement("div");
            inputs.setAttribute("class", "inputs");
            const input = document.createElement("input");
            input.setAttribute("type", "number");
            input.setAttribute("class", "num");
            input.setAttribute("value", 0);
            input.setAttribute("readonly", "");
            input.setAttribute("id", "input1");
            inputs.appendChild(input);
            const minus = document.createElement("div");
            minus.setAttribute("class", "btn-minus");
            minus.setAttribute("id", "btn-minus");
            minus.textContent = "-";
            inputs.appendChild(minus);
            const plus = document.createElement("div");
            plus.setAttribute("class", "btn-plus");
            plus.setAttribute("id", "btn-plus");
            plus.textContent = "+";
            inputs.appendChild(plus);
            const button = document.createElement("button");
            button.textContent = "add to cart";
            button.setAttribute("id", "addToCart");
            cart2.appendChild(inputs);
            cart2.appendChild(button);
            tb.appendChild(cart2);
            pv.appendChild(tb);
            return pv;



        }
        function createInfo(object) {
            const info = document.createElement("div");
            info.setAttribute("class", "info");
            const features = document.createElement("div");
            features.setAttribute("class", "features");
            const ht = document.createElement("h3");
            ht.textContent = "features";
            features.appendChild(ht);
            const feat = document.createElement("p");
            feat.textContent = object.features;
            features.appendChild(feat);
            info.appendChild(features);
            const inBox = document.createElement("div");
            inBox.setAttribute("class", "inBox");
            const ht2 = document.createElement("h3");
            ht2.textContent = "in the box";
            inBox.appendChild(ht2);
            const ul = document.createElement("ul");
            for (let i = 0; i < object.includes.length; i++) {
                const li = document.createElement("li");
                const p = document.createElement("p");
                const span = document.createElement("span");
                span.textContent = object.includes[i].item;
                p.textContent = object.includes[i].quantity + 'x';
                p.appendChild(span);
                li.appendChild(p);
                ul.appendChild(li);
            }
            inBox.appendChild(ul);
            info.appendChild(inBox)
            return info;
        }
        function createGalerry(object) {
            const gallery = document.createElement("div");
            gallery.setAttribute("class", "gallery");
            const rightside = document.createElement("div");
            rightside.setAttribute("class", "rightside");
            gallery.appendChild(rightside);
            const first = document.createElement("img");
            first.setAttribute("id", "first");
            first.setAttribute("src", object.gallery.first.desktop);
            rightside.appendChild(first);
            const second = document.createElement("img");
            second.setAttribute("id", "second");
            second.setAttribute("src", object.gallery.second.desktop);
            rightside.appendChild(second);
            const third = document.createElement("img");
            third.setAttribute("id", "third");
            third.setAttribute("src", object.gallery.third.desktop);
            gallery.appendChild(third);
            return gallery;

        }
        function createYmal(object) {
            const ymal = document.createElement("div");
            ymal.setAttribute("class", "ymal");
            const hd3 = document.createElement("h3");
            hd3.textContent = "you may also like";
            ymal.appendChild(hd3);
            const elements = document.createElement("div");
            elements.setAttribute("class", "elements");
            ymal.appendChild(elements);
            for (let i = 0; i < object.others.length; i++) {
                const element = document.createElement("div");
                element.setAttribute("class", "element");
                const box = document.createElement("div");
                box.setAttribute("class", "box");
                const img1 = document.createElement("img");
                img1.setAttribute("src", object.others[i].image.desktop);
                box.appendChild(img1);
                element.appendChild(box);
                const hd5 = document.createElement("h5");
                hd5.textContent = object.others[i].name;
                element.appendChild(hd5);
                const button = document.createElement("button");
                button.textContent = "see product";
                element.appendChild(button);
                elements.appendChild(element);
            }
            return ymal;
        }

        function populate(list) {
            const main = document.getElementById("newElements");
            for (let i = 0; i < list.length; i++) {


                if (list[i].id == params.id) {

                    const item1 = createItem(list[i]);
                    const item2 = createInfo(list[i]);
                    const item3 = createGalerry(list[i]);
                    const item4 = createYmal(list[i]);
                    main.appendChild(item1);
                    main.appendChild(item2);
                    main.appendChild(item3);
                    main.appendChild(item4);

                }


            }
        }

        populate(json);
        const headphones = document.getElementById('headphones');
        headphones.setAttribute('href', './page2.html?category=Headphones');
        const speakers = document.getElementById('speakers');
        speakers.setAttribute('href', './page2.html?category=Speakers');
        const earphones = document.getElementById('earphones');
        earphones.setAttribute('href', './page2.html?category=Earphones');
        const catHeadphones = document.getElementById('CatHeadphones');
        catHeadphones.addEventListener('click', () => {
            location.replace("page2.html?category=Headphones")
        })
        const catSpeakers = document.getElementById('CatSpeakers');
        catSpeakers.addEventListener('click', () => {
            location.replace("page2.html?category=Speakers")
        })
        const catEarphones = document.getElementById('CatEarphones');
        catEarphones.addEventListener('click', () => {
            location.replace("page2.html?category=Earphones")
        })
        const input = document.getElementById("input1");
        const plus = document.getElementById("btn-plus");
        plus.addEventListener('click', () => {
            input.value++;
        })
        const minus = document.getElementById("btn-minus");
        minus.addEventListener('click', () => {
            if (input.value > 0) {
                input.value--;
            }
        })

        const addToCart = document.getElementById("addToCart");
        addToCart.addEventListener("click", () => {
            const myObj = {
                id: json[params.id - 1].id,
                price: json[params.id - 1].price,
                image: json[params.id - 1].image.desktop,
                counter: input.value,
                total: json[params.id - 1].price * input.value,


            }
            if (input.value != 0) {
                let oldItems = JSON.parse(localStorage.getItem('cart')) || [];
                oldItems.push(myObj);
                localStorage.setItem("cart", JSON.stringify(oldItems));
                input.value = 0;
            }


        })
     
        let click = 0;
        const cartIcon = document.getElementById('cartIcon');
        cartIcon.addEventListener('click', () => {
            click++;
            const main = document.getElementById("newElements");
            const shorCart = document.getElementById('shortCart');
            
        


            if (click % 2 == 1) {
                shorCart.style.display = 'block';
            main.style.opacity="0.2";
            }
            else {
                shorCart.style.display = 'none';
                main.style.opacity="1";
            }

        })




    })