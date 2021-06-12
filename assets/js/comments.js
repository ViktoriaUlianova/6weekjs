document.addEventListener("DOMContentLoaded", function (event) {
    let storageName = localStorage.getItem('name');

    if (storageName != null) {
        document.getElementById('one').value = storageName;
    }


    let storagePic = localStorage.getItem('picture');

    if (storagePic != null) {
        document.getElementById("myimage").src = storagePic;
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
        localStorage.setItem('picture', photo);
    }

    document.getElementById("three").value = photo + ":" + nickName + " : " + comment;
}

function checkSpam(str) {
    str = str.replace(/viagra/ig, "***");
    str = str.replace(/xxx/ig, "***");

    return str;
}