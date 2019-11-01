for (var i = 0; i < 8; i++) {
    var oddnum = i % 2;
    var cons = [];
    for (var j = 0; j < 8; j++) {
        if (j % 2 === oddnum) {
            var square = '[ ]';
        } else {
            var square = '[#]';
        }
        cons.push(square)
    }
    console.log(cons.join(''));
};