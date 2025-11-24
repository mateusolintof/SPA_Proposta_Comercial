import React from 'react';

const Investment = () => {
    return (
        <section className="section" style={{ paddingTop: '3rem', paddingBottom: '3.5rem' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2>Investimento & Entregáveis</h2>
                    <p>Tudo o que você precisa para escalar sua operação comercial.</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="glass-panel" style={{ padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', border: '1px solid var(--color-primary-glow)', boxShadow: '0 10px 40px -10px var(--color-primary-glow)', maxWidth: '440px', width: '100%' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.75rem' }}>Projeto Completo</div>
                        <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--color-text)', marginBottom: '0.35rem' }}>R$ 10k</div>
                        <div style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Setup & Implementação</div>

                        <div style={{ height: '1px', background: 'var(--color-border)', margin: '1.5rem 0' }} />

                        <div style={{ marginBottom: '1.5rem' }}>
                            <div style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-text)' }}>+ R$ 1.500<span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--color-text-muted)' }}>/mês</span></div>
                            <div style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>Manutenção, Servidores & Melhoria Contínua</div>
                        </div>

                        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                            Aprovar Proposta
                        </button>
                        <p style={{ fontSize: '0.8rem', marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                            Pagamento facilitado. Garantia de 7 dias.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Investment;
