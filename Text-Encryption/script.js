var encryptedMessage = '';

function encrypt() {
    var message = document.getElementById('message').value;
    var key = document.getElementById('key').value;
    encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
    document.getElementById('output').innerHTML = 'Encrypted Message: ' + encryptedMessage;
}

function decrypt() {
    var key = document.getElementById('key').value;
    var decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key);
    decryptedMessage = decryptedMessage.toString(CryptoJS.enc.Utf8);
    document.getElementById('output').innerHTML = 'Decrypted Message: ' + decryptedMessage;
}
