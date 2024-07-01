function Grip_Down () {
    Motor_Stop()
    iBIT.Servo(ibitServo.SV2, 150)
    basic.pause(200)
}
function Forward () {
    iBIT.Motor2(ibitMotor.Forward, Left_Speed, Rigth_Speed)
}
input.onButtonPressed(Button.A, function () {
    while (true) {
        Trac()
    }
})
function UTurn () {
    Motor_Stop()
    iBIT.Spin(ibitSpin.Right, Turm_Speed)
    basic.pause(300)
    Convert_7ADC()
    while (R3 == 1) {
        Convert_7ADC()
    }
    Motor_Stop()
}
function Turn_Left () {
    Motor_Stop()
    iBIT.Spin(ibitSpin.Left, Turm_Speed)
    basic.pause(100)
    Convert_7ADC()
    while (L2 == 1) {
        Convert_7ADC()
    }
    Motor_Stop()
}
function Trac () {
    Convert_7ADC()
    if (C == 0) {
        Forward()
    } else if (L1 == 0) {
        iBIT.Turn(ibitTurn.Left, 30)
    } else if (L2 == 0) {
        iBIT.Turn(ibitTurn.Left, 50)
    } else if (R1 == 0) {
        iBIT.Turn(ibitTurn.Right, 30)
    } else if (R2 == 0) {
        iBIT.Turn(ibitTurn.Right, 30)
    }
}
function Grip () {
    Motor_Stop()
    iBIT.Servo(ibitServo.SV1, 70)
    basic.pause(200)
}
function Show7ADC () {
    Read7ADC()
    basic.showNumber(L3)
    basic.pause(5000)
    basic.showNumber(L2)
    basic.pause(5000)
    basic.showNumber(L1)
    basic.pause(5000)
    basic.showNumber(C)
    basic.pause(5000)
    basic.showNumber(R1)
    basic.pause(5000)
    basic.showNumber(R2)
    basic.pause(5000)
    basic.showNumber(R3)
}
function Puy () {
    Motor_Stop()
    iBIT.Servo(ibitServo.SV1, 70)
    basic.pause(200)
}
input.onButtonPressed(Button.AB, function () {
    sonar2()
    basic.showNumber(Distance)
})
function Turn_Rigth () {
    Motor_Stop()
    iBIT.Spin(ibitSpin.Right, Turm_Speed)
    basic.pause(100)
    Convert_7ADC()
    while (R2 == 1) {
        Convert_7ADC()
    }
    Motor_Stop()
}
input.onButtonPressed(Button.B, function () {
    Show7ADC()
})
function Grip_Up () {
    Motor_Stop()
    iBIT.Servo(ibitServo.SV2, 40)
    basic.pause(200)
}
function Convert_7ADC () {
    Read7ADC()
    if (L3 < RefL3) {
        L3 = 0
    } else {
        L3 = 1
    }
    if (L2 < RefL2) {
        L2 = 0
    } else {
        L2 = 1
    }
    if (L1 < RefL1) {
        L1 = 0
    } else {
        L1 = 1
    }
    if (C < RefC) {
        C = 0
    } else {
        C = 1
    }
    if (R1 < RefR1) {
        R1 = 0
    } else {
        R1 = 1
    }
    if (R2 < RefR2) {
        R2 = 0
    } else {
        R3 = 1
    }
    if (R3 < RefR3) {
        R3 = 0
    } else {
        R3 = 1
    }
}
function sonar2 () {
    Distance += sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    if (Distance == 0) {
        Distance += 10000
    }
}
function Initial_Speed () {
    if (Base_Speed <= 50) {
        Left_Speed = Base_Speed - 1
        Rigth_Speed = Base_Speed - 0
    } else if (Base_Speed <= 70) {
        Left_Speed = Base_Speed - 0
        Rigth_Speed = Base_Speed - 0
    } else {
        Left_Speed = Base_Speed - 0
        Rigth_Speed = Base_Speed - 1
    }
}
function Read7ADC () {
    L3 = iBIT.ReadADC(ibitReadADC.ADC0)
    L2 = iBIT.ReadADC(ibitReadADC.ADC1)
    L1 = iBIT.ReadADC(ibitReadADC.ADC2)
    C = iBIT.ReadADC(ibitReadADC.ADC3)
    R1 = iBIT.ReadADC(ibitReadADC.ADC4)
    R2 = iBIT.ReadADC(ibitReadADC.ADC5)
    R3 = iBIT.ReadADC(ibitReadADC.ADC6)
}
function Backward () {
    iBIT.Motor2(ibitMotor.Forward, Left_Speed, Rigth_Speed)
}
function Motor_Stop () {
    iBIT.MotorStop()
    basic.pause(10)
}
let Distance = 0
let L3 = 0
let R2 = 0
let R1 = 0
let L1 = 0
let C = 0
let L2 = 0
let R3 = 0
let Rigth_Speed = 0
let Left_Speed = 0
let RefR3 = 0
let RefR2 = 0
let RefR1 = 0
let RefC = 0
let RefL1 = 0
let RefL2 = 0
let RefL3 = 0
let Base_Speed = 0
let Turm_Speed = 0
Grip_Down()
Grip()
basic.showIcon(IconNames.Pitchfork)
Grip_Up()
Puy()
let speed = 100
let ACC_Speed = 100
let Slow_Speed = 50
Turm_Speed = 70
Base_Speed = speed
Initial_Speed()
RefL3 = 0
RefL2 = 0
RefL1 = 0
RefC = 0
RefR1 = 0
RefR2 = 0
RefR3 = 0
