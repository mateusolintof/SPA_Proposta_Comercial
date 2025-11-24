import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquareText, PhoneOutgoing, Heart, LayoutDashboard, ArrowRight, ArrowDown } from 'lucide-react';

const FlowDiagram = () => {
    const mainFlow = [
        { icon: Users, label: 'Lead Entra', sublabel: 'Via WhatsApp', color: '#60a5fa' },
        { icon: MessageSquareText, label: 'Agente Atendimento', sublabel: 'Qualifica 24/7', color: '#3b82f6' },
        { icon: LayoutDashboard, label: 'CRM', sublabel: 'Pipeline & Gestão', color: '#8b5cf6' },
    ];

    return (
        <section className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2>Como Funciona</h2>
                    <p>A jornada completa do lead, do primeiro contato à fidelização.</p>
                </div>

                {/* Main Flow - Horizontal */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginBottom: '3rem'
                }}>
                    {mainFlow.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15 }}
                                viewport={{ once: true }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: `rgba(${parseInt(step.color.slice(1, 3), 16)}, ${parseInt(step.color.slice(3, 5), 16)}, ${parseInt(step.color.slice(5, 7), 16)}, 0.1)`,
                                    border: `2px solid ${step.color}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: `0 0 20px ${step.color}40`
                                }}>
                                    <step.icon size={32} color={step.color} />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--color-text)' }}>{step.label}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{step.sublabel}</div>
                                </div>
                            </motion.div>

                            {index < mainFlow.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.15 + 0.1 }}
                                    viewport={{ once: true }}
                                    style={{ color: 'var(--color-primary)', opacity: 0.5 }}
                                >
                                    <ArrowRight size={24} />
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                {/* Branch Flows */}
                <div className="layout-grid cols-2 align-start" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {/* Follow-up Branch */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '1rem'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: 'rgba(16, 185, 129, 0.1)',
                                border: '2px solid #10b981',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <PhoneOutgoing size={24} color="#10b981" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, color: 'var(--color-text)' }}>Agente Follow-up</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Leads não convertidos</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                            Reativa automaticamente leads que não fecharam, mantendo o relacionamento ativo.
                        </p>
                    </motion.div>

                    {/* Pós-vendas Branch */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="glass-panel"
                        style={{ padding: '1.5rem' }}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '1rem'
                        }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                background: 'rgba(245, 158, 11, 0.1)',
                                border: '2px solid #f59e0b',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Heart size={24} color="#f59e0b" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, color: 'var(--color-text)' }}>Agente Pós-vendas</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Após a venda</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                            Pesquisa NPS/CSAT, fluxos de recompra e campanhas de fidelização automatizadas.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FlowDiagram;
