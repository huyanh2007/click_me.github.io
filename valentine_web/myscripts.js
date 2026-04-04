let fontSize = 1.5; // Đơn vị rem
const noTexts = ["Are you sure?", "Really sure??", "Pookie please...", "Think about it!" ,"I will be very up sad !","Come on !" ,"Think about it !"];
let noCount = 0;

document.getElementById('noBtn').addEventListener('click', () => {
    // 1. Phóng to nút Yes
    fontSize += 0.5;
    document.getElementById('yesBtn').style.fontSize = fontSize + 'rem';
    
    // 2. Thay đổi text nút No
    if (noCount < noTexts.length) {
        document.getElementById('noBtn').innerText = noTexts[noCount];
        noCount++;
    }
});

document.getElementById('yesBtn').addEventListener('click', () => {
    // Chuyển sang màn hình thành công
    document.querySelector('.container').innerHTML = `
        <h1>Knew you would say yes!</h1>
        <img src="assets/bugcat7.gif">
    `;
});