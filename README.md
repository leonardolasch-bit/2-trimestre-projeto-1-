<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voz e Proteção | Conscientização e Apoio à Mulher</title>
    <style>
        /* CSS Integrado para facilidade no GitHub Pages */
        :root {
            --primary: #7c3aed;
            --primary-light: #9333ea;
            --secondary: #ec4899;
            --accent: #f472b6;
            --bg-light: #fdf2f8;
            --text-dark: #1f2937;
            --text-muted: #4b5563;
            --white: #ffffff;
            --danger-bg: #ffe4e6;
            --danger-border: #f43f5e;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-dark);
            line-height: 1.6;
        }

        /* Banner Principal / Hero */
        header {
            background: linear-gradient(135deg, #6d28d9, #d946ef);
            color: var(--white);
            text-align: center;
            padding: 4rem 1.5rem 5rem 1.5rem;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        header h1 {
            font-size: 2.8rem;
            margin-bottom: 1rem;
            font-weight: 800;
        }

        header p {
            font-size: 1.25rem;
            max-width: 650px;
            margin: 0 auto;
            opacity: 0.95;
        }

        /* Container Principal */
        .container {
            max-width: 1000px;
            margin: -2rem auto 3rem auto;
            padding: 0 1.5rem;
        }

        /* Alerta de Emergência */
        .emergency-banner {
            background-color: var(--danger-bg);
            border-left: 6px solid var(--danger-border);
            padding: 1.5rem;
            border-radius: 12px;
            margin-bottom: 2.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .emergency-banner h2 {
            color: #9f1239;
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .emergency-numbers {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 1rem;
        }

        .number-tag {
            background: var(--white);
            padding: 0.6rem 1.2rem;
            border-radius: 30px;
            font-weight: bold;
            color: #be123c;
            border: 1px solid #fecdd3;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        /* Seções e Cards */
        .section-title {
            text-align: center;
            color: var(--primary);
            font-size: 2rem;
            margin: 3rem 0 1.5rem 0;
            position: relative;
        }

        .grid-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .card {
            background: var(--white);
            padding: 2rem;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
            border: 1px solid rgba(236, 72, 153, 0.1);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        .card h3 {
            color: var(--primary);
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }

        .card ul {
            padding-left: 1.2rem;
        }

        .card li {
            margin-bottom: 0.5rem;
            color: var(--text-muted);
        }

        /* Destaques Decorativos */
        .highlight-box {
            background: linear-gradient(135deg, #ffffff, #fce7f3);
            border: 1px solid #fbcfe8;
            padding: 2rem;
            border-radius: 16px;
            margin-top: 2.5rem;
        }

        .highlight-box h3 {
            color: var(--secondary);
            margin-bottom: 1rem;
        }

        /* Rodapé */
        footer {
            background-color: #1e1b4b;
            color: #c7d2fe;
            text-align: center;
            padding: 2.5rem 1rem;
            margin-top: 4rem;
        }

        footer p {
            font-size: 0.95rem;
        }

        /* Responsividade */
        @media (max-width: 600px) {
            header h1 { font-size: 2rem; }
            header p { font-size: 1rem; }
            .container { margin-top: -1rem; }
        }
    </style>
</head>
<body>

    <header>
        <h1>Voz, Respeito e Proteção</h1>
        <p>Um espaço de conscientização, apoio e orientação para o combate a todas as formas de violência contra a mulher.</p>
    </header>

    <div class="container">

        <div class="emergency-banner">
            <h2>🚨 Precisa de ajuda imediata?</h2>
            <p>Se você ou alguém que conhece está em perigo ou necessita de acolhimento, procure os canais oficiais gratuitos e confidenciais:</p>
            <div class="emergency-numbers">
                <span class="number-tag">📞 Ligue 180 — Central de Atendimento à Mulher</span>
                <span class="number-tag">🚓 Ligue 190 — Polícia Militar (Emergências)</span>
                <span class="number-tag">🏥 Ligue 192 — SAMU (Atendimento Médico)</span>
            </div>
        </div>

        <h2 class="section-title">Compreendendo as Formas de Violência</h2>
        <div class="grid-cards">
            <div class="card">
                <h3>Assédio</h3>
                <p>Abordagens e investidas indesejadas que causam constrangimento, medo ou intimidação no trabalho, nas ruas ou em ambientes educacionais.</p>
            </div>
            <div class="card">
                <h3>Bullying / Cyberbullying</h3>
                <p>Agressões verbais, humilhações sistemáticas, isolamento social ou ataques virtuais recorrentes destinados a desvalorizar a mulher.</p>
            </div>
            <div class="card">
                <h3>Violência Sexual</h3>
                <p>Qualquer ato sexual ou tentativa sem o consentimento explícito e livre da mulher. Trata-se de um crime grave que exige denúncia e apoio.</p>
            </div>
        </div>

        <h2 class="section-title">Como Combater e Buscar Segurança</h2>
        <div class="grid-cards">
            <div class="card">
                <h3>1. Guarde Evidências</h3>
                <ul>
                    <li>Faça capturas de tela (prints) de mensagens ou fotos.</li>
                    <li>Anote datas, horários e nomes de testemunhas.</li>
                    <li>Guarde e-mails e registros digitais.</li>
                </ul>
            </div>
            <div class="card">
                <h3>2. Busque Apoio</h3>
                <ul>
                    <li>Converse com pessoas de sua inteira confiança.</li>
                    <li>Procure a Delegacia da Mulher (DEAM) mais próxima.</li>
                    <li>Solicite Medidas Protetivas de Urgência se necessário.</li>
                </ul>
            </div>
            <div class="card">
                <h3>3. Rede Comunitária</h3>
                <ul>
                    <li>Não enfrente o problema sozinha.</li>
                    <li>Participe de coletivos e grupos de acolhimento.</li>
                    <li>Busque atendimento psicológico especializado.</li>
                </ul>
            </div>
        </div>

        <div class="highlight-box">
            <h3>⚖️ Seus Direitos Garantidos por Lei</h3>
            <p>No Brasil, a <strong>Lei Maria da Penha (Lei nº 11.340/2006)</strong> e a <strong>Lei do Minuto Seguinte (Lei nº 12.845/2013)</strong> garantem que vítimas de violência tenham direito a atendimento médico emergencial gratuito pelo SUS, acolhimento psicológico, suporte jurídico e medidas protetivas imediatas.</p>
        </div>

    </div>

    <footer>
        <p>&copy; Projeto de Conscientização e Apoio à Mulher — Hospedado no GitHub Pages</p>
    </footer>

</body>
</html>}
