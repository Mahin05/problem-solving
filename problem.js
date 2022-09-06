// program to generate random strings
// declare all characters
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }
// console.log(generateString(5));



const d = `
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
function generate_document(characters, documents) {
    if (characters.length >= documents.lengt) {
        let result = ' ';
        const charactersLength = d.documents;
        for (let i = 0; i < documents; i++) {
            result += d.charAt(Math.floor(Math.random() * charactersLength));
        }

        return true;
    }
    else{
        return false
    }
}
characters = "helloworld";
document="hello world";
console.log(generate_document(characters,document))