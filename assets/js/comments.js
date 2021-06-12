document.addEventListener("DOMContentLoaded", function (event) {
    let storageName = localStorage.getItem('name');

    if (storageName != null) {
        document.getElementById('one').value = storageName;
    }


    let storagePic = localStorage.getItem('picture');

    if (localStorage.getItem('picture') != null) {
        document.getElementById("picture").value = storagePic;
    }
});

function showComment() {
    let photo = document.getElementById("picture").value;
    let nickName = document.getElementById("one").value;
    let comment = document.getElementById("two").value;
    comment = checkSpam(comment);
    nickName = checkSpam(nickName);
    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', nickName);
    }

    if (localStorage.getItem('picture') == null) {
        localStorage.setItem('picture', filePicture);
    }

    document.getElementById("three").value = photo + ":" + nickName + " : " + comment;
}

function checkSpam(str) {
    str = str.replace(/viagra/ig, "***");
    str = str.replace(/xxx/ig, "***");

    return str;
}

function showPhoto() {


    let filePicture = document.getElementById("picture").value;


}