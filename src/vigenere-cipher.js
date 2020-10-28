class VigenereCipheringMachine {
  constructor(modif=true) {
    this.modif = modif;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!(message && key)) throw "Error";

    let newmessage = message.toUpperCase();
    let newkey = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(newmessage[i])) {
        newkey += key[j % key.length]
        j++;
      } else {
        newkey += message[i];
      }
    }
    newkey = newkey.toUpperCase();
    let res = "";
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(newmessage[i])) {
        res += String.fromCharCode(((newmessage.charCodeAt(i) + newkey.charCodeAt(i)) - 130) % 26 + 65);
      } else {
        res += newmessage[i];
      }
    }

    if (this.modif) {
      return res;
    } else {
      return res.split("").reverse().join("");
    }
  }

  decrypt(message, key) {
    if (!(message && key)) throw "Error";

    let newmessage = message.toUpperCase();
    let newkey = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(newmessage[i])) {
        newkey += key[j % key.length]
        j++;
      } else {
        newkey += message[i];
      }
    }
    newkey = newkey.toUpperCase();
    let res = "";
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(newmessage[i])) {
        res += String.fromCharCode((newmessage.charCodeAt(i) + 26 - newkey.charCodeAt(i))  % 26 + 65);
      } else {
        res += newmessage[i];
      }
    }

    if (this.modif) {
      return res;
    } else {
      return res.split("").reverse().join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
