describe('Automação de testes - Seu Barriga', () => {
    beforeEach(() =>{
        cy.visit('https://seubarriga.wcaquino.me/extrato')
        cy.get('.nav > :nth-child(1) > a').click()
        cy.get('#email').type('exemploexemplo@gmail.com')
        cy.get('#senha').type('qafabrica')
        cy.get('.btn').click()
    })

    it('verificar abertura visível do login', () => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get(':nth-child(2) > a').click()
        cy.get('#nome').type('Maria Vitória')
        cy.get('#email').type('exemploexemplo@gmail.com')
        cy.get('#senha').type('qafabrica')
        cy.get('.btn').click()
    })

    it('Login com o novo usuário', () => {
        cy.visit('https://seubarriga.wcaquino.me/cadastro')
        cy.get('.nav > :nth-child(1) > a').click()
        cy.get('#email').type('exemploexemplo@gmail.com')
        cy.get('#senha').type('qafabrica')
        cy.get('.btn').click()
    })

    it('Home', () => {
        cy.visit('https://seubarriga.wcaquino.me/')
        cy.get('span > a').click()
    })

    it('Contas', () => {
        cy.visit('https://seubarriga.wcaquino.me/addConta')
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('#nome').type('Maria Vitória 01')
        cy.get('.btn').click()
    })

    it('Criar movimentação', () => {
        cy.visit('https://seubarriga.wcaquino.me/movimentacao')
        cy.get(':nth-child(3) > a').click()
        cy.get('#tipo').select('Receita')
        cy.get('#data_transacao').type('01/01/2024')
        cy.get('#data_pagamento').type('01/04/2024')
        cy.get('#descricao').type('Pagamento ref. 03/2024')
        cy.get('#interessado').type('Seu Barrriga')
        cy.get('#valor').type('1500')
        cy.get('#conta').select('Maria Vitória 01')
        cy.get('#status_pago').click()
        cy.get('.btn').click()

        cy.get('.alert').should('contain', 'Movimentação adicionada com sucesso!')
    })
    
    it('testando valor flutuante ', () => {
        cy.visit('https://seubarriga.wcaquino.me/movimentacao')
        cy.get(':nth-child(3) > a').click()
        cy.get('#tipo').select('Receita')
        cy.get('#data_transacao').type('01/01/2024')
        cy.get('#data_pagamento').type('01/04/2024')
        cy.get('#descricao').type('Pagamento ref. 03/2024')
        cy.get('#interessado').type('Seu Barrriga')
        cy.get('#valor').type('1500,50')
        cy.get('#conta').select('Maria Vitória 01')
        cy.get('#status_pago').click()
        cy.get('.btn').click()

        cy.get('.alert').should('contain', 'Movimentação adicionada com sucesso!')
    })

    it('testando valor alto em criação de movimentação ', () => {
        cy.visit('https://seubarriga.wcaquino.me/movimentacao')
        cy.get(':nth-child(3) > a').click()
        cy.get('#tipo').select('Receita')
        cy.get('#data_transacao').type('01/01/2024')
        cy.get('#data_pagamento').type('01/04/2024')
        cy.get('#descricao').type('Pagamento ref. 03/2024')
        cy.get('#interessado').type('Seu Barrriga')
        cy.get('#valor').type('1111111111111111')
        cy.get('#conta').select('Maria Vitória 01')
        cy.get('#status_pago').click()
        cy.get('.btn').click()

        cy.get('.alert').should('contain', 'Movimentação adicionada com sucesso!')
    })

    it('resumo mensal ', () => {
        cy.get(':nth-child(4) > a').click()

        cy.get('#mes').select('Abril')
        cy.get('#ano').select('2024')
        cy.get('.btn').click()

        cy.get('tbody > tr ').should('contain', 'Pagamento ref. 03/2024')
    })

    it('testando o sair da pagina ', () => {
         cy.get(':nth-child(5) > a').click()
    })
})