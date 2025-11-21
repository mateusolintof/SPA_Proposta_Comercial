import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layout, MessageSquare, PieChart, Plus, MoreHorizontal, Search, Bell } from 'lucide-react';

const CRMModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('kanban');

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 50,
                        background: 'rgba(0,0,0,0.8)',
                        backdropFilter: 'blur(5px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        style={{
                            width: '100%',
                            height: '100%',
                            background: '#f3f4f6', // Light theme for CRM to contrast with dark app
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            display: 'flex',
                            color: '#1f2937'
                        }}
                    >
                        {/* Sidebar */}
                        <div style={{ width: '240px', background: '#111827', color: 'white', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ padding: '1.5rem', borderBottom: '1px solid #374151' }}>
                                <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#0ea5e9' }}>ALMA CRM</div>
                            </div>

                            <nav style={{ padding: '1rem', flex: 1 }}>
                                {[
                                    { id: 'kanban', icon: Layout, label: 'Pipeline' },
                                    { id: 'inbox', icon: MessageSquare, label: 'Inbox Unificado' },
                                    { id: 'analytics', icon: PieChart, label: 'Resultados' },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            width: '100%',
                                            padding: '0.75rem 1rem',
                                            borderRadius: '0.5rem',
                                            background: activeTab === item.id ? 'rgba(14, 165, 233, 0.1)' : 'transparent',
                                            color: activeTab === item.id ? '#0ea5e9' : '#9ca3af',
                                            border: 'none',
                                            marginBottom: '0.5rem',
                                            textAlign: 'left'
                                        }}
                                    >
                                        <item.icon size={20} />
                                        {item.label}
                                    </button>
                                ))}
                            </nav>

                            <div style={{ padding: '1rem' }}>
                                <button
                                    onClick={onClose}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: '#9ca3af',
                                        background: 'transparent',
                                        border: 'none',
                                        padding: '0.5rem'
                                    }}
                                >
                                    <X size={20} />
                                    Sair da Demo
                                </button>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                            {/* Header */}
                            <header style={{
                                height: '64px',
                                background: 'white',
                                borderBottom: '1px solid #e5e7eb',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0 2rem'
                            }}>
                                <h3 style={{ color: '#111827', margin: 0 }}>
                                    {activeTab === 'kanban' && 'Pipeline de Vendas'}
                                    {activeTab === 'inbox' && 'Inbox Unificado'}
                                    {activeTab === 'analytics' && 'Dashboard de Performance'}
                                </h3>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ position: 'relative' }}>
                                        <Search size={20} color="#9ca3af" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
                                        <input
                                            type="text"
                                            placeholder="Buscar..."
                                            style={{
                                                padding: '0.5rem 0.75rem 0.5rem 2.5rem',
                                                borderRadius: '0.5rem',
                                                border: '1px solid #e5e7eb',
                                                background: '#f9fafb'
                                            }}
                                        />
                                    </div>
                                    <div style={{ width: '32px', height: '32px', background: '#e5e7eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Bell size={16} color="#4b5563" />
                                    </div>
                                </div>
                            </header>

                            {/* Content Area */}
                            <div style={{ flex: 1, overflow: 'auto', padding: '2rem', background: '#f3f4f6' }}>
                                {activeTab === 'kanban' && <KanbanBoard />}
                                {activeTab === 'inbox' && <InboxView />}
                                {activeTab === 'analytics' && <AnalyticsView />}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const KanbanBoard = () => {
    const columns = [
        { id: 'leads', title: 'Novos Leads', count: 12, color: '#3b82f6' },
        { id: 'qualified', title: 'Qualificados IA', count: 5, color: '#10b981' },
        { id: 'negotiation', title: 'Em Negociação', count: 3, color: '#f59e0b' },
        { id: 'closed', title: 'Fechados', count: 8, color: '#6366f1' },
    ];

    return (
        <div style={{ display: 'flex', gap: '1.5rem', height: '100%', overflowX: 'auto', paddingBottom: '1rem' }}>
            {columns.map(col => (
                <div key={col.id} style={{ minWidth: '280px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: col.color }}></div>
                            <span style={{ fontWeight: 600, color: '#374151' }}>{col.title}</span>
                            <span style={{ background: '#e5e7eb', padding: '0.1rem 0.5rem', borderRadius: '1rem', fontSize: '0.75rem', color: '#6b7280' }}>{col.count}</span>
                        </div>
                        <MoreHorizontal size={16} color="#9ca3af" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ y: -2, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                style={{ background: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', cursor: 'grab' }}
                            >
                                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#111827', marginBottom: '0.25rem' }}>Lead Exemplo {item}</div>
                                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.75rem' }}>Interesse: Plano Enterprise</div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#d1d5db' }}></div>
                                    <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>Há 2h</span>
                                </div>
                            </motion.div>
                        ))}
                        <button style={{
                            width: '100%',
                            padding: '0.5rem',
                            border: '1px dashed #d1d5db',
                            borderRadius: '0.5rem',
                            color: '#6b7280',
                            background: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}>
                            <Plus size={16} /> Novo Card
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

const InboxView = () => (
    <div style={{ display: 'flex', height: '100%', background: 'white', borderRadius: '0.5rem', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
        <div style={{ width: '300px', borderRight: '1px solid #e5e7eb', overflowY: 'auto' }}>
            {[1, 2, 3, 4, 5].map(i => (
                <div key={i} style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6', cursor: 'pointer', background: i === 1 ? '#f9fafb' : 'white' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#111827' }}>Cliente {i}</span>
                        <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>10:00</span>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        Olá, gostaria de saber mais sobre...
                    </div>
                </div>
            ))}
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af', flexDirection: 'column', gap: '1rem' }}>
            <MessageSquare size={48} opacity={0.2} />
            <p>Selecione uma conversa para visualizar</p>
        </div>
    </div>
);

const AnalyticsView = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {[
            { label: 'Vendas Totais', value: 'R$ 45.200', change: '+12%' },
            { label: 'Leads Qualificados', value: '128', change: '+24%' },
            { label: 'Taxa de Conversão', value: '3.2%', change: '+0.8%' },
        ].map((stat, i) => (
            <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>{stat.label}</div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ fontSize: '0.875rem', color: '#10b981', fontWeight: 500 }}>{stat.change} vs mês anterior</div>
            </div>
        ))}
        <div style={{ gridColumn: 'span 3', background: 'white', height: '300px', borderRadius: '0.5rem', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
            Gráfico de Performance (Mockup)
        </div>
    </div>
);

export default CRMModal;
