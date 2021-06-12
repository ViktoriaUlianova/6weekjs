function showComment() {
    let name = document.getElementById("one").value;
    let comment = document.getElementById("two").value;
    comment = checkSpam(comment);
    name = checkSpam(name);
    document.getElementById("three").value = name + " : " + comment;
}

function checkSpam(str) {
    str = str.replace(/viagra/ig, "***");
    str = str.replace(/xxx/ig, "***");

    return str;
}