decodeMorse = function(morseCode){

    var code = morseCode.replace("  ", "")
    code= morseCode.split(" ")
    var msg = "";
    var startRead;
    
    for (let i=0; i<code.length;i++){
        if (code[i] === ""){
            continue
        }
        else {
            startRead = i;
            break;
        }
    }
    for (let i=startRead; i<code.length;i++){
     if (code[i-1] !== "" && code[i] == "" && code[i+1] == ""){
         msg += " ";
     }
     else if (code[i] == "" && code[i+1] !== ""){
         continue
     }
     else {   
     msg += MORSE_CODE[code[i]]
     }
    }
    console.log()
  }





MORSE_CODE = { 'a':'.-',
                    'b':'-...',
                    'c':'-.-.',
                    'd':'-...',
                    'e':'..-.',
                    'f':'..-.',
                    'g':'--.',
                    'h':'....',
                    'i':'..',
                    'j':'.---',
                    'k':'-.-',
                    'l':'.-..',
                    'm':'--',
                    'n':'-.',
                    'o':'---',
                    'p':'.--.',
                    'q':'--.-',
                    'r':'.-.',
                    's':'...',
                    't':'-',
                    'u':'..-',
                    'v':'...-',
                    'w':'.--',
                    'x':'-..-',
                    'y':'-.--',
                    'z':'--..',
                    '1':'.----',
                    '2':'..---',
                    '3':'...--',
                    '4':'....-',
                    '5':'.....',
                    '6':'-....',
                    '7':'--...',
                    '8':'---..',
                    '9':'----.',
                    '0':'-----',
                    ',':'--..--',
                    '.':'.-.-.-',
                    '?':'..--..',
                    '/':'-..-.',
                    '-':'-....-',
                    '(':'-.--.',
                    ')':'-.--.-',
                    ' ':' ',
                    }

decodeMorse("-.-- --- ..- . ... --- ..-. ..- -.-. -.- .. -. --. -... . .- ..- - .. ..-. ..- .-..")