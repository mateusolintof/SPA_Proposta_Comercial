import React from 'react';

const Investment = () => {
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
                                    <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', fontFamily: 'monospace', letterSpacing: '-0.05em' }}>R$ 5k</span>
                                </div>
                                <div style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>Implementação completa</div>
                                <div style={{ color: '#71717a', fontSize: '0.85rem', marginTop: '0.75rem' }}>
                                    Condições de pagamento:
                                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', marginBottom: 0 }}>
                                        <li>50% à vista e 50% na entrega do projeto</li>
                                        <li>Parcelamento em até 12x no cartão de crédito*</li>
                                    </ul>
                                </div>
                            </div>

                            <div style={{ marginBottom: '2.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <span style={{ color: '#e4e4e7', fontWeight: 600 }}>Recorrência Mensal</span>
                                    <span style={{ color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>R$ 2.000</span>
                                </div>
                                <div style={{ color: '#71717a', fontSize: '0.85rem' }}>
                                    Inclui servidores, manutenção e melhoria contínua da IA.
                                </div>
                            </div>

                            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', height: '3.5rem', fontSize: '1.1rem' }}>
                                Aprovar Proposta
                            </button>
                            <p style={{ textAlign: 'center', color: '#52525b', fontSize: '0.8rem', marginTop: '1rem' }}>
                                *Taxa de juros aplicada ao contratante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Responsiveness Style Injection */}
            <style>{`
                @media (max-width: 768px) {
                    .glass-panel-dark {
                        grid-template-columns: 1fr !important;
                    }
                    .glass-panel-dark > div:first-child {
                        border-right: none !important;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                    }
                }
            `}</style>
        </section>
    );
};

export default Investment;
