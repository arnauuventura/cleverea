describe("Checkout coverages", () => {
  it("first step form", () => {
    cy.visit("/formulario-propietario");
    cy.fillForm1(); //Función que llena el formulario

    // Comprobar que la URL ha cambiado al segundo step.
    cy.url().should("include", "/second-step");
    /* NO SE SI ES NECESARIO
    cy.clearLocalStorage();
    cy.reload();
    cy.url().should("include", "/formulario-propietario");*/
  });

  it("show or not show coverages while click the toggle", () => {
    cy.visit("/formulario-propietario");
    cy.fillForm1();
    cy.visit("/second-step");

    // Obtener el título de la primera cobertura
    /* cy.get(".card-container .card-header h6")
      .first()
      .invoke("text")
      .then((coverageTitle) => {
        cy.get(".card-container .slide-toggle").first().click();

        // Verificar que la card se muestre en las coberturas incluidas
        cy.get(".card-header h6")
          .first()
          .invoke("text")
          .should("contain", coverageTitle);

        // Hacer clic en el toggle de nuevo para volver a seleccionar la cobertura
        cy.get(".card-container .slide-toggle").first().click();

        // Verificar que la card se muestre en las coberturas incluidas
        cy.get(".card-header h6")
          .first()
          .invoke("text")
          .should("contain", coverageTitle);
      }); */

    cy.get(".card-header h6")
      .invoke("text")
      .should("contain", "Asistencia en carretera");

    cy.contains(".card-container", "Asistencia en carretera")
      .find(".slide-toggle")
      .click();

    cy.get(".card-header h6")
      .invoke("text")
      .should("not.contain", "Asistencia en carretera");

    cy.contains(".card-container", "Asistencia en carretera")
      .find(".slide-toggle")
      .click();

    cy.get(".coverageSection").should("contain", "Asistencia en carretera");

    /*
    cy.visit("/second-step"); //Ahora he vuelto a rellenar el formulario y inicializar la página de coverages
    cy.get(".card-container .slide-toggle").first().click();

    cy.get(".coverageSection").should("not.contain", "Nombre de la cobertura");*/
  });

  it("should redirect to formulario-propietario after reload and clear local storage", () => {
    cy.visit("/formulario-propietario");
    cy.fillForm1();
    cy.clearLocalStorage();
    cy.reload();
    cy.url().should("include", "/formulario-propietario");
  });
});
