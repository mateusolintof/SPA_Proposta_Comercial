import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Video, MoreVertical, CheckCheck, Bot } from 'lucide-react';

const ChatDemo = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Olá! Gostaria de agendar uma consulta.", sender: 'user', time: '10:00' }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const [simulationStarted, setSimulationStarted] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const script = [
        {
            text: "Olá! Sou a assistente virtual da Clínica Dr. Maurício. Claro, posso ajudar com isso. Qual seria a sua especialidade de interesse?",
            delay: 1500
        },
        {
            userText: "Preciso de um cardiologista.",
            delay: 1000
        },
        {
            text: "Perfeito. Temos horários disponíveis para Cardiologia amanhã às 14h ou quinta-feira às 09h. Algum desses funciona para você?",
            delay: 1500
        },
        {
            userText: "Amanhã às 14h está ótimo.",
            delay: 1000
        },
        {
            text: "Combinado! Agendado para amanhã, quarta-feira, às 14h com Dr. Silva. Precisa de mais alguma informação?",
            delay: 1500
        }
    ];

    const runSimulation = async () => {
        setSimulationStarted(true);
        setMessages([{ id: 1, text: "Olá! Gostaria de agendar uma consulta.", sender: 'user', time: '10:00' }]);

        for (let step of script) {
            if (step.userText) {
                await new Promise(r => setTimeout(r, step.delay));
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    text: step.userText,
                    sender: 'user',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
            } else {
                setIsTyping(true);
                await new Promise(r => setTimeout(r, step.delay));
                setIsTyping(false);
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    text: step.text,
                    sender: 'bot',
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }]);
            }
        }
    };

    return (
        <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(16, 185, 129, 0.1)',
                        borderRadius: '2rem',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        marginBottom: '1rem',
                        color: 'var(--color-accent)'
                    }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)', display: 'block' }}></span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Experiência Ao Vivo</span>
                    </div>
                    <h2>Sua Secretária IA Nunca Dorme</h2>
                    <p style={{ textAlign: 'center', maxWidth: '600px' }}>
                        Veja como nossa IA interage naturalmente via WhatsApp. Ela entende contexto, negocia horários, tira dúvidas e confirma agendamentos integrados diretamente ao seu sistema.
                    </p>

                    {!simulationStarted && (
                        <button className="btn btn-primary" onClick={runSimulation} style={{ marginTop: '2rem' }}>
                            Iniciar Simulação
                        </button>
                    )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                    {/* Features List */}
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        {[
                            "Respostas instantâneas (< 2 seg)",
                            "Tom de voz humano e empático",
                            "Integração total com sua Agenda",
                            "Qualificação automática de leads",
                            "Recuperação de clientes inativos"
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}
                            >
                                <div style={{
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    padding: '0.5rem',
                                    borderRadius: '50%',
                                    color: 'var(--color-accent)'
                                }}>
                                    <CheckCheck size={20} />
                                </div>
                                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{feature}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Phone Mockup */}
                    <div style={{
                        width: '320px',
                        height: '640px',
                        background: '#000',
                        borderRadius: '40px',
                        padding: '12px',
                        boxShadow: '0 20px 50px -10px rgba(0,0,0,0.5)',
                        border: '4px solid #333',
                        position: 'relative'
                    }}>
                        {/* Screen */}
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: '#e5e7eb',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {/* Header */}
                            <div style={{
                                padding: '1rem',
                                background: 'var(--color-primary)', // Dark Green
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'white'
                            }}>
                                <div style={{ width: '35px', height: '35px', background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Bot size={20} color="#000" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Clínica Dr. Maurício</div>
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)' }}>online</div>
                                </div>
                                <Video size={20} />
                                <Phone size={20} />
                                <MoreVertical size={20} />
                            </div>

                            {/* Messages Area */}
                            <div style={{
                                flex: 1,
                                padding: '1rem',
                                overflowY: 'auto',
                                backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
                                backgroundSize: 'contain',
                                backgroundColor: '#efeae2' // WhatsApp Light BG
                            }}>
                                <div style={{
                                    background: 'rgba(255,255,255,0.9)',
                                    color: '#54656f',
                                    fontSize: '0.75rem',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '0.5rem',
                                    textAlign: 'center',
                                    marginBottom: '1rem',
                                    boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)'
                                }}>
                                    As mensagens são protegidas por criptografia de ponta-a-ponta.
                                </div>

                                <AnimatePresence>
                                    {messages.map((msg) => (
                                        <motion.div
                                            key={msg.id}
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            style={{
                                                display: 'flex',
                                                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                                marginBottom: '0.5rem'
                                            }}
                                        >
                                            <div style={{
                                                background: msg.sender === 'user' ? 'var(--color-success)' : 'white', // Light Green for User
                                                color: '#111b21',
                                                padding: '0.5rem 0.8rem',
                                                borderRadius: '0.5rem',
                                                borderTopRightRadius: msg.sender === 'user' ? 0 : '0.5rem',
                                                borderTopLeftRadius: msg.sender === 'bot' ? 0 : '0.5rem',
                                                maxWidth: '80%',
                                                boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)',
                                                fontSize: '0.9rem',
                                                position: 'relative'
                                            }}>
                                                {msg.text}
                                                <div style={{
                                                    fontSize: '0.65rem',
                                                    color: '#667781',
                                                    textAlign: 'right',
                                                    marginTop: '0.2rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-end',
                                                    gap: '0.2rem'
                                                }}>
                                                    {msg.time}
                                                    {msg.sender === 'user' && <CheckCheck size={14} color="#53bdeb" />}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>

                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        style={{
                                            background: 'white',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '0.5rem',
                                            borderTopLeftRadius: 0,
                                            width: 'fit-content',
                                            display: 'flex',
                                            gap: '4px',
                                            boxShadow: '0 1px 0.5px rgba(0,0,0,0.13)'
                                        }}
                                    >
                                        <span className="typing-dot" style={{ width: '6px', height: '6px', background: '#667781', borderRadius: '50%', animation: 'typing 1.4s infinite ease-in-out both' }}></span>
                                        <span className="typing-dot" style={{ width: '6px', height: '6px', background: '#667781', borderRadius: '50%', animation: 'typing 1.4s infinite ease-in-out both 0.2s' }}></span>
                                        <span className="typing-dot" style={{ width: '6px', height: '6px', background: '#667781', borderRadius: '50%', animation: 'typing 1.4s infinite ease-in-out both 0.4s' }}></span>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div style={{
                                padding: '0.5rem',
                                background: '#f0f2f5',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <div style={{
                                    flex: 1,
                                    background: 'white',
                                    borderRadius: '1.5rem',
                                    padding: '0.6rem 1rem',
                                    color: '#54656f',
                                    fontSize: '0.9rem'
                                }}>
                                    Digite uma mensagem
                                </div>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'var(--color-primary)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Send size={20} color="#fff" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatDemo;
