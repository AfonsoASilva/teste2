Feature: Petz

    Scenario: Test Link e botoes LandingPage
        Given acesso o site da petz
        Then consulte por racao
        Then valide o nome do produto, preço normal e preço para assinante
        Then insira o produto no carrinho de compras
        Then valide se os dados do item continuam idênticos
        Then finalize a compra        