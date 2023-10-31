//print stars(*) 1-5 ============================================================

// let n =5;
// for(let i=1; i<=n; i++){
//     process.stdout.write('* ')
//     console.log();
// }


// print stars 5 rows 5 columns====================================================

// let n =5;
// for(let i=1; i<=n; i++){
//     for(j=1; j<=n; j++){
//         process.stdout.write('* ') 
//     }
//     console.log();
// }


//print 10 in 5 rows & 5 columns =========================================================================

// let n =4;
// for(let i=1; i<=n; i++){
//     for(j=1; j<=5; j++){
//         process.stdout.write('10 ') 
//     }
//     console.log();
// }

//print 11111 to 55555 =======================================================================================

// let n = 5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         process.stdout.write(i+ ' ') 
//     }
//     console.log();
// }


//print 12345 to 5 times ======================================================================================

// let n = 5;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         process.stdout.write(j + ' ') 
//     }
//     console.log();
// }

//print 54321 to 5 times =======================================================================================

// let n = 5;
// for(let i=1; i<=n; i++){
//     for(let j=5; j>=1; j--){
//         process.stdout.write(j + ' ') 
//     }
//     console.log();
// }


//print sq from 1 to 5 ========================================================================================

// let n = 5;
// for(let i=1; i<=n; i++){
//     for(j=1; j<=n; j++){
//         process.stdout.write(j*j + ' ') 
//     }
//     console.log();
// }


//print aaaaa to eeeee =========================================================================================

// let n = 3;
// for(let i=1; i<=n; i++){
//     let charname = String.fromCharCode(96 + i);
//         for(j =1; j<=n; j++){
//         process.stdout.write(charname + ' ') 
//     }
//     console.log();
// }


//print abc 5 times =========================================================================================

// let n = 3;

// for (let i = 1; i <= n; i++) {
//   for (let j = 'a'; j <= 'c'; j++) {
//     process.stdout.write(j + ' ');
//   }
//   console.log();                               //check
// }


//print 1 to 25, 5 rows 5 columns =================================================================

// let n =5; 
// let count = 1;
// for(let i =1; i<=n; i++){
//     for(j=1; j<=n; j++){
//         process.stdout.write(count + ' ');
//         count++
//     }
//     console.log();
// }

// print *** 3 times in 3 lines ===========================================

// let n=3;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//             // console.log('*');
//             process.stdout.write('*')
//     }
//     console.log();
// }
 
//Print * then ** then *** =======================================================================

// let a = 3;
// for(let i=0; i<=n; i++){
//     for(j=1; j<=i; j++){
//         process.stdout.write('*')
//     }
//     console.log();
// }

// print 1 2 3 ====================================================================================

// let n = 5;
// let count = 1;
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(count + ' ') 
//         count++
//     }
//     console.log();
// }


// print 1 then 1 2 then 1 2 3 =========================================================================================================

// let n = 5; 
// for(let i=1; i<=n; i++){
//     for(j=1; j<=i; j++){
//         process.stdout.write(j+ ' ')
//     }
//     console.log();
// }

//print 1 then 2 2 then 3 3 3 =================================================================================

// let n = 15; 
// for(let i=1; i<=n; i++){
//     for(j=1; j<=i; j++){
//         process.stdout.write(i + ' ')
//     }
//     console.log();
// }


// print  =======================================================================================================

// let n = 5;
// for(let i=1; i<=n; i++){
//         for(j=i; j>=1; j--){
//             process.stdout.write(j + ' ')
//         }
//         console.log();
//     }


// print a then b b then c c c =============================================================================

// let n = 13;
// for(let i=1; i<=n; i++){
//     let charname = String.fromCharCode(96 + i);
//     for(j=1; j<=i; j++){
// process.stdout.write(charname + ' ')
//     }
//     console.log();
// }

// print ***** then **** then *** then ** then * ============================================================

// let n=3; 
// for(let i=1; i<=n; i++){
//     for(j=1; j<=n-(i-1); j++){
//         process.stdout.write('* ')
//     }
//     console.log();
// }


// print 12345 then 1234 then 123 then 12 then 1 ===========================================================

// let a=5; 
// for(let row=1; row<=a; row++){
//     for(col=1; col<=a-(row-1); col++){
//         process.stdout.write(col + ' ')
//     }
//     console.log();
// }


// print 555 then 55 then 5 ===============================================================================

// let n = 13;
// for(let i=1; i<=n; i++){
//     for(j=n; j>=n-i+1; j--){
//         process.stdout.write(j + ' ')
//     }
//     console.log();
// }


// print 1 the 1 2 from right to left ====================================================================

// let a = 7;
// for(let i =1; i<=a; i++){
//     // for spaces -----
//     for(j=a-i; j>0; j--){
//         process.stdout.write('  ')
//     }
//    for(k =i; k>=1; k--){
//     process.stdout.write(k + ' ')
//    }
//    console.log();
// }