const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(isntRevert = true) {
    this.isntRevert = isntRevert;
    this.vigenereTable = {
      a: "abcdefghijklmnopqrstuvwxyz",
      b: "bcdefghijklmnopqrstuvwxyza",
      c: "cdefghijklmnopqrstuvwxyzab",
      d: "defghijklmnopqrstuvwxyzabc",
      e: "efghijklmnopqrstuvwxyzabcd",
      f: "fghijklmnopqrstuvwxyzabcde",
      g: "ghijklmnopqrstuvwxyzabcdef",
      h: "hijklmnopqrstuvwxyzabcdefg",
      i: "ijklmnopqrstuvwxyzabcdefgh",
      j: "jklmnopqrstuvwxyzabcdefghi",
      k: "klmnopqrstuvwxyzabcdefghij",
      l: "lmnopqrstuvwxyzabcdefghijk",
      m: "mnopqrstuvwxyzabcdefghijkl",
      n: "nopqrstuvwxyzabcdefghijklm",
      o: "opqrstuvwxyzabcdefghijklmn",
      p: "pqrstuvwxyzabcdefghijklmno",
      q: "qrstuvwxyzabcdefghijklmnop",
      r: "rstuvwxyzabcdefghijklmnopq",
      s: "stuvwxyzabcdefghijklmnopqr",
      t: "tuvwxyzabcdefghijklmnopqrs",
      u: "uvwxyzabcdefghijklmnopqrst",
      v: "vwxyzabcdefghijklmnopqrstu",
      w: "wxyzabcdefghijklmnopqrstuv",
      x: "xyzabcdefghijklmnopqrstuvw",
      y: "yzabcdefghijklmnopqrstuvwx",
      z: "zabcdefghijklmnopqrstuvwxy"
    };
  }

  encrypt(phrase, pass){
    if(!phrase || !pass) {
      throw new Error('Incorrect arguments!')
    }

    phrase = phrase.toLowerCase();
    pass = pass.match(/[a-z]/gi).join("").toLowerCase();
    
    let encryptedText = "";
    let specialCharacterCount = 0;

    for( let i = 0; i < phrase.length; i++ ){
      let keyLetter = (i - specialCharacterCount) % pass.length;
      let keywordIndex = this.vigenereTable.a.indexOf(pass[keyLetter]);

      if( this.vigenereTable[phrase[i]] ){
        encryptedText += this.vigenereTable[phrase[i]][keywordIndex];
      }else{
        encryptedText += phrase[i];
        specialCharacterCount++;
      }
    }
    if(!this.isntRevert) {
      return encryptedText.toUpperCase().split('').reverse().join('');
    }
    return encryptedText.toUpperCase();
  }

  decrypt(phrase, pass){
    if(!phrase || !pass) {
      throw new Error('Incorrect arguments!')
    }

    phrase = phrase.toLowerCase();
    pass = pass.match(/[a-z]/gi).join("").toLowerCase();
    let decryptedText = "";
    let specialCharacterCount = 0;

    for( let i = 0; i < phrase.length; i++ ){
      let keyLetter = (i - specialCharacterCount) % pass.length;
      let keyRow = this.vigenereTable[pass[keyLetter]];

      if( keyRow.indexOf(phrase[i]) !== -1 ){
        decryptedText += this.vigenereTable.a[keyRow.indexOf(phrase[i])];
      }else{
        decryptedText += phrase[i];
        specialCharacterCount++;
      }
    }
    if(!this.isntRevert) {
      return decryptedText.toUpperCase().split('').reverse().join('');
    } 
    
    return decryptedText.toUpperCase();
    
  }
}


module.exports = {
  VigenereCipheringMachine
};
