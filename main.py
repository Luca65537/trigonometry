def calculate_angles(x: number, y: number, l1: number, l2: number):
    global a, b, theta2, theta1
    a = (x ** 2 + y ** 2 - (l1 ** 2 - l2 ** 2)) / (2 * (l1 * l2))
    b = Math.sqrt(x ** 2 + y ** 2)
    theta2 = Math.acos(max(min(a, 1), -1))
    # Ensure 'a' is within the valid range for acos
    theta1 = Math.atan2(y, x) - Math.atan2(l2 * Math.sin(theta2), l1 + l2 * Math.cos(theta2))
theta1 = 0
theta2 = 0
b = 0
a = 0
length1 = 40
length2 = 30
targetX = 50
targetY = 40