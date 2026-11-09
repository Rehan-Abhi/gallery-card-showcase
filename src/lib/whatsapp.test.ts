import { describe, it, expect } from "vitest";
import { buildWhatsAppUrl, validateBooking } from "./whatsapp";

const data = { name: "Ram", phone: "9876543210", area: "Model Gram (141002)", service: "RO Dealers", problem: "Leak & noise" };

describe("whatsapp booking", () => {
  it("sends to the owner's number 919915540690", () => {
    expect(buildWhatsAppUrl(data).startsWith("https://wa.me/919915540690?text=")).toBe(true);
  });
  it("encodes the message", () => {
    expect(buildWhatsAppUrl(data)).toContain(encodeURIComponent("Leak & noise"));
  });
  it("rejects a short phone number", () => {
    expect(validateBooking({ ...data, phone: "12345" }).phone).toBeDefined();
  });
});
