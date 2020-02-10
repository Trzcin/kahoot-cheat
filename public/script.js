function initKahootPlus() {
  let errors = false;
  if (document.getElementById("pin").value.length != 7) {
    document.getElementById("pin").className = 'setupInputError';
    errors = true;
  }
  if (document.getElementById("username").value.length == 0) {
    document.getElementById("username").className = 'setupInputError';
    errors = true;
  }
  if (errors) {
    return;
  }

  const pin = document.getElementById("pin").value;
  const username = document.getElementById("username").value;
  let xhr = new XMLHttpRequest();
  const url = '/api/init';
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = () => {
      if(xhr.readyState == 4 && xhr.status == 200){
          console.log('Works');
      }
  }
  xhr.send(`pin=${pin}&name=${username}`);
}
