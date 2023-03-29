export function getRandomColorName() {
    let colors = [
        "yellow",
        "green",
        "blue",
        "red",
    ]
    return colors[Math.floor(Math.random() * colors.length)];
  }

export function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
