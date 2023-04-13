function addData() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById("address").value;
    const storageType = document.getElementById("storage").value;

    if (storageType === "local") {
      localStorage.setItem("data", JSON.stringify({firstname, lastname, gender, address}));
    } else if (storageType === "session") {
      sessionStorage.setItem("data", JSON.stringify({firstname, lastname, gender, address}));
    } else if (storageType === "cookie") {
      document.cookie = `data=${JSON.stringify({firstname, lastname, gender, address})}`;
    }
  }
  
  function showData() {
    const storageType = document.getElementById("storage").value;
    let data;
  
    if (storageType === "local") {
      data = JSON.parse(localStorage.getItem("data"));
    } else if (storageType === "session") {
      data = JSON.parse(sessionStorage.getItem("data"));
    } else if (storageType === "cookie") {
      const cookieData = document.cookie.split("; ").find(row => row.startsWith("data="));
      data = JSON.parse(cookieData.split("=")[1]);
    }
  
    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  }
  
  function clearData() {
    const storageType = document.getElementById("storage").value;
  
    if (storageType === "local") {
      localStorage.removeItem("data");
    } else if (storageType === "session") {
      sessionStorage.removeItem("data");
    } else if (storageType === "cookie") {
      document.cookie = "data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
  
    const dataContainer = document.getElementById("data-container");
    dataContainer.innerHTML = "<p>Data berhasil dihapus.</p>";
  }
  