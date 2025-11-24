import React from 'react';
import { Check } from 'lucide-react';

const Investment = () => {
    const deliverables = [
        "Agente de Atendimento Inteligente (WhatsApp 24/7)",
        "Agente de Follow-up Automatizado",
        "Agente Pós-vendas (NPS, CSAT e Fluxos de Recompra)",
        "CRM Personalizado com Pipelines de Vendas",
        "Inbox Unificado (conversas centralizadas)",
        "Dashboard de Performance em Tempo Real",
        "Treinamento da Equipe",
        "Suporte Técnico Contínuo"
    ];

    return (
        <section className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2>Investimento & Entregáveis</h2>
                    <p>Tudo o que você precisa para escalar sua operação comercial.</p>
                </div>

                <div className="layout-grid cols-2 align-start">
                    {/* Deliverables */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>O que está incluso:</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {deliverables.map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--color-bg-secondary)', borderRadius: '0.5rem', border: '1px solid var(--color-border)' }}>
                                    <div style={{ background: 'rgba(14, 165, 233, 0.1)', padding: '0.25rem', borderRadius: '50%', color: 'var(--color-primary)' }}>
                                        <Check size={16} />
                                    </div>
                                    <span style={{ fontWeight: 500 }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pricing Card */}
                    <div className="glass-panel" style={{ padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', border: '1px solid var(--color-primary-glow)', boxShadow: '0 10px 40px -10px var(--color-primary-glow)' }}>
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
