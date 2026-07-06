<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turbo Performance - Loja Oficial</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background-color: #121212;
            color: #ffffff;
        }

        header {
            background-color: #ff0000;
            padding: 20px;
            text-align: center;
            border-bottom: 4px solid #b30000;
        }

        header h1 {
            font-size: 2.5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        header p {
            font-style: italic;
            margin-top: 5px;
        }

        .container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .grid-produtos {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }

        .produto-card {
            background-color: #1e1e1e;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid #333;
            transition: transform 0.3s, border-color 0.3s;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .produto-card:hover {
            transform: translateY(-5px);
            border-color: #ff0000;
        }

        .produto-link {
            text-decoration: none;
            color: inherit;
            display: block;
        }

        .produto-imagem {
            width: 100%;
            height: 220px;
            object-fit: cover;
            background-color: #2a2a2a;
        }

        .produto-info {
            padding: 20px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .produto-titulo {
            font-size: 1.3rem;
            margin-bottom: 10px;
            color: #fff;
        }

        .produto-descricao {
            font-size: 0.9rem;
            color: #aaaaaa;
            margin-bottom: 15px;
            line-height: 1.4;
        }

        .produto-preco {
            font-size: 1.6rem;
            color: #00ff66;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .btn-comprar {
            display: block;
            background-color: #ff0000;
            color: white;
            text-align: center;
            padding: 12px;
            border-radius: 4px;
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: none;
            transition: background-color 0.2s;
        }

        .btn-comprar:hover {
            background-color: #cc0000;
        }

        footer {
            background-color: #0a0a0a;
            text-align: center;
            padding: 20px;
            margin-top: 5px;
            border-top: 1px solid #222;
            color: #666;
        }
    </style>
</head>
<body>

    <header>
        <h1>Turbo Performance</h1>
        <p>A loja definitiva para o seu projeto de arrancada e rua</p>
    </header>

    <div class="container">
        <main class="grid-produtos">

            <div class="produto-card">
                <a href="produto-fueltech.html" class="produto-link">
                    <img src="https://via.placeholder.com/400x250?text=FuelTech+FT550" alt="FuelTech FT550" class="produto-imagem">
                    <div class="produto-info">
                        <div>
                            <h2 class="produto-titulo">Injeção Programável FuelTech FT550</h2>
                            <p class="produto-descricao">Controle total do seu motor. Possui painel touchscreen, controle de tração, de arrancada e aquisição de dados integrada.</p>
                        </div>
                        <div>
                            <p class="produto-preco">R$ 7.490,00</p>
                            <a href="carrinho.html?item=fueltech" class="btn-comprar">Comprar</a>
                        </div>
                    </div>
                </a>
            </div>

            <div class="produto-card">
                <a href="produto-pneus.html" class="produto-link">
                    <img src="https://via.placeholder.com/400x250?text=Pneu+Semi-Slick" alt="Pneu Semi-Slick" class="produto-imagem">
                    <div class="produto-info">
                        <div>
                            <h2 class="produto-titulo">Pneu Semi-Slick Radial 205/50 R15</h2>
                            <p class="produto-descricao">Máxima aderência para transferir toda a potência do motor para a pista. Composto macio ideal para arrancadas.</p>
                        </div>
                        <div>
                            <p class="produto-preco">R$ 1.150,00</p>
                            <a href="carrinho.html?item=pneu" class="btn-comprar">Comprar</a>
                        </div>
                    </div>
                </a>
            </div>

            <div class="produto-card">
                <a href="produto-metanol.html" class="produto-link">
                    <img src="https://via.placeholder.com/400x250?text=Kit+Injeção+Metanol" alt="Kit Injeção de Metanol" class="produto-imagem">
                    <div class="produto-info">
                        <div>
                            <h2 class="produto-titulo">Kit de Injeção de Água/Metanol Stage 2</h2>
                            <p class="produto-descricao">Resfrie a temperatura de admissão e aumente a octanagem de forma segura para andar com mais pressão de turbo.</p>
                        </div>
                        <div>
                            <p class="produto-preco">R$ 3.890,00</p>
                            <a href="carrinho.html?item=metanol" class="btn-comprar">Comprar</a>
                        </div>
                    </div>
                </a>
            </div>

            <div class="produto-card">
                <a href="produto-turbina.html" class="produto-link">
                    <img src="https://via.placeholder.com/400x250?text=Turbina+Roletada" alt="Turbina Roletada" class="produto-imagem">
                    <div class="produto-info">
                        <div>
                            <h2 class="produto-titulo">Turbina Roletada .50 / .63 Pressão</h2>
                            <p class="produto-descricao">Enchimento rápido e fluxo perfeito para motores de 4 cilindros. Suporta até 550 cavalos de potência.</p>
                        </div>
                        <div>
                            <p class="produto-preco">R$ 4.200,00</p>
                            <a href="carrinho.html?item=turbina" class="btn-comprar">Comprar</a>
                        </div>
                    </div>
                </a>
            </div>

            <div class="produto-card">
                <a href="produto-banco.html" class="produto-link">
                    <img src="https://via.placeholder.com/400x250?text=Banco+Concha" alt="Banco Concha Racing" class="produto-imagem">
                    <div class="produto-info">
                        <div>
                            <h2 class="produto-titulo">Banco Concha Homologado Racing</h2>
                            <p class="produto-descricao">Segurança e postura corretas dentro da pista. Compatível com cintos de 4 e 5 pontos. Tecido antiderrapante.</p>
                        </div>
                        <div>
                            <p class="produto-preco">R$ 1.850,00</p>
                            <a href="carrinho.html?item=banco" class="btn-comprar">Comprar</a>
                        </div>
                    </div>
                </a>
            </div>

            <div class="produto-card">
                <a href="produto-motor.html" class="produto-link">
                    <img src="https://via.placeholder.com/400x250?text=Kit+Pistao+e+Biela" alt="Kit Motor Forjado" class="produto-imagem">
                    <div class="produto-info">
                        <div>
                            <h2 class="produto-titulo">Kit Pistões e Bielas Forjadas (Até 800cv)</h2>
                            <p class="produto-descricao">O coração do seu projeto. Componentes em liga especial para aguentar altas pressões de turbo sem quebras.</p>
                        </div>
                        <div>
                            <p class="produto-preco">R$ 5.900,00</p>
                            <a href="carrinho.html?item=motor" class="btn-comprar">Comprar</a>
                        </div>
                    </div>
                </a>
            </div>

        </main>
    </div>

    <footer>
        <p>&copy; 2026 Turbo Performance Loja Automotiva. Todos os direitos reservados.</p>
    </footer>

</body>
</html>