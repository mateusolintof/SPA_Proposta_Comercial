import React from 'react';
import { motion } from 'framer-motion';
import { Users, Bot, Database, DollarSign } from 'lucide-react';

const FlowDiagram = () => {
    const steps = [
        { icon: Users, label: 'Tráfego', color: '#60a5fa' },
        { icon: Bot, label: 'Qualificação IA', color: '#34d399' },
        { icon: Database, label: 'CRM & Follow-up', color: '#f472b6' },
        { icon: DollarSign, label: 'Venda', color: '#fbbf24' },
    ];

    return (
        <section className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2>Como Funciona</h2>
                    <p>Do clique à venda, nossa IA orquestra tudo.</p>
                </div>

                <div className="flow-steps">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    position: 'relative',
                                    zIndex: 1,
                                    textAlign: 'center'
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
                                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{step.label}</span>
                            </motion.div>

                            {index < steps.length - 1 && (
                                <motion.div
                                    className="flow-connector"
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: '100%', opacity: 1 }}
                                    transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                                    aria-hidden
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FlowDiagram;
