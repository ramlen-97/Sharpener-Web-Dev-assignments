const url = "http://localhost:3000/shop/inventory";

document.addEventListener("DOMContentLoaded", initialize);
document.getElementById('filter').addEventListener('keyup',filterItems);

async function initialize() {
    try {
        const inventory = await axios.get(url);
        for (let i of inventory.data) {
            displayInventoryDataOnScreen(i);
        }
    }
    catch (error) {
        console.log(error)
    }
}

async function handleFormSubmit(event) {
    event.preventDefault();
    try {
        const inventoryDetails = {
            itemname: event.target.itemname.value,
            description: event.target.description.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
        }
        const addInventory = await axios.post(url, inventoryDetails);
        displayInventoryDataOnScreen(addInventory.data);
        event.target.reset();
    }
    catch (error) {
        console.log(error);
    }
}

function displayInventoryDataOnScreen(data) {
    let inventoryItem = document.getElementById(data.id);
    // console.log(inventoryItem);
    if (inventoryItem) {
        inventoryItem.innerHTML = "";
    } else {
        inventoryItem = document.createElement('li');
        inventoryItem.id = data.id;
        const inventoryList = document.querySelector("ul");
        inventoryList.append(inventoryItem);
    }

    inventoryItem.append(document.createTextNode(`${data.itemname} - ${data.description} - ${data.price} - ${data.quantity} `));

    const buy1Btn = document.createElement('button');
    buy1Btn.textContent = 'Buy 1';
    buy1Btn.addEventListener('click', () => buyItem(data, 1));
    inventoryItem.append(buy1Btn);

    const buy2Btn = document.createElement('button');
    buy2Btn.textContent = 'Buy 2';
    buy2Btn.addEventListener('click', () => buyItem(data, 2));
    inventoryItem.append(buy2Btn);

    const buy3Btn = document.createElement('button');
    buy3Btn.textContent = 'Buy 3';
    buy3Btn.addEventListener('click', () => buyItem(data, 3));
    inventoryItem.append(buy3Btn);

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.addEventListener('click', async (event) => {
        try {
            const deleteInventoryItem = await axios.delete(`${url}/${data.id}`);
            event.target.parentElement.remove();
        } catch (error) {
            console.log(error);
        }
    })
    inventoryItem.append(deletebtn);

}

async function buyItem(data, buyQty) {
    try {
        data.quantity-=buyQty;
        const inventoryItem = await axios.put(`${url}/${data.id}`, {buyQty});
        displayInventoryDataOnScreen(data);
        
    } catch (error) {
        console.log(error);
    }
}

function filterItems(e){
    const text=e.target.value.toLowerCase();
    const itemList=document.querySelectorAll('li');
    for(let item of itemList){
        const itemName=item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(text)!=-1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    }
}