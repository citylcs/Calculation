let screen = document.getElementById('result'),
    btn = document.getElementsByClassName('btn'),
    arr = [];
for (let i = 0;i < btn.length;i++) {
    btn[i].onclick = function () {
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
                    }
                }
                else {
                    screen.value += this.value;
                    valueListen();
                }
            }
            else {
                if (this.value === '/' ||
                    this.value === '*' ||
                    this.value === '+' ||
                    this.value === '-') {
                    arr[arr.length] = screen.value;
                    arr[arr.length] = this.value;
                    screen.value = '';
                }
                else if (this.value === 'AC') {
                    screen.value = '0';
                    arr = [];
                    screen.style.fontSize = '48px';
                }
                else if (this.value === '+/-') {
                    if (screen.value > 0) {
                        screen.value = -(screen.value);
                        valueListen();
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
                    let cal = new CalcEval();
                    arr[arr.length] = screen.value;
                    screen.value = cal.eval(arr.join(''));
                    arr = [];
                    valueListen();
                }
            }
        }
    }
}
function valueListen() {
    if (screen.value.length > 8) {
        screen.style.fontSize = '38px';
        if (screen.value.length > 10) {
            screen.style.fontSize = '28px';
            if (screen.value.length > 15) {
                screen.style.fontSize = '18px';
            }
        }
    }
}