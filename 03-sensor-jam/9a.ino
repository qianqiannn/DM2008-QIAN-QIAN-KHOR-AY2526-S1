#define TRIG 9
#define ECHO 10
#define LED 6   // PWM pin for brightness

void setup() {
  Serial.begin(9600);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  // --- Measure distance ---
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);

  long duration = pulseIn(ECHO, HIGH);
  float distance = duration * 0.034 / 2;  // cm

  // --- Map distance to brightness ---
  // Example:
  // 5 cm → 255 (bright)
  // 50 cm → 0 (off)
  int brightness = map(distance, 5, 50, 255, 0);

  // Keep brightness within safe range
  brightness = constrain(brightness, 0, 255);

  // --- Apply to LED ---
  analogWrite(LED, brightness);

  // Debug print
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.print(" cm  |  Brightness: ");
  Serial.println(brightness);

  delay(20);
}
