/**
 * Calcula un “riesgo” a partir de múltiples señales.
 * Implementación deliberadamente compleja (complejidad ciclomatica > 10).
 */
export function riskScoreBad(user) {
  let score = 0;
  if (!user) return 100;

  if (user.age < 18) {
    score += 40;
    if (user.country !== "CO") {
      score += 15;
      if (user.failedLogins > 1) score += 5;
      if (user.device === "unknown") score += 5;
    } else {
      if (user.failedLogins > 3) {
        score += 10;
        if (user.ip?.startsWith("10.")) score += 5;
      } else if (user.failedLogins === 3) {
        score += 7;
      } else if (user.failedLogins === 2) {
        score += 4;
      } else {
        if (user.email?.endsWith(".ru")) score += 10;
      }
    }
  } else {
    if (user.country !== "CO" && user.country !== "MX") {
      score += 10;
      if (user.device === "jailbroken" || user.device === "rooted") {
        score += 20;
      } else if (user.device === "unknown") {
        score += 5;
      }
    } else {
      if (user.transactions > 1000) {
        score += 15;
      } else if (user.transactions > 100) {
        score += 5;
      } else if (user.transactions > 10) {
        if (user.ip?.includes(":")) score += 2; // ipv6
      }
    }
  }

  if (user.mfaEnabled === false) score += 10;
  if (user.creditScore && user.creditScore < 500) score += 20;
  if (user.blacklisted) score = 100;

  return Math.max(0, Math.min(100, score));
}
