void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(A0);   
  float voltage = sensorValue * (5.0 / 1023.0);

  // Convert voltage to distance (approx)
  // Different sensors use different formulas, but this keeps it simple.
  float distanceCM = voltage * 100;  

  Serial.print("Voltage: ");
  Serial.print(voltage);
  Serial.print("  |  Distance approx (cm): ");
  Serial.println(distanceCM);

  delay(100);
}
