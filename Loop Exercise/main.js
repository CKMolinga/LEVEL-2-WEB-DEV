var user = ["Kembang", "Sinclaire", "Prince", "Julius"];


for (var i = 0; i < user.length; i++) {
    var para = document.createElement('p');
    var username = document.createTextNode(user[i]);
    para.appendChild(username);

    document.body.append(para);
}