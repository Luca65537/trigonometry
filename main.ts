function calculate_angles(x: number, y: number, l1: number, l2: number) {
    
    a = (x ** 2 + y ** 2 - (l1 ** 2 - l2 ** 2)) / (2 * (l1 * l2))
    b = Math.sqrt(x ** 2 + y ** 2)
    theta2 = Math.acos(Math.max(Math.min(a, 1), -1))
    //  Ensure 'a' is within the valid range for acos
    theta1 = Math.atan2(y, x) - Math.atan2(l2 * Math.sin(theta2), l1 + l2 * Math.cos(theta2))
}

let theta1 = 0
let theta2 = 0
let b = 0
let a = 0
let length1 = 40
let length2 = 30
let targetX = 50
let targetY = 40
