import React, { useState } from 'react';
import Hero from './components/Hero';
import ChatDemo from './components/ChatDemo';
import FlowDiagram from './components/FlowDiagram';
import CRMModal from './components/CRMModal';
import ROICalculator from './components/ROICalculator';
import Investment from './components/Investment';
import { Layout } from 'lucide-react';

function App() {
  const [isCRMOpen, setIsCRMOpen] = useState(false);

  return (
    <div className="app">
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-text)' }}>ALMA<span style={{ color: 'var(--color-primary)' }}>.IA</span></div>
          <button
            className="btn btn-outline"
            onClick={() => setIsCRMOpen(true)}
            style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
          >
            <Layout size={16} />
            Ver CRM
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        <ChatDemo />
        <FlowDiagram />

        {/* CRM Teaser Section */}
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
              borderRadius: '2rem',
              padding: '4rem 2rem',
              border: '1px solid var(--color-border)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h2>O Coração da Sua Operação</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                  Um CRM completo, desenhado para times de alta performance. Visualize seu pipeline, gerencie conversas e acompanhe métricas em tempo real.
                </p>
                <button className="btn btn-primary" onClick={() => setIsCRMOpen(true)}>
                  Explorar o CRM Interativo
                </button>
              </div>
            </div>
          </div>
        </section>

        <ROICalculator />
        <Investment />
      </main>

      <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--color-border)', textAlign: 'center', color: 'var(--color-text-muted)' }}>
        <div className="container">
          <p>&copy; 2024 ALMA.IA - Todos os direitos reservados.</p>
        </div>
      </footer>

      <CRMModal isOpen={isCRMOpen} onClose={() => setIsCRMOpen(false)} />
    </div>
  );
}

export default App;
