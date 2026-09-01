let fontSize = 1.5; // Đơn vị rem
const noTexts = ["Are you sure?", "Really sure??", "Pookie please...", "Think about it!" ,"I will be very up sad !","Come on !" ,"Can you considering it again ?" , "You are the apple in my eyes" , "You are almost better than chocolate !" , "You complete me" , "Are you a thief? Cause you stole my heart" , "I need you like a heart needs a beat",  "I'm not good at anything ... execpt loving you" ,"Loving you is like breathing. I just can't stop" ,"You light up my life" , "You are my destiny" , "I can't stop thinking about you" , "Once meeting you , nobody else matters."];
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
