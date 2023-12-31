
const firebaseConfig = {
  apiKey: "AIzaSyDVsURp0I31xqxzhaHg9pNK7i1Vmmi0SF0",
  authDomain: "witerzap.firebaseapp.com",
  databaseURL: "https://witerzap-default-rtdb.firebaseio.com",
  projectId: "witerzap",
  storageBucket: "witerzap.appspot.com",
  messagingSenderId: "56290945225",
  appId: "1:56290945225:web:30c8cba743dfd6266d4518"
};

firebase.initializeApp(firebaseConfig);
roomName = localStorage.getItem("roomName");
  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "witerzapPage.html";
}

function getData() {  
firebase.database().ref("/").on('value', function(snapshot) { 
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) { 
childKey  = childSnapshot.key;
roomNames = childKey;
console.log("Nome da Sala - " + roomNames);
row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "witerzapPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
