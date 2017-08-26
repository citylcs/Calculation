let button = document.getElementsByClassName('btn'),
    screen = document.getElementById('result'),
    arr = [];
for (let i = 0;i < button.length;i++) {
    button[i].onclick = function () {
        if (screen.value === '0' && this.value === '.') {
            screen.value = '0.';
        }
        else {
            if (!isNaN(this.value) || this.value === '.') {
                if (screen.value === '0') {
                    screen.value = this.value;
                }
                else if (screen.value.indexOf('.') !== -1) {
                    if (this.value !== '.') {
                        screen.value += this.value;
                        valueListen();
                    }
                }
                else {
                    screen.value += this.value;
                    valueListen();
                }
            }
            else {
                if (this.value === '+' || this.value === '-' || this.value === '*' || this.value === '/') {
                    arr[arr.length] = screen.value;
                    arr[arr.length] = this.value;
                    screen.value = '';
                }
                else if (this.value === 'AC') {
                    screen.value = '0';
                    arr = [];
                    screen.style.fontSize = '45px';
                }
                else if (this.value === '+/-') {
                    if (screen.value > 0) {
                        screen.value = -(screen.value);
                    }
                    else if (screen.value < 0) {
                        screen.value = Math.abs(screen.value);
                    }
                    else {
                        screen.value = '0';
                    }
                }
                else if (this.value === '%') {
                    screen.value = screen.value / 100;
                    valueListen();
                }
                else {
                    let calcEval = new CalcEval();
                    arr[arr.length] = screen.value;
                    screen.value = calcEval.eval(arr.join(''));
                    arr = [];
                    valueListen();
                }
            }
        }
    }
}
function valueListen() {
    if (screen.value.length > 8) {
        screen.style.fontSize = '35px';
        if (screen.value.length > 10) {
            screen.style.fontSize = '25px';
            if (screen.value.length > 15) {
                screen.style.fontSize = '15px';
            }
        }
    }
}