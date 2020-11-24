// An array to store the users.
let users = [];

// HTML Elements
const showUsers = document.querySelector("#show-users");
const usersList = document.querySelector("#users-list");

// Functions
//This creates an list template using user data.
const createTemplate = ({ name, age, dob, firstName, lastName, more }) => {
  return `<li class="user-details">
    <h2 class="user-name">${name}</h2>
    <div class="personal-details">
      <div class="primary-details">
        <h4 class="user-age">AGE : <span class="values">${age}</span></h4>
        <h4 class="user-dob">
          DOB : <span class="values">${dob}</span>
        </h4>
        <h4 class="user-first-name">
          FIRST NAME : <span class="values">${firstName}</span>
        </h4>
        <h4 class="user-first-name">
          LAST NAME : <span class="values">${lastName}</span>
        </h4>
      </div>
      <div class="secondary-details">
        <h4 class="address-title">Address,</h4>
        <h5 class="user-address">${more.address_line1},</h5>
        <h5 class="user-address">${more.address_line2},</h5>
        <h5 class="user-address">${more.address_line3}.</h5>
        <h4 class="user-phone">
          Phone : <span class="values">${more.phone}</span>
        </h4>
      </div>
    </div>
  </li>`;
};

//This function renders the data to ui.
const updateUI = (users) => {
  users.forEach((user) => {
    usersList.innerHTML += createTemplate(user);
  });
};

//This function fetches the users data.
const getUsers = () => {
  // API call goes here,
  fetch("https://mock-api-users.free.beeceptor.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Work with JSON data here.
      // Copyting the data of users to users list.
      users = [...data];
      updateUI(users);
    })
    .catch((err) => {
      // Logging out if any error occurs
      console.log(err);
    });
};

// Event Listeners

// Show users button event
showUsers.addEventListener("click", () => {
  showUsers.classList.add("hide");
  usersList.classList.remove("hide");
  getUsers();
});
