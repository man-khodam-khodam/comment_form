
// github   : github.com/man-khodam-khodam
// telegram : t.me/man_khodam_khodam


document.getElementById("commentForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;


  alert("Your comment has been successfully submitted!");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("comment").value = "";
});
