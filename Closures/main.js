// a closure is a  function that closes some state or data so it can be elsewhere in the application later
function outer() {
    let x =  1;
    function inner () {
        x = x + 1;
    }
    return inner;
}

const incrementX = outer();
incrementX();
incrementX();