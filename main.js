const FOXYS_API = "https://randomfox.ca/floof/";

async function gettingFoxys () {
    const response = await fetch(FOXYS_API);
    const data = await response.json();
    console.log("These is the data:")
    console.log(data);
    return data.image;
}

async function settingFoxy () {

    const articleContainer = document.createElement("article");
    const foxyImage = document.createElement("img");
    foxyImage.src = await gettingFoxys();
    articleContainer.appendChild(foxyImage);
    return articleContainer;

}

const foxysMainContainer = document.querySelector(".main-container");
async function postFoxy () {
    const newFoxy = await settingFoxy();
    foxysMainContainer.appendChild(newFoxy);

}

const postingAFoxyButton = document.querySelector("#get-fox-button");
postingAFoxyButton.addEventListener("click", postFoxy); 


const deletingAllFoxys = document.querySelector("#delete-all-fox-button");
deletingAllFoxys.addEventListener("click", () => {foxysMainContainer.innerHTML = ""});