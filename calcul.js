let a = '';
let b = '';
let sign = '';
let finish = false;
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];
//let znac = false;


const out = document.querySelector('.calc_screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
    //let znac = false;
}

// основная функция расчетов
document.onclick = (su) => {
    // проверка нажата ли кнопка а не что то другое если не кнопка то выход
    if (!su.target.matches('.btn')) { return; }
    // нажата кнопка AC тоже выход
    if (su.target.matches('.ac')) {
        clearAll();
        a = '';
        // out.textContent = ' ';  
        return;
    }
    // нажата кнопка +/-
    if (su.target.matches('.plus-minus')) {

        if (a !== '') {
            out.textContent = a *= -1;
        }
        return;
    }
    // нажат del
    if (su.target.matches('.backspace')) {
        let disp = out.textContent;
        if (disp == a) {
            if (disp.length == 1) {
                a = 0;
            }
            else { a = disp.slice(0, -1) }
            out.textContent = a;
            return;
        }
        else {
            if (disp.length == 1) {
                b = 0;
            }
            else { b = disp.slice(0, -1) }
            out.textContent = b;
            return;


        }
        // if ( out.textContent.length == 1) {
        //     a=0;   
        // }
        // if (a !== '') {
        //     if (a.length==1) {
        //         a=0;            
        //     }
        //     else{ a = a.slice(0, -1);}


        // }
        // out.textContent = a;
        // return;
    }

    out.textContent = '';
    // переменная для хранения нажатой кнопки]
    const key = su.target.innerHTML;
    //console.log(key);

    //проверка нажата ли кнопка из массива digit Идет наполнение переменных
    if (digit.includes(key)) {
        //отработка двойного нажатия 0
        if (a === '0' && key === '0') {
            //console.log(key+"  Ноль");  
            out.textContent = a;
            a = '';
            return;
        }

        if (a === '.' && key === '.') {
            //console.log(key+"  Ноль");  
            out.textContent = a;
            a = '';
            return;
        }


        if (b === '' && sign === '') {
            a += key;

            out.textContent = a;
        }
        else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;

        }
        else {
            b += key;
            out.textContent = b;
        }

        console.log(a, b, sign);
        return;

    }
    // проверка на арифм.знак из массива action
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    //нажата =
    if (key === '=') {
        if (b === '') b = a; // если несколько раз жать =

        switch (sign) {
            case "+":
                a = (+a) + (+b);
                // b='0';
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'ERROR'; // деление на 0
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);

    }




}
