const createCard = (data, parent, arr) => {
    const card = document.createElement("div");
    card.className = "card";
    // card.setAttribute("data-id", data.id);
    card.dataset.id = data.id;

    const age = document.createElement("div");
    age.className = "age";
    age.innerText = width.age || 10;

    const rate = document.createElement("div");
    rate.className = "rate";
    rate.innerHTML =
        "<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>";

    const pic = document.createElement("div");
    pic.className = "pic";
    pic.style.backgroundImage = `url(${data.img_link || "images/1.png"})`;

    const name = document.createElement("div");
    name.className = "name";
    name.innerText = data.name;

    card.append(pic, age, name, rate);
    card.addEventListener("click", function () {
        showPopup(arr, "card");
    });
    parent.append(card);
};

const showPopup = (list, type, content) => {
    let el = list.filter((el) => el.dataset.type === type)[0];
    // switch (type) {
    //   case card:
    //   case info:
    //   case form:
    // }
    el.classList.add("active");
    el.parentElement.classList.add("active");
};
const addCat = (e, api, popupList,store) => {
    e.preventDefault();
    let body = {};
    for (let i = 0; i < e.target.elements.length; i++) {
        let input = e.target.elements[i];
        // console.log("fd", input);
        if (input.name) {
            if (input.type === "checkbox") {
                body[input.name] = input.checked;
            } else if (input.value) {
                body[input.name] = input.value;
            }
        }
    }
    // console.log(body);
    api.addCat(body)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.message);
            if (data.message === "ok") {
                // localStorage.setItem("cat", JSON.stringify(body));
                createCard(body, document.querySelector(".container"))
                e.target.reset();
                store.push(body);
                localStorage.setItem("cats", JSON.stringify(store))
                document.querySelector(".popup-wrapper").classList.remove(acttive)
            }
            showPopup(popupList, "info", data.message);
        });
};
