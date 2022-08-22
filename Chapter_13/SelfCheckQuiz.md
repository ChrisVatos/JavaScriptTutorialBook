1) Updated code is as follows:

    function addOne(val){
       return val + 1;
    }

    function total(a, b, callback){
        const sum = a + b;
        return callback(sum);
    }

    console.log(total(4, 5, addOne));

2) Oh No

3) Add a .finally() after .catch()

4) Updated code is as follows:

    async function myFun() {
    return "Hello";

    }
    myFun().then(
        function(val) { console.log(val); },
        function(err) { conole.log(err); }
    );
