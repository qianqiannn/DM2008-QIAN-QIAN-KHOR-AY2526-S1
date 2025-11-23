// Pin assignments
const int blinkLED = 13;   // LED that blinks
const int fadeLED  = 9;    // LED that fades (PWM pin)

void setup() {
  pinMode(blinkLED, OUTPUT);
  pinMode(fadeLED, OUTPUT);
}

void loop() {
  // --- LED #2: Blink ---
  digitalWrite(blinkLED, HIGH);  // turn ON
  delay(500);                    // wait 0.5 sec
  digitalWrite(blinkLED, LOW);   // turn OFF
  delay(500);

  // --- LED #3: Fade ---
  for (int brightness = 0; brightness <= 255; brightness++) {
    analogWrite(fadeLED, brightness);
    delay(5);
  }

  for (int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(fadeLED, brightness);
    delay(5);
  }

  // LED #1 stays ON permanently using 5V (no code needed)
}
