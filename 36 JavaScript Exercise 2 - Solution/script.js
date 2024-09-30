let user = prompt("Enter S, W or G");
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["s", "w", "g"][cpuI]

const match = (cpu, user) => {
    if (cpu === user) {
        return "Nobody game is tie";
    } else if (cpu === "s" && user === "w") {
        return "cpu";
    } else if (cpu === "s" && user === "g") {
        return "user";
    } else if (cpu === "g" && user === "w") {
        return "user";
    } else if (cpu === "g" && user === "s") {
        return "cpu";
    } else if (cpu === "w" && user === "g") {
        return "cpu";
    } else if (cpu === "w" && user === "s") {
        return "user";
    } 
}
let result = match(cpu, user)
console.log(`CPU: ${cpu} and user: ${user}: \nThe winner is: ${result}`)
