
        function add() {
            var act=0, b=0;
            act = calculator.output.value;
            b=act.charAt(act.length-1);
            if(b == '+' || b=='-' || b=='/' || b=='*') {
                calculator.output.value=act.substring(0, act.length -1);
                calculator.output.value+='+';
            } else {
                calculator.output.value+='+';
            }
        }
        function subtract() {
            var act=0, b=0;
            act = calculator.output.value;
            b=act.charAt(act.length-1);
            if(b == '+' || b=='-' || b=='/' || b=='*') {
                calculator.output.value=act.substring(0, act.length -1);
                calculator.output.value+='-';
            } else {
                calculator.output.value+='-';
            }
        }
        function divide() {
            var act=0, b=0;
            act = calculator.output.value;
            b=act.charAt(act.length-1);
            if(b == '+' || b=='-' || b=='/' || b=='*') {
                calculator.output.value=act.substring(0, act.length -1);
                calculator.output.value+='/';
            } else {
                calculator.output.value+='/';
            }
        }
        function multiply() {
            var act=0, b=0;
            act = calculator.output.value;
            b=act.charAt(act.length-1);
            if(b == '+' || b=='-' || b=='/' || b=='*') {
                calculator.output.value=act.substring(0, act.length -1);
                calculator.output.value+='*';
            } else {
                calculator.output.value+='*';
            }
        }

