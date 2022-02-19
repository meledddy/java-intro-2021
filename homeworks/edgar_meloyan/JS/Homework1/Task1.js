var str1 = "strings";
var str2 = "strings";

function hasSameCharacter(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) <= -1) return false;
    }
    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) <= -1) return false;
    }
    return true;
}

console.log(hasSameCharacter(str1, str2));