var fs = require('fs');

//This 2 articles helped me
//https://stackoverflow.com/questions/17645478/node-js-how-to-read-a-file-and-then-write-the-same-file-with-two-separate-functi
//https://stackoverflow.com/questions/6898779/how-to-write-asynchronous-functions-for-node-js

function getData() {
    fs.readFile('temp.txt', function (err, buf) {
        console.log(buf.toString());
        return buf.toString();
    }
    );
};

function copyData_Incorrect(savPath, srcPath) {
        console.log('*********** Async file read and write, this does not work does async nature of node js');
        fs.writeFile(savPath,getData(srcPath), function (err) {
        if (err) throw err;
        console.log('complete');
    }
    );
}

//getData ('./test/test.txt');
copyData_Incorrect('Async_copy_way_that_doesnot_work.txt', 'temp.txt');

// the above does not work since the async nature of the node js

function copyData_Correct(savPath, srcPath) {
    console.log('*********** Async file read and write, this works');
    fs.readFile(srcPath, 'utf8', function (err, data) {
        if (err) throw err;
        //Do your processing, MD5, send a satellite to the moon, etc.
        fs.writeFile(savPath, data, function (err) {
            console.log(data.toString());
            if (err) throw err;
            console.log('complete');
        });
    });
}


copyData_Correct('Async_copy_way_that_works.txt', 'temp.txt');