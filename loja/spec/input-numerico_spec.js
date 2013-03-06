describe("ehNumero", function() {
  it("retorna true caso seja um caractere numerico", function() {
    expect(ehNumero("1")).toBe(true);
    expect(ehNumero("9")).toBe(true);
  });
  it("retorna false caso seja um caractere nao numerico", function() {
    expect(ehNumero("s")).toBe(false);
    expect(ehNumero(".")).toBe(false);
  });
});

describe("inputNumero", function() {
  it("adiciona o comportamento de apenas aceitar caracteres numericos num input", function() {
    
  });
});