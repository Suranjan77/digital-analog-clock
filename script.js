function calculate_angles() {
    const curr_date = new Date();

    return [
        6 * curr_date.getSeconds(),
        6 * curr_date.getMinutes(),
        0.5 * (60 * (curr_date.getHours() % 12 || 12) + curr_date.getMinutes())
    ];
}

function calculate_starting_angles() {
    const starting_angles = document.getElementById("start-angles");
    const [s_hand_ang, m_hand_ang, h_hand_ang] = calculate_angles();
    starting_angles.innerText = h_hand_ang + " : " + m_hand_ang + " : " + s_hand_ang;
}

function draw_clock_circle() {
    const win_width = window.innerWidth;
    const win_height = window.innerHeight;

    const circle_diameter = Math.floor(Math.min(win_width, win_height) * 0.8) + "px";
    console.log(circle_diameter);

    const clock_item = document.getElementById("clock");

    clock_item.setAttribute("style", `width: ${circle_diameter} !important; height: ${circle_diameter} !important`);
    console.log("circle diameter: ", clock_item.style.height);
}

window.onload = () => {
    calculate_starting_angles();
    draw_clock_circle();

    window.onresize = () => draw_clock_circle();

    const s_hand = document.getElementById("s-hand");
    const m_hand = document.getElementById("m-hand");
    const h_hand = document.getElementById("h-hand");

    window.setInterval(() => {
        const [s_hand_ang, m_hand_ang, h_hand_ang] = calculate_angles();
        s_hand.innerText = s_hand_ang;
        m_hand.innerText = m_hand_ang;
        h_hand.innerText = h_hand_ang;
    }, 500);
};