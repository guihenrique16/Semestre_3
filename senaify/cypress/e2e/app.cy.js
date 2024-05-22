describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })
  it('passes', () => {
    cy.get("[aria-label='title-head']")
    cy.get("[aria-label='title-head']").should("contain", "Good morning")
  })
  it('Verificar se tem uma lista com as playlists exibidas', () => {
    cy.wait(2000)
    cy.get("[aria-label=playlist-item]").should("have.length.greaterThan", 0)
  })
  // it('Clicar em uma opcao de playlist e listar suas musicas', () => {
  //   cy.get("[aria-label=playlist-item]").first().click()
  //   cy.wait(2000)
  //   cy.get("[aria-label=music-item]").should("have.length.greaterThan", 0)
  // });
  // it('Clicar em uma opcao de musicas', () => {
  //   cy.get("[aria-label=music-item]").contains("Deu Moral").click()

  //   cy.scrollTo('top')

  //   cy.wait(5000)
    
  // });
  // it('passes', () => {
  //   cy.visit('/')
  // })
  // it('passes', () => {
  //   cy.get("[aria-label='title-head']")
  //   cy.get("[aria-label='title-head']").should("contain", "Good morning")
  // })
  // it('Verificar se tem uma lista com as playlists exibidas', () => {
  //   cy.wait(2000)
  //   cy.get("[aria-label=playlist-item]").should("have.length.greaterThan", 0)
  // })
  // it('Clicar em uma opcao de playlist e listar suas musicas', () => {
  //   cy.get("[aria-label=playlist-item]").contains("Esquenta Sertanejo").click()
  //   cy.wait(2000)
  //   cy.get("[aria-label=music-item]").should("have.length.greaterThan", 0)
  // });
  // it('Clicar em uma opcao de musicas', () => {
  //   cy.get("[aria-label=music-item]").contains("Morena De Goiânia").click()

  //   cy.scrollTo('top')

  //   cy.wait(5000)
    
  // });

  //Pesquisa 

  it('clicar em pesquisa e ir para a tela de pesquisa', () => {
    cy.get('[href="/Search"]').click()

    cy.scrollTo("top")
  })
  it('', () => {

    const textToType = 'Vamo De Pagodin';
  
    // Encontrar o input com o atributo textId igual a 'CampoBusca'
    cy.get("[text-id='CampoBusca']",{ timeout: 10000 }).type(textToType).should('have.value', textToType);

      cy.wait(2000)
      
    });
})