/* Configurações Gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f9f4f8;
    color: #333333;
    line-height: 1.6;
}

/* Cabeçalho */
header {
    background: linear-gradient(135deg, #8a4af3, #e056fd);
    color: #ffffff;
    text-align: center;
    padding: 3rem 1rem;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

/* Conteúdo Principal */
.container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.card {
    background: #ffffff;
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    border-left: 5px solid #8a4af3;
}

.card h2 {
    color: #6c5ce7;
    margin-bottom: 1rem;
}

.card p {
    margin-bottom: 1rem;
}

.card ul {
    list-style-type: none;
}

.card ul li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
}

.card ul li::before {
    content: "•";
    color: #e056fd;
    font-weight: bold;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: -0.2rem;
}

/* Destaque para Canais de Ajuda */
.canal-ajuda {
    background-color: #f3ebff;
    border-left-color: #e056fd;
}

/* Rodapé */
footer {
    text-align: center;
    padding: 1.5rem;
    color: #666666;
    font-size: 0.9rem;
    margin-top: 2rem;
}
