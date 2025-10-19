import { riskScoreBad } from "../riskScore.bad.js";

test("riesgo alto para menor de edad fuera de CO", () => {
  const u = { age: 17, country: "US", failedLogins: 2, device: "unknown" };
  expect(riskScoreBad(u)).toBeGreaterThanOrEqual(60);
});

// Test intencionalmente mínimo para que la cobertura sea baja (<70%)
