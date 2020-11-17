let bottles ="";
for(bottles=98;bottles>-1;bottles--) {
    if(bottles==0) {
    console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
    }
        else if(bottles==1) {
        console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        }
        else console.log(bottles+" "+"bottles of milk on the wall,"+" "+ bottles +" "+ "bottles of milk. Take one down pass it around,"+" "+ (bottles-1) + "" + "bottles of milk on the wall");
}

