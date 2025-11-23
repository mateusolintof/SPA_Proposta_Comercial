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

            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
              Agentes de IA que qualificam leads, recuperam oportunidades e fidelizam clientes.
              Integrados a um CRM que centraliza toda sua operação comercial.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="btn btn-primary">
                Ver Demonstração
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline">
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}
          >
            {[
              { icon: Bot, label: 'Atendimento IA', value: '24/7' },
              { icon: Zap, label: 'Tempo de Resposta', value: '< 2 seg' },
              { icon: BarChart3, label: 'Agentes Especializados', value: '4' },
            ].map((item, index) => (
              <div key={index} className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <item.icon size={32} style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text)' }}>{item.value}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
