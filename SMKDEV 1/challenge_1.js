function checkCats(CatsTuti, CatsNining) {
    const correctedCatsTuti = [...CatsTuti];
    correctedCatsTuti.shift();
    correctedCatsTuti.pop();
    correctedCatsTuti.pop();
    const combinedData = correctedCatsTuti.concat(CatsNining);
    combinedData.forEach((usia, nomor) => {
        if (usia >= 3) {
            console.log(`Kucing Nomor ${nomor + 1} adalah Kucing Dewasa, dan berusia ${usia} tahun`);
        } else {
            console.log(`Kucing Nomor ${nomor + 1} adalah kucing kecil, dan berusia ${usia} tahun`);
        }
    });
}
// Data uji
const DataTuti1 = [3, 5, 2, 12, 7];
const DataNining1 = [14, 1, 15, 8, 3];

const DataTuti2 = [9, 16, 6, 8, 3];
const DataNining2 = [10, 5, 6, 1, 4];

console.log("Data 1:");
checkCats(DataTuti1, DataNining1);

console.log("\nData 2:");
checkCats(DataTuti2, DataNining2);
