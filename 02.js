var figlet = require('figlet');
const mess = process.argv[2];
figlet.text(mess, function(err, data) {
    if (err) {

        console.dir(err);

    }else {
        console.log(data)
    }

});