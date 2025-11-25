import React, { useState } from 'react';

const Investment = () => {
    const [showViability, setShowViability] = useState(false);

    // Premissas da viabilidade
    const leads = 600;
    const ticket = 150;
    const currentConv = 25; // dentro do benchmark saudável 20–35%
    const upliftFactor = 1.5;
    const setupCost = 5000;
    const monthlyFee = 2000;

    const currentRevenue = leads * (currentConv / 100) * ticket;
    const projectedRevenue = leads * ((currentConv * upliftFactor) / 100) * ticket;
    const extraRevenue = projectedRevenue - currentRevenue;
    const netAfterFee = extraRevenue - monthlyFee;
    const paybackDays = Math.round((setupCost / extraRevenue) * 30);

    const currency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return (
        <section className="section" style={{ paddingTop: '5rem', paddingBottom: '5rem', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2>Investimento</h2>
                    <p>Tudo o que você precisa para escalar sua operação comercial.</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                        className="glass-panel-dark"
                        style={{
                            padding: '0',
                            textAlign: 'left',
                            maxWidth: '900px',
                            width: '100%',
                            background: '#0f172a',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRadius: '1.5rem',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1.2fr',
                            position: 'relative'
                        }}
                    >
                        {/* Left Side: Features */}
                        <div style={{ padding: '3rem', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{
                                display: 'inline-block',
                                padding: '0.25rem 0.75rem',
                                background: 'rgba(16, 185, 129, 0.1)',
                                color: '#10b981',
                                borderRadius: '999px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                border: '1px solid rgba(16, 185, 129, 0.2)'
                            }}>
                                PACOTE COMPLETO
                            </div>
                            <h3 style={{ color: 'white', fontSize: '1.75rem', marginBottom: '1rem' }}>Ecossistema Convert.AI</h3>
                            <p style={{ color: '#a1a1aa', marginBottom: '2rem', lineHeight: 1.6 }}>
                                A solução definitiva para transformar seu atendimento em uma máquina de vendas 24/7.
                            </p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    'Setup e Configuração Inicial',
                                    'Treinamento da IA (Base de Conhecimento)',
                                    'Integração com WhatsApp Oficial',
                                    'Dashboard de Métricas em Tempo Real',
                                    'Suporte Prioritário'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#e4e4e7' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side: Pricing */}
                        <div style={{
                            padding: '3rem',
                            background: 'radial-gradient(circle at top right, rgba(16, 185, 129, 0.1), transparent 60%)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ color: '#71717a', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '0.5rem' }}>
                                    INVESTIMENTO ÚNICO
                                </div>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', fontFamily: 'monospace', letterSpacing: '-0.05em' }}>R$ 5.000</span>
                                </div>
                                <div style={{ color: '#e4e4e7', fontSize: '1rem', fontWeight: 500, marginTop: '0.75rem' }}>
                                    Desenvolvimento e Implementação do Sistema
                                </div>
                                <div style={{ color: '#71717a', fontSize: '0.8rem', marginTop: '0.75rem', lineHeight: 1.5 }}>
                                    Condições de pagamento:
                                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', marginBottom: 0 }}>
                                        <li>50% à vista e 50% na entrega do projeto</li>
                                        <li>Parcelamento em até 12x no cartão de crédito*</li>
                                    </ul>
                                </div>
                            </div>

                            <div style={{ marginBottom: '3rem', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', gap: '1rem' }}>
                                    <span style={{ color: '#e4e4e7', fontWeight: 600, whiteSpace: 'nowrap' }}>Mensalidade</span>
                                    <span style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem', whiteSpace: 'nowrap' }}>R$ 2.000</span>
                                </div>
                                <div style={{ color: '#71717a', fontSize: '0.85rem' }}>
                                    Inclui custos de servidores, banco de dados, suporte e melhoria contínua da IA.
                                </div>
                            </div>

                            <button
                                className="btn"
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    height: '3.25rem',
                                    fontSize: '0.95rem',
                                    fontWeight: 700,
                                    borderRadius: '999px',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    color: '#10b981',
                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                    boxShadow: 'none',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em'
                                }}
                                onClick={() => setShowViability(true)}
                            >
                                Veja a Viabilidade do Projeto
                            </button>
                            <p style={{ textAlign: 'center', color: '#52525b', fontSize: '0.8rem', marginTop: '1rem' }}>
                                *Taxa de juros aplicada ao contratante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {showViability && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.65)',
                        zIndex: 60,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}
                >
                    <div
                        style={{
                            width: 'min(520px, 100%)',
                            background: '#f7f7f3',
                            borderRadius: '1.5rem',
                            border: '1px solid rgba(0,0,0,0.05)',
                            boxShadow: '0 25px 70px rgba(0,0,0,0.45)',
                            padding: '1.75rem',
                            color: '#1f2937',
                            position: 'relative',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <div style={{ display: 'inline-flex', padding: '0.35rem 0.85rem', background: 'rgba(1, 49, 23, 0.08)', borderRadius: '999px', border: '1px solid rgba(1,49,23,0.18)', color: '#013117', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                                Viabilidade
                            </div>
                            <button
                                onClick={() => setShowViability(false)}
                                aria-label="Fechar"
                                style={{
                                    background: 'transparent',
                                    color: '#6b7280',
                                    border: '1px solid rgba(0,0,0,0.08)',
                                    borderRadius: '999px',
                                    padding: '0.35rem 0.9rem',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}
                            >
                                Voltar
                            </button>
                        </div>

                        <h3 style={{ color: '#013117', marginBottom: '0.5rem', fontSize: '1.6rem' }}>Veja como o projeto se paga</h3>
                        <p style={{ color: '#374151', marginBottom: '0.75rem', lineHeight: 1.6 }}>
                            Hoje, com cerca de {leads} leads por mês, ticket médio de {currency.format(ticket)} e taxa de conversão em torno de {currentConv}%,
                            o seu cenário atual gera aproximadamente {currency.format(currentRevenue)} em receita.
                        </p>
                        <p style={{ color: '#374151', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                            Com a estrutura de IA proposta, consideramos um aumento conservador de 50% na conversão. Isso leva sua receita estimada para
                            {` `}{currency.format(projectedRevenue)}, gerando cerca de {currency.format(extraRevenue)} a mais por mês apenas aproveitando melhor os leads que você já tem.
                        </p>

                        <div style={{ display: 'grid', gap: '0.85rem', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', marginBottom: '1.25rem' }}>
                            <div style={{ padding: '0.9rem', borderRadius: '0.85rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 4px 10px rgba(0,0,0,0.04)' }}>
                                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Receita Atual</div>
                                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.1rem' }}>{currency.format(currentRevenue)}</div>
                            </div>
                            <div style={{ padding: '0.9rem', borderRadius: '0.85rem', background: '#eef7ee', border: '1px solid rgba(1,49,23,0.12)' }}>
                                <div style={{ fontSize: '0.85rem', color: '#013117' }}>Receita com IA (+50%)</div>
                                <div style={{ fontWeight: 800, color: '#013117', fontSize: '1.1rem' }}>{currency.format(projectedRevenue)}</div>
                            </div>
                            <div style={{ padding: '0.9rem', borderRadius: '0.85rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 4px 10px rgba(0,0,0,0.04)' }}>
                                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Receita Extra</div>
                                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.1rem' }}>{currency.format(extraRevenue)}</div>
                            </div>
                            <div style={{ padding: '0.9rem', borderRadius: '0.85rem', background: '#ffffff', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 4px 10px rgba(0,0,0,0.04)' }}>
                                <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>Payback Estimado</div>
                                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.1rem' }}>{paybackDays} dias</div>
                            </div>
                            <div style={{ padding: '0.9rem', borderRadius: '0.85rem', background: '#eef7ee', border: '1px solid rgba(1,49,23,0.12)' }}>
                                <div style={{ fontSize: '0.85rem', color: '#013117' }}>Líquido Após Mensalidade</div>
                                <div style={{ fontWeight: 800, color: '#013117', fontSize: '1.1rem' }}>{currency.format(netAfterFee)}</div>
                            </div>
                        </div>

                        <div style={{ color: '#374151', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Na prática, o projeto tende a se pagar em cerca de {paybackDays} dias. Mesmo considerando o investimento inicial de
                            {` `}{currency.format(setupCost)} e a mensalidade de {currency.format(monthlyFee)}, o ganho líquido estimado fica em torno de
                            {` `}{currency.format(netAfterFee)} por mês apenas pelo aumento de conversão — sem contar a economia de substituir uma atendente
                            comercial de {currency.format(monthlyFee)}.
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Responsiveness Style Injection */}
            <style>{`
                @media (max-width: 768px) {
                    .glass-panel-dark {
                        grid-template-columns: 1fr !important;
                        border-radius: 1.25rem !important;
                    }
                    .glass-panel-dark > div:first-child {
                        border-right: none !important;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                    }
                    .glass-panel-dark > div {
                        padding: 2.25rem !important;
                    }
                    .glass-panel-dark h3 {
                        font-size: 1.45rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Investment;
