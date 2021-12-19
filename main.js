

let lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i"
    , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I"
    , "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let plainText = [];
let cipherText = [];
let key = [];
let keyafterexpansion = [];
let l=[];

var wrong = document.querySelector(".wrong");
var wrong1 = document.querySelector(".wrong1");
wrong1.setAttribute("hidden", true);
wrong.setAttribute("hidden", true);
document.getElementById("encrypt").onclick = function () {
    var checkText = false;
    var checkKey = false;
    plainText = [];
    cipherText = [];
    key = [];
    keyafterexpansion = [];
    l="";
    if (document.getElementById("enteredText").value == "") {
        wrong1.removeAttribute("hidden");
    }
    else {
        plainText = document.getElementById("enteredText").value;
        checkText = true;
        wrong1.setAttribute("hidden", true);
    }

    if (document.getElementById("keyinput").value == "") {
        wrong.removeAttribute("hidden");
    }
    else {
        key = document.getElementById("keyinput").value;
        checkKey = true;
        wrong.setAttribute("hidden", true);
    }

    if (checkKey == true && checkText == true) {
        encryption();
    }
};

document.getElementById("decrypt").onclick = function () {
    var checkText = false;
    var checkKey = false;
    plainText = [];
    cipherText = [];
    key = [];
    keyafterexpansion = [];
    l="";
    if (document.getElementById("enteredText").value == "") {
        wrong1.removeAttribute("hidden");
    }
    else {
        cipherText = document.getElementById("enteredText").value;
        checkText = true;

        wrong1.setAttribute("hidden", true);
    }

    if (document.getElementById("keyinput").value == "") {
        wrong.removeAttribute("hidden");
    }
    else {
        key = document.getElementById("keyinput").value;
        checkKey = true;
        wrong.setAttribute("hidden", true);
    }

    if (checkKey == true && checkText == true) {
        decryption();
    }
};

function encryption() {
    var z = 0;
    for (var i = 0; i < plainText.length; i++) {
        if (plainText[i] == " ")
            i++;
        if (key[z] == " ")
            z++;
        keyafterexpansion[i] = (key[z]);
        if (z == (key.length - 1))
            z = 0;
        else
            z++;
    }
    var i = 0;
   
    for (; i < plainText.length; i++) 
    {
        let check=false;
        for (var j = 0; j < lowerLetter.length; j++) 
        {
            if (plainText[i] == lowerLetter[j])
            {
                for (var a = 0; a < lowerLetter.length; a++)
              { l= (keyafterexpansion[i]).toString().toLowerCase(); 
                if (l == lowerLetter[a]) 
                    {
                    var loc = ((j + a) % 26);
                    if (loc < 0)
                    loc = loc + 26;
                    cipherText[i] = (lowerLetter[loc]);
                    check=true;
                    break;
                   }     }break;
            } 
        
        }
            
        if(!check) 
        {
            for (var j = 0; j < upperLetter.length; j++)
                 {
                    if (plainText[i] == upperLetter[j])
                    {
                        for (var a = 0; a < upperLetter.length; a++)
                       { l= keyafterexpansion[i].toString().toUpperCase();
                        if (l == upperLetter[a]) 
                            {
                            var loc = ((j + a) % 26);
                            if (loc < 0)
                            loc = loc + 26;
                            cipherText[i] = ((upperLetter[loc]));
                            check=true;
                            break;
                         
                           }    }break;
                    }
                   
                } 
                if(!check)
       cipherText[i]=plainText[i]; 
            }
    }
        
    
    document.getElementById("outText").value = cipherText.join("");
};

function decryption() {
    var z = 0;
    for (var i = 0; i < cipherText.length; i++) {
        if (cipherText[i] == " ")
            i++;
        if (key[z] == " ")
            z++;
        keyafterexpansion[i] = (key[z]);
        if (z == (key.length - 1))
            z = 0;
        else
            z++;
    }
    var i = 0;
   
    for (; i < cipherText.length; i++) 
    {
        let check=false;
        for (var j = 0; j < lowerLetter.length; j++) 
        {
            if (cipherText[i] == lowerLetter[j])
            {
                for (var a = 0; a < lowerLetter.length; a++)
              { l= ((keyafterexpansion[i]).toString().toLowerCase()); 
                if (l == lowerLetter[a]) 
                    {
                    var loc = ((j - a) % 26);
                    if (loc < 0)
                    loc = loc + 26;
                    plainText[i] = (lowerLetter[loc]);
                    check=true;
                    break;
                   }     }break;
            } 
        
        }
            
        if(!check) 
        {
            for (var j = 0; j < upperLetter.length; j++)
                 {
                    if (cipherText[i] == upperLetter[j])
                    {
                        for (var a = 0; a < upperLetter.length; a++)
                       { l= (keyafterexpansion[i].toString().toUpperCase());
                        if (l == upperLetter[a]) 
                            {
                            var loc = ((j - a) % 26);
                            if (loc < 0)
                            loc = loc + 26;
                            plainText[i] = ((upperLetter[loc]));
                            check=true;
                            break;
                         
                           }    }break;
                    }
                   
                } 
            }
       if(!check)
       plainText[i]=cipherText[i];     
    }
        
    document.getElementById("outText").value = plainText.join("");
};
