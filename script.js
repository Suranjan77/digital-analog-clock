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

function draw_clock() {
    const win_width = window.innerWidth;
    const win_height = window.innerHeight;

    const circle_diameter = Math.floor(Math.min(win_width, win_height) * 0.8);

    const clock_item = document.getElementById("clock");
    clock_item.setAttribute("style", `width: ${circle_diameter}px !important; height: ${circle_diameter}px !important;`);

    const num_12 = document.getElementById("num_12");
    const num_3 = document.getElementById("num_3");
    const num_6 = document.getElementById("num_6");
    const num_9 = document.getElementById("num_9");

    const clock_style = window.getComputedStyle(clock_item);
    const clock_padding = parseInt(clock_style.getPropertyValue("padding"));

    const font_size = parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);

    console.log("Clock padding: " + clock_padding);
    console.log("Font size: " + font_size);
    console.log("Offset height: " + num_6.offsetHeight);

    num_12.setAttribute("style", `left: ${Math.floor(circle_diameter / 2) - num_12.offsetWidth / 2}px !important;`);
    num_3.setAttribute("style", `top: ${Math.floor(circle_diameter / 2) - num_3.offsetHeight / 2}px !important; left: ${circle_diameter - clock_padding - num_3.offsetWidth}px !important;`);
    num_6.setAttribute("style", `top: ${circle_diameter - clock_padding - num_6.offsetHeight}px !important; left: ${Math.floor(circle_diameter / 2) - num_6.offsetWidth / 2}px !important;`);
    num_9.setAttribute("style", `top: ${Math.floor(circle_diameter / 2) - num_9.offsetHeight / 2}px !important;`);
}

window.onload = () => {
    calculate_starting_angles();
    draw_clock();

    window.onresize = () => draw_clock();

    const s_hand = document.getElementById("s-hand");
    const m_hand = document.getElementById("m-hand");
    const h_hand = document.getElementById("h-hand");

    window.setInterval(() => {
        const [s_hand_ang, m_hand_ang, h_hand_ang] = calculate_angles();
        s_hand.innerText = s_hand_ang;
        m_hand.innerText = m_hand_ang;
        h_hand.innerText = h_hand_ang;

        const second = document.getElementById("second");
        const hour = document.getElementById("hour");
        const minute = document.getElementById("minute");

        second.setAttribute("style", `transform: rotate(${s_hand_ang + 270}deg) !important;`);
        hour.setAttribute("style", `transform: rotate(${h_hand_ang + 270}deg) !important;`);
        minute.setAttribute("style", `transform: rotate(${m_hand_ang + 270}deg) !important;`);
    }, 1000);
};