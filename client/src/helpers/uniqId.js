export default function generateId() {
    const alphabetAndNumbers = '1234567890abcdefghijklmnopqrstuvwxyz';
    const arr = alphabetAndNumbers.split('');
    const id = [];
    let num;
    for (let i = 0; i < 6; i++) {
        num = Math.floor(Math.random() * alphabetAndNumbers.length);
        id[i] = alphabetAndNumbers[num];
    }

    return id.join('');
}
