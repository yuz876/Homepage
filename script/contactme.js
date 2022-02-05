function logSubmit(event) {
  log.textContent  = "Submitted! FYI this is only a 'Submit' demo, your message has not been sent or stored.";
  log.append(document.createElement("br"));

  const user_name = document.getElementById("name").value;
  pelement = document.createElement("p"); //<p></p>
  pelement.textContent = "Name: " + user_name; //<p>Name: user input name</p>
  log.append(pelement);
  pelement.append(document.createElement("br"));

  const user_email = document.getElementById("email").value;
  pelement_email = document.createElement("p");
  pelement_email.textContent = "Email: " + user_email;
  pelement.append(pelement_email);
  pelement.append(document.createElement("br"));

  const user_date = document.getElementById("date").value;
  pelement_date = document.createElement("p");
  pelement_date.textContent = "Date: " + user_date;
  pelement_email.append(pelement_date);
  pelement_email.append(document.createElement("br"));

  const user_msg = document.getElementById("message").value;
  pelement_msg = document.createElement("p");
  pelement_msg.textContent = "Message: " + user_msg;
  pelement_date.append(pelement_msg);


  event.preventDefault(); // avoid refreshing
}
  
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);

