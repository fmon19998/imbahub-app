
function login() {
  const password = document.getElementById("adminPassword").value;
  if (password === "admin") {
    document.getElementById("upload-section").style.display = "block";
  } else {
    alert("Password salah!");
  }
}

function uploadVideo() {
  const file = document.getElementById("videoFile").files[0];
  const title = document.getElementById("videoTitle").value;
  const category = document.getElementById("videoCategory").value;
  const formData = new FormData();
  formData.append("video", file);
  formData.append("title", title);
  formData.append("category", category);

  fetch("/upload", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(err => alert("Upload gagal"));
}
