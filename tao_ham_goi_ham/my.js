// Tao ham processConfirm
function processConfirm(answer) {
    let result = "";
    if (answer) {
        result += "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }
    return result;
}
// tao hop thoai xac nhan goi ham processConfirm() va hien thi ket qua
let confirmAnswer = confirm("Shall we play a game?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);