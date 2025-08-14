
const url = "http://localhost:3000/users";

let isEdit = false;
let editId = null;

document.addEventListener("DOMContentLoaded", initialize)

async function initialize() {
  try {
    const response = await axios.get(url)
    // console.log(response);
    for (let userDetails of response.data.data) {
      displayUserOnScreen(userDetails)
    }
  } catch (error) {
    console.log(error);
  }
}

async function handleFormSubmit(event) {
  event.preventDefault();
  try {
    const userDetails = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    let response;
    if (isEdit) {
      response = await axios.put(`${url}/${editId}`, userDetails);
      document.querySelector('button[type=submit]').textContent = 'Submit';
    } else {
      response = await axios.post(url, userDetails);
    }
    displayUserOnScreen(response.data.data)
    event.target.reset();
  }
  catch (error) {
    console.log(error);
  }
}

function displayUserOnScreen(userDetails) {

  const userList = document.getElementById('userList');
  const listItem = isEdit ? document.getElementById(editId) : document.createElement('li');

  if (isEdit) {
    listItem.textContent = "";
    isEdit = false;
    editId = null;
  } else {
    listItem.id = userDetails.id;
    userList.append(listItem);
  }

  listItem.append(
    document.createTextNode(
      `${userDetails.name} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.append(document.createTextNode("Delete"));
  deleteBtn.addEventListener("click", (event) => deleteUser(event, userDetails));

  listItem.append(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.append(document.createTextNode("Edit"));
  editBtn.addEventListener("click", (event) => {
    document.getElementById("name").value = userDetails.name;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
    document.querySelector('button[type=submit]').textContent = 'Update';
    isEdit = true;
    editId = userDetails.id;
  });
  listItem.append(editBtn);

}

async function deleteUser(event, userDetails) {
  try {
    const response = await axios.delete(`${url}/${userDetails.id}`);
    event.target.parentElement.remove();
    if (userDetails.id == editId) {
      editId = null;
      isEdit = false;
      document.querySelector('button[type=submit]').textContent = 'Submit';
      document.querySelector('form').reset();
    }

  } catch (error) {
    console.log(error);
  }
}