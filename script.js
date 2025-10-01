starting_angles = document.getElementById("start-angles");
s_hand = document.getElementById("s-hand");
m_hand = document.getElementById("m-hand");
h_hand = document.getElementById("h-hand");

const [s_hand_ang, m_hand_ang, h_hand_ang] = calculateAngles();

starting_angles.innerText = h_hand_ang + " : " + m_hand_ang + " : " + s_hand_ang;

function calculateAngles() {
    const curr_date = new Date();

    return [
        6 * curr_date.getSeconds(),
        6 * curr_date.getMinutes(),
        0.5 * (60 * (curr_date.getHours() % 12 || 12) + curr_date.getMinutes())
    ];
}

window.setInterval(() => {
    const [s_hand_ang, m_hand_ang, h_hand_ang] = calculateAngles();
    s_hand.innerText = s_hand_ang;
    m_hand.innerText = m_hand_ang;
    h_hand.innerText = h_hand_ang;
}, 800);