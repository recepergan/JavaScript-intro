// this keyword


//ES5
// let list = {
//     category : 'Phone',
//     names : ['IPhone 8','IPhone 7'],
//     call : function(){
//         var self = this;
//         this.names.map(function(name){
//            // console.log(`${name}`);
//            console.log(`${self.category}`);
//         })
//     }
// }


//ES6 = > Arrow functionlar bizim için yeni bir context oluşturmaz.

// let list = {
//     category : 'Phone',
//     names : ['IPhone 8','IPhone 7'],
//     call : function(){
//                this.names.map((name) =>{
//            // console.log(`${name}`);
//         //    console.log(`${name}`);
//            console.log(`${this.category}`);
//         })
//     }
// }

// list.call();

//ES5
// function Game() {
//     this.live = 0;
//     this.addLive = function() {
//         var self = this;
//         this.OneUp = setInterval(function(){
//             console.log(++self.live)
//         },1000)
//     }
// }

//ES6

function Game() {
    this.live = 0;
    this.addLive = function() {
               this.OneUp = setInterval(() =>{
            console.log(++this.live)
        },1000)
    }
}


// let player = new Game();
// player.addLive();



