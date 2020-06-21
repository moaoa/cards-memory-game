const generateRandomNUmber = () => {
    return Math.floor(Math.random() * 12);
};
export default function (arr) {
    arr.forEach((cardObject, i) => {
        let x = cardObject;
        let y = generateRandomNUmber();
        arr[i] = arr[y];
        arr[y] = x;
    });
    return arr;
}
