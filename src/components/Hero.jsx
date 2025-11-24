import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background Elements */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.6
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          right: '-10%',
          width: '50%',
          height: '50%',
          background: 'radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.6
        }} />
      </div>

      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(14, 165, 233, 0.1)',
              borderRadius: '2rem',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              marginBottom: '1.5rem',
              color: 'var(--color-primary)'
            }}>
              <Zap size={16} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Proposta Comercial</span>
            </div>

            <h1>
              Atendimento Inteligente do <br />
              <span style={{ color: 'var(--color-primary)' }}>Primeiro Contato ao Pós-Venda</span>
            </h1>

            <p style={{ fontSize: '1.2rem', marginBottom: '2.25rem', maxWidth: '620px' }}>
              IA que qualifica leads, recupera oportunidades e fideliza clientes — tudo integrado a um CRM único.
            </p>

            <div className="hero-cta-stack" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" style={{ minWidth: '200px' }}>
                Ver Demonstração
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline" style={{ minWidth: '200px' }}>
                Conhecer Soluções
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              marginTop: '4rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.25rem',
              justifyItems: 'center',
              maxWidth: '520px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            {[
              { icon: Bot, label: 'Atendimento IA', value: '24/7' },
              { icon: Zap, label: 'Tempo de Resposta', value: '< 2 seg' },
              {
                icon: BarChart3,
                label: 'Sistema com Atendimento SDR + Pós-venda + CRM de Gestão',
                value: null,
                wide: true
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '1.25rem',
                  textAlign: 'center',
                  width: '100%',
                  maxWidth: item.wide ? '100%' : '220px',
                  gridColumn: item.wide ? '1 / -1' : 'auto',
                  justifySelf: item.wide ? 'stretch' : 'center'
                }}
              >
                <item.icon size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }} />
                {item.value && (
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)' }}>{item.value}</div>
                )}
                <div style={{
                  fontSize: item.wide ? '1rem' : '0.85rem',
                  color: 'var(--color-text-muted)',
                  lineHeight: 1.3,
                  fontWeight: item.wide ? 700 : 400,
                  maxWidth: item.wide ? '420px' : '100%',
                  margin: item.wide ? '0 auto' : undefined
                }}>
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
