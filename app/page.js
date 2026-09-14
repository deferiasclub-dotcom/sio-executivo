'use client';

import React, { useState, useEffect } from 'react';
import { 
  Shield, Brain, Volume2, VolumeX, ArrowRight, Lock, 
  Mail, Sparkles, Send, RefreshCw, Play, CheckCircle2, AlertTriangle,
  BarChart3, Users, FileText, Landmark, Settings, 
  LogOut, Share2, Eye, EyeOff, Gift, Rocket, Store, User, Trophy, Wallet, Globe, Handshake, QrCode, Home, Camera, MapPin
} from 'lucide-react';

// ================================================================
// DADOS DAS 6 ABAS DO PAINEL DO EXECUTIVO
// ================================================================
const boasVindasExecutivo = {
  visual: "Olá, Executivo! Seja bem-vindo ao seu escritório digital de expansão comercial. Antes de começarmos, certifique-se de que o som do seu dispositivo esteja ligado para ouvir minhas orientações. Eu conheço todas as ferramentas deste painel. Para começarmos: vamos fazer um passo a passo guiado pelas 6 abas, mas se você quiser, pode clicar diretamente em qualquer aba ou botão da tela que aí eu te explico!",
  fonico: "Olá, Executivo! Seja bem vindo ao seu escritório digital de expansão comercial. Antes de começarmos, certifique-se de que o som do seu dispositivo esteja ligado para ouvir minhas orientações. Eu conheço todas as ferramentas deste painel. Para começarmos, vamos fazer um passo a passo guiado pelas seis abas, mas se você quiser, pode clicar diretamente em qualquer aba ou botão da tela que aí eu te explico!"
};

const abasExecutivo = [
  {
    id: "dashboard",
    nome: "Aba 1: Dashboard & Balcão ao Vivo",
    visual: "No Dashboard você acompanha seus KPIs de Lojas Ativas e Usuários Indicados. E aqui fica a sua ferramenta mais poderosa de fechamento de vendas: a 'Demonstração de Bonificação no Balcão'! Nela você digita o CPF do dono da loja, simula uma venda de R$ 100 com 7% de cashback, vê a divisão de 80% para o cliente em tempo real e clica em 'CONFIRMAR CASHBACK' para o comerciante ver o saldo entrando ao vivo no celular dele!",
    fonico: "No Dashboard você acompanha seus indicadores de Lojas Ativas e Usuários Indicados. E aqui fica a sua ferramenta mais poderosa de fechamento de vendas: a Demonstração de Bonificação no Balcão! Nela você digita o C P F do dono da loja, simula uma venda de cem reais com sete por cento de cashback, vê a divisão de oitenta por cento para o cliente em tempo real e clica em Confirmar Cashback para o comerciante ver o saldo entrando ao vivo no celular dele!"
  },
  {
    id: "rede",
    nome: "Aba 2: Minha Rede",
    visual: "Na aba Minha Rede você acompanha toda a sua carteira em duas colunas: do lado esquerdo, em 'Lojas Parceiras', você vê os comércios credenciados com nome fantasia e endereço físico completo. Do lado direito, em 'Indicações de Expansão', você visualiza os clientes físicos cadastrados pelo seu link (inclusive o CPF dos donos de loja cadastrados na demonstração)!",
    fonico: "Na aba Minha Rede você acompanha toda a sua carteira em duas colunas: do lado esquerdo, em Lojas Parceiras, você vê os comércios credenciados com nome fantasia e endereço físico completo. Do lado direito, em Indicações de Expansão, você visualiza os clientes físicos cadastrados pelo seu link, inclusive o C P F dos donos de loja cadastrados na demonstração!"
  },
  {
    id: "expansao",
    nome: "Aba 3: Expansão (Link Comercial)",
    visual: "Esta é a sua ferramenta oficial de prospecção! Aqui você encontra seu Link Comercial. Você pode personalizar o final do endereço digitando seu nome no campo de slug, clicar em 'SALVAR SLUG' e depois usar o botão 'COPIAR LINK COMERCIAL' para enviar por WhatsApp para donos de comércios (CNPJ) ou clientes finais (CPF).",
    fonico: "Esta é a sua ferramenta oficial de prospecção! Aqui você encontra seu Link Comercial. Você pode personalizar o final do endereço digitando seu nome no campo de slug, clicar em Salvar Slug e depois usar o botão Copiar Link Comercial para enviar por WhatsApp para donos de comércios ou clientes finais."
  },
  {
    id: "financas",
    nome: "Aba 4: Finanças (Resgate e Recargas)",
    visual: "Dividida em duas seções: na 'Transferência Interna', você digita o valor das suas comissões acumuladas de Cashback-Share e clica em 'Confirmar Transferência' para enviar o dinheiro para sua Carteira pessoal e sacar via Pix. E em 'Recarregar Saldo', você adiciona saldo no painel via Pix para fazer demonstrações de vendas no balcão!",
    fonico: "Dividida em duas seções: na Transferência Interna, você digita o valor das suas comissões acumuladas e clica em Confirmar Transferência para enviar o dinheiro para sua Carteira pessoal e sacar via Pics. E em Recarregar Saldo, você adiciona saldo no painel via Pics para fazer demonstrações de vendas no balcão!"
  },
  {
    id: "beneficios",
    nome: "Aba 5: Benefícios (Expansão do Clube)",
    visual: "Na aba Benefícios você encontra a apresentação comercial do Clube de Vantagens. Como Executivo, você pode contratar este módulo para oferecer milhares de marcas em todo o Brasil para a sua rede, aumentando a retenção dos seus usuários e turbinando seus argumentos de vendas!",
    fonico: "Na aba Benefícios você encontra a apresentação comercial do Clube de Vantagens. Como Executivo, você pode contratar este módulo para oferecer milhares de marcas em todo o Brasil para a sua rede, aumentando a retenção dos seus usuários e turbinando seus argumentos de vendas!"
  },
  {
    id: "dados",
    nome: "Aba 6: Meus Dados",
    visual: "Aqui você mantém seu cadastro profissional atualizado: basta digitar o seu CEP que o sistema busca rua, bairro e cidade automaticamente pelo ViaCEP! Complete com o número e clique no botão 'SALVAR ALTERAÇÕES'.",
    fonico: "Aqui você mantém seu cadastro profissional atualizado: basta digitar o seu C E P que o sistema busca rua, bairro e cidade automaticamente! Complete com o número e clique no botão Salvar Alterações."
  }
];

// ================================================================
// DADOS DA CARTEIRA PESSOAL DO EXECUTIVO (10 BOTÕES)
// ================================================================
const boasVindasCarteiraExecutivo = {
  visual: "Olá, Executivo! Seja bem-vindo à sua Carteira Digital pessoal. É por aqui que você recebe suas transferências de comissão e realiza saques via Pix para o seu banco. Ela possui as mesmas 10 funções padrão da carteira de benefícios. Vamos fazer um tour guiado ou você pode clicar no botão que desejar!",
  fonico: "Olá, Executivo! Seja bem vindo à sua Carteira Digital pessoal. É por aqui que você recebe suas transferências de comissão e realiza saques via Pics para o seu banco. Ela possui as mesmas dez funções padrão da carteira de benefícios. Vamos fazer um tour guiado ou você pode clicar no botão que desejar!"
};

const itensCarteiraExecutivo = [
  { id: "saldo", nome: "Saldo Disponível", visual: "Exibe o seu saldo disponível de comissões e recargas. Clique no olho para ocultar e na setinha para atualizar.", fonico: "Exibe o seu saldo disponível de comissões e recargas. Clique no olho para ocultar e na setinha para atualizar." },
  { id: "dados", nome: "Meus Dados", visual: "Atualize Nome, WhatsApp e E-mail pessoal a qualquer momento.", fonico: "Atualize Nome, WhatsApp e e mail pessoal a qualquer momento." },
  { id: "beneficios", nome: "Clube de Benefícios", visual: "Atenção: como Executivo, este botão dourado só aparece ativado na sua carteira caso você tenha contratado o módulo de benefícios.", fonico: "Atenção: como Executivo, este botão dourado só aparece ativado na sua carteira caso você tenha contratado o módulo de benefícios." },
  { id: "extrato", nome: "Extrato Detalhado", visual: "Acompanhe todo o seu histórico: entradas em verde, saques em vermelho e pendentes em laranja.", fonico: "Acompanhe todo o seu histórico: entradas em verde, saques em vermelho e pendentes em laranja." },
  { id: "recarga", nome: "Recarregar Saldo", visual: "Adicione saldo na carteira via Pix a qualquer momento.", fonico: "Adicione saldo na carteira via Pics a qualquer momento." },
  { id: "fisicas", nome: "Lojas Físicas", visual: "Localize lojas credenciadas por cidade ou GPS e leia o QR Code de balcão para pagar ou receber cashback.", fonico: "Localize lojas credenciadas por cidade ou localização e leia o Q R Code de balcão para pagar ou receber cashback." },
  { id: "online", nome: "Lojas Online", visual: "Compre em grandes marcas virtuais com cashback e resgate com o mínimo de R$ 25,00.", fonico: "Compre em grandes marcas virtuais com cashback e resgate com o mínimo de vinte e cinco reais." },
  { id: "amigo", nome: "Cashback Amigo", visual: "Transfira saldo para qualquer amigo ou cliente cadastrado pelo CPF instantaneamente.", fonico: "Transfira saldo para qualquer amigo ou cliente cadastrado pelo C P F instantaneamente." },
  { id: "pix", nome: "Pagar com Pix", visual: "Pague contas de água, luz, boletos de 47 números e compras na Shopee e Mercado Livre com Pix Copia e Cola.", fonico: "Pague contas de água, luz, boletos bancários e compras na Shopee e Mercado Livre com Pics Copia e Cola." },
  { id: "cashgenius", nome: "CashGenius VIP", visual: "Consultor financeiro com IA. 25 consultas gratuitas ou 30 dias de teste para dicas inteligentes!", fonico: "Consultor financeiro com inteligência artificial. Vinte e cinco consultas gratuitas ou trinta dias de teste para dicas inteligentes!" },
  { id: "saque", nome: "Sacar Dinheiro", visual: "Transfira suas comissões para sua conta bancária pessoal via Pix próprio em até 24 horas úteis.", fonico: "Transfira suas comissões para sua conta bancária pessoal via Pics próprio em até vinte e quatro horas úteis." }
];

export default function ExecutivoTrainingMaster() {
  const [telaAtiva, setTelaAtiva] = useState('login'); // 'login' | 'painel' | 'carteira'

  // Estados do Login
  const [etapaLogin, setEtapaLogin] = useState(0);
  const [modalEsqueci, setModalEsqueci] = useState(false);

  // Estados do Painel Executivo
  const [abaPainelSelecionada, setAbaPainelSelecionada] = useState('dashboard');
  const [indicePassoPainel, setIndicePassoPainel] = useState(-1);
  const [copiadoLink, setCopiadoLink] = useState(false);

  // Estados da Carteira Pessoal
  const [indicePassoCarteira, setIndicePassoCarteira] = useState(-1);
  const [itemCarteiraSelecionado, setItemCarteiraSelecionado] = useState(null);
  const [ocultarSaldo, setOcultarSaldo] = useState(false);

  // Estados de Voz (Francisca)
  const [audioAtivo, setAudioAtivo] = useState(true);
  const [sioFalando, setSioFalando] = useState(false);
  const [falaAtualVisual, setFalaAtualVisual] = useState('');
  const [perguntaChat, setPerguntaChat] = useState('');
  const [historicoChat, setHistoricoChat] = useState([]);
  const [vozFranciscaOficial, setVozFranciscaOficial] = useState(null);

  // Trava a Francisca na memória
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const carregarVozes = () => {
      try {
        const todas = window.speechSynthesis.getVoices();
        if (!todas || todas.length === 0) return;

        const vozesPt = todas.filter(v => v.lang.includes('pt-BR') || v.lang.includes('pt_BR'));
        let f = vozesPt.find(v => v.name.toLowerCase().includes('francisca') && v.name.toLowerCase().includes('online'))
          || vozesPt.find(v => v.name.toLowerCase().includes('francisca'))
          || vozesPt.find(v => v.name.toLowerCase().includes('thalita') || v.name.toLowerCase().includes('leticia') || v.name.toLowerCase().includes('maria'))
          || vozesPt.find(v => !v.name.toLowerCase().includes('antonio') && !v.name.toLowerCase().includes('daniel'));

        if (f) setVozFranciscaOficial(f);
      } catch (e) {
        console.error(e);
      }
    };

    carregarVozes();
    window.speechSynthesis.onvoiceschanged = carregarVozes;
  }, []);

  const sanitizarParaVoz = (texto) => {
    return (texto || '')
      .replace(/\bPIX\b/gi, 'Pics')
      .replace(/\bPix\b/g, 'Pics')
      .replace(/CashGenius/gi, 'Cash Djínius')
      .replace(/CNPJ/g, 'C N P J')
      .replace(/CPF/g, 'C P F')
      .replace(/CEP/g, 'C E P')
      .replace(/PDF/g, 'P D F')
      .replace(/RH/g, 'R H')
      .replace(/S\.I\.O\./gi, 'Esse i ó')
      .replace(/SIO/gi, 'Esse i ó');
  };

  const tocarVoz = (textoVisual, textoFonico) => {
    try {
      setFalaAtualVisual(textoVisual || '');
      if (!audioAtivo) return;

      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(sanitizarParaVoz(textoFonico || textoVisual || ''));
        utterance.lang = 'pt-BR';
        utterance.rate = 1.60;
        utterance.pitch = 1.0;

        if (vozFranciscaOficial) {
          utterance.voice = vozFranciscaOficial;
        } else {
          const todas = window.speechSynthesis.getVoices();
          const f = todas.find(v => v.lang.includes('pt-BR') && v.name.toLowerCase().includes('francisca'))
            || todas.find(v => v.lang.includes('pt-BR') && !v.name.toLowerCase().includes('antonio'));
          if (f) utterance.voice = f;
        }

        setSioFalando(true);
        utterance.onend = () => setSioFalando(false);
        utterance.onerror = () => setSioFalando(false);

        window.speechSynthesis.speak(utterance);
      }
    } catch (e) {
      console.error(e);
      setSioFalando(false);
    }
  };

  // Roteiro do Login do Executivo (CPF)
  const roteiroLogin = {
    1: {
      visual: "Olá, Executivo! Seja bem-vindo ao treinamento do seu Painel Comercial. Antes de começarmos, certifique-se de que o som do seu dispositivo esteja ligado para ouvir minhas orientações. Se tiver dúvidas durante o treino, basta digitar no chat aqui embaixo — lembrando que eu não escuto áudio por microfone: você digita e eu te respondo por texto e por voz!",
      fonico: "Olá, Executivo! Seja bem vindo ao treinamento do seu Painel Comercial. Antes de começarmos, certifique-se de que o som do seu dispositivo esteja ligado para ouvir minhas orientações. Se tiver dúvidas durante o treino, basta digitar no chat aqui embaixo. Lembrando que eu não escuto áudio por microfone, você digita e eu te respondo por texto e por voz!",
      botao: "Entendi, vamos começar ➔",
      destaque: null
    },
    2: {
      visual: "Muita atenção a este ponto: a tela que está piscando em vermelho aqui ao lado é apenas um EXEMPLO VISUAL para te guiar. Não digite nela! Abra agora a tela de login oficial no seu computador ou celular para praticarmos juntos.",
      fonico: "Muita atenção a este ponto. A tela que está piscando em vermelho aqui ao lado é apenas um exemplo visual para te guiar. Não digite nela. Abra agora a tela de login oficial no seu computador ou celular para praticarmos juntos.",
      botao: "Já abri minha tela oficial ➔",
      destaque: 'cpf'
    },
    3: {
      visual: "Na sua tela oficial, como você é Executivo Comercial, o seu acesso é feito pelo seu CPF cadastrado. Digite o seu CPF no campo principal e clique em CONTINUAR.",
      fonico: "Na sua tela oficial, como você é Executivo Comercial, o seu acesso é feito pelo seu C P F cadastrado. Digite o seu C P F no campo principal e clique em Continuar.",
      botao: "Já preenchi meu CPF e cliquei em Continuar ➔",
      destaque: 'cpf'
    },
    4: {
      visual: "Perfeito! Agora digite a sua senha no seu sistema oficial e clique em ENTRAR. Caso tenha esquecido a sua senha, basta clicar em 'Esqueci a senha' logo abaixo para redefinir por e-mail com segurança.",
      fonico: "Perfeito. Agora digite a sua senha no seu sistema oficial e clique em Entrar. Caso tenha esquecido a sua senha, basta clicar em Esqueci a senha logo abaixo para redefinir por e mail com segurança.",
      botao: "Já digitei a senha e acessei meu painel ➔",
      destaque: 'senha'
    }
  };

  const avancarLogin = (proxima) => {
    if (proxima > 4) {
      setTelaAtiva('painel');
      setEtapaLogin(0);
      setIndicePassoPainel(-1);
      setAbaPainelSelecionada('dashboard');
      tocarVoz(boasVindasExecutivo.visual, boasVindasExecutivo.fonico);
      return;
    }
    setEtapaLogin(proxima);
    tocarVoz(roteiroLogin[proxima].visual, roteiroLogin[proxima].fonico);
  };

  // ==========================================
  // NAVEGAÇÃO DO PAINEL DO EXECUTIVO (6 ABAS)
  // ==========================================
  const iniciarTreinoPainel = () => {
    setIndicePassoPainel(-1);
    setAbaPainelSelecionada('dashboard');
    tocarVoz(boasVindasExecutivo.visual, boasVindasExecutivo.fonico);
  };

  const avancarPassoPainel = () => {
    const prox = indicePassoPainel + 1;
    if (prox < abasExecutivo.length) {
      setIndicePassoPainel(prox);
      const aba = abasExecutivo[prox];
      setAbaPainelSelecionada(aba.id);
      tocarVoz(`Esta é a ${aba.nome}: ${aba.visual}`, `Esta é a ${aba.nome}. ${aba.fonico}`);
    } else {
      abrirCarteiraPessoal();
    }
  };

  const clicarNaAbaPainel = (idAba) => {
    const aba = abasExecutivo.find(a => a.id === idAba);
    if (!aba) return;
    setAbaPainelSelecionada(idAba);
    const idx = abasExecutivo.findIndex(a => a.id === idAba);
    if (idx !== -1) setIndicePassoPainel(idx);
    tocarVoz(`Você clicou na ${aba.nome}: ${aba.visual}`, `Você clicou na ${aba.nome}. ${aba.fonico}`);
  };

  // ==========================================
  // NAVEGAÇÃO DA CARTEIRA PESSOAL DO EXECUTIVO
  // ==========================================
  const abrirCarteiraPessoal = () => {
    setTelaAtiva('carteira');
    setIndicePassoCarteira(-1);
    setItemCarteiraSelecionado(null);
    tocarVoz(boasVindasCarteiraExecutivo.visual, boasVindasCarteiraExecutivo.fonico);
  };

  const fecharCarteiraPessoal = () => {
    setTelaAtiva('painel');
    tocarVoz("Retornando ao Painel do Executivo.", "Retornando ao Painel do Executivo.");
  };

  const avancarPassoCarteira = () => {
    const prox = indicePassoCarteira + 1;
    if (prox < itensCarteiraExecutivo.length) {
      setIndicePassoCarteira(prox);
      const item = itensCarteiraExecutivo[prox];
      setItemCarteiraSelecionado(item);
      tocarVoz(`Este é o botão ${item.nome}: ${item.visual}`, `Este é o botão ${item.nome}. ${item.fonico}`);
    } else {
      const fim = "Parabéns, Executivo! Você completou o tour pela sua Carteira Digital. Se quiser, clique em qualquer botão para ouvir sua explicação novamente!";
      setIndicePassoCarteira(-1);
      setItemCarteiraSelecionado(null);
      tocarVoz(fim, fim);
    }
  };

  const clicarNoBotaoCarteira = (idItem) => {
    const item = itensCarteiraExecutivo.find(i => i.id === idItem);
    if (!item) return;

    setItemCarteiraSelecionado(item);
    const idx = itensCarteiraExecutivo.findIndex(i => i.id === idItem);
    if (idx !== -1) setIndicePassoCarteira(idx);
    tocarVoz(`Você clicou no botão ${item.nome}: ${item.visual}`, `Você clicou no botão ${item.nome}. ${item.fonico}`);
  };

  const handleEncerrarTreinamento = () => {
    if (confirm("Deseja realmente encerrar a sessão de treinamento do executivo?")) {
      setTelaAtiva('login');
      setEtapaLogin(0);
      setIndicePassoPainel(-1);
      setIndicePassoCarteira(-1);
      const v = "Treinamento do executivo encerrado com sucesso! Agradecemos a sua dedicação. Até a próxima!";
      const f = "Treinamento do executivo encerrado com sucesso! Agradecemos a sua dedicação. Até a próxima!";
      tocarVoz(v, f);
    }
  };

  const toggleAudio = () => {
    if (audioAtivo) {
      if (typeof window !== 'undefined') window.speechSynthesis.cancel();
      setSioFalando(false);
    } else {
      if (falaAtualVisual) tocarVoz(falaAtualVisual, falaAtualVisual);
    }
    setAudioAtivo(!audioAtivo);
  };

  // Chat com Francisca
  const handleEnviarDuvida = (e) => {
    e?.preventDefault();
    if (!perguntaChat.trim()) return;

    const p = perguntaChat.trim().toLowerCase();
    setHistoricoChat(prev => [...prev, { autor: 'usuario', texto: perguntaChat }]);
    setPerguntaChat('');

    if (p.includes('esqueci') || p.includes('senha') || p.includes('perdi')) {
      setModalEsqueci(true);
      const v = "Registramos a sua dúvida sobre Esqueci a Senha: Na sua tela oficial, clique em 'Esqueci a senha'. O sistema enviará um link seguro para o seu e-mail cadastrado. Se não lembrar do e-mail, fale com nosso suporte humano de Seg a Sex, das 08h30 às 18h00 para gerar uma senha provisória.";
      const f = "Registramos a sua dúvida sobre Esqueci a Senha. Na sua tela oficial, clique em Esqueci a senha. O sistema enviará um link seguro para o seu e mail cadastrado. Se não lembrar do e mail, fale com nosso suporte humano de segunda a sexta, das 8 e meia da manhã às 6 da tarde para gerar uma senha provisória.";
      setHistoricoChat(prev => [...prev, { autor: 'sio', texto: v }]);
      tocarVoz(v, f);
      return;
    }

    if (p.includes('balcao') || p.includes('demonstrar') || p.includes('venda') || p.includes('bonificar')) {
      clicarNaAbaPainel('dashboard');
      return;
    } else if (p.includes('rede') || p.includes('lojas parceiras') || p.includes('indicacoes')) {
      clicarNaAbaPainel('rede');
      return;
    } else if (p.includes('expansao') || p.includes('link') || p.includes('slug') || p.includes('copiar')) {
      clicarNaAbaPainel('expansao');
      return;
    } else if (p.includes('financas') || p.includes('resgate') || p.includes('recarga') || p.includes('transferencia')) {
      clicarNaAbaPainel('financas');
      return;
    } else if (p.includes('beneficio') || p.includes('clube') || p.includes('contratar')) {
      clicarNaAbaPainel('beneficios');
      return;
    } else if (p.includes('dados') || p.includes('cep') || p.includes('endereco')) {
      clicarNaAbaPainel('dados');
      return;
    } else if (p.includes('carteira')) {
      abrirCarteiraPessoal();
      return;
    } else if (p.includes('sair') || p.includes('fechar') || p.includes('encerrar')) {
      handleEncerrarTreinamento();
      return;
    }

    const rV = "Registramos a sua dúvida! No Painel do Executivo, você pode clicar em qualquer uma das 6 abas para ouvir a explicação, ou perguntar sobre Demonstração de Balcão, Link de Expansão, Finanças e Carteira Pessoal.";
    const rF = "Registramos a sua dúvida. No Painel do Executivo, você pode clicar em qualquer uma das seis abas para ouvir a explicação, ou perguntar sobre Demonstração de Balcão, Link de Expansão, Finanças e Carteira Pessoal.";
    setHistoricoChat(prev => [...prev, { autor: 'sio', texto: rV }]);
    tocarVoz(rV, rF);
  };

  const loginAtual = roteiroLogin[etapaLogin] || {};
  const abaAtualDados = abasExecutivo.find(a => a.id === abaPainelSelecionada) || abasExecutivo[0];

  return (
    <div className="min-h-screen bg-[#07080b] flex flex-col text-zinc-100 selection:bg-red-600">
      
      {/* BARRA SUPERIOR DE NAVEGAÇÃO */}
      <div className="bg-[#0b0c12] border-b border-zinc-800/80 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4 z-20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-red-600 flex items-center justify-center font-black text-xs text-white shadow-lg shadow-red-700/40">
            SIO
          </div>
          <div>
            <span className="text-xs font-bold tracking-wider text-zinc-200 uppercase block">
              Painel do Executivo — Expansão Comercial
            </span>
            <span className="text-[10px] text-zinc-400">Credenciamento de Lojas e Comissões Recorrentes</span>
          </div>
        </div>

        {/* Abas e Botão Encerrar */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 bg-zinc-950 p-1 border border-zinc-800 rounded-xl text-xs font-semibold">
            <button
              onClick={() => {
                setTelaAtiva('login');
                setEtapaLogin(0);
                setFalaAtualVisual('');
              }}
              className={`px-3 py-1.5 rounded-lg transition ${
                telaAtiva === 'login' ? 'bg-red-600 text-white shadow' : 'text-zinc-400 hover:text-white'
              }`}
            >
              1. Login (CPF)
            </button>
            <button
              onClick={() => {
                setTelaAtiva('painel');
                iniciarTreinoPainel();
              }}
              className={`px-3 py-1.5 rounded-lg transition ${
                telaAtiva === 'painel' ? 'bg-red-600 text-white shadow' : 'text-zinc-400 hover:text-white'
              }`}
            >
              2. Painel (6 Abas)
            </button>
            <button
              onClick={abrirCarteiraPessoal}
              className={`px-3 py-1.5 rounded-lg transition ${
                telaAtiva === 'carteira' ? 'bg-red-600 text-white shadow' : 'text-zinc-400 hover:text-white'
              }`}
            >
              3. Carteira do Executivo
            </button>
          </div>

          <button
            onClick={handleEncerrarTreinamento}
            className="px-3 py-2 bg-red-950/80 border border-red-800/80 text-red-400 hover:bg-red-900 rounded-xl transition text-xs font-bold"
          >
            Encerrar ✕
          </button>
        </div>
      </div>

      {/* ÁREA PRINCIPAL */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* LADO ESQUERDO: COPILOTO S.I.O. (FRANCISCA) */}
        <div className="w-full lg:w-5/12 bg-[#0d0e15] border-b lg:border-b-0 lg:border-r border-zinc-800/80 flex flex-col justify-between p-5 sm:p-7 overflow-y-auto max-h-[calc(100vh-65px)]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-red-700 to-red-500 flex items-center justify-center shadow-lg shadow-red-950/40">
                  <Brain className="w-6 h-6 text-white animate-pulse" />
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0d0e15] rounded-full" />
                </div>
                <div>
                  <h2 className="text-base font-bold tracking-tight text-white flex items-center gap-2">
                    S.I.O. <span className="text-[11px] bg-red-950/80 text-red-400 border border-red-800/60 px-2 py-0.5 rounded-full font-semibold">Instrutora Francisca</span>
                  </h2>
                  <p className="text-xs text-zinc-400">
                    {telaAtiva === 'carteira' ? 'Treinamento da Carteira Pessoal' : (telaAtiva === 'painel' ? 'Treinamento das 6 Abas' : 'Treinamento de Acesso')}
                  </p>
                </div>
              </div>

              <button 
                onClick={toggleAudio}
                className={`p-2 rounded-xl border transition-all ${
                  audioAtivo ? 'bg-red-600/20 text-red-400 border-red-500/50 hover:bg-red-600/30' : 'bg-zinc-800 text-zinc-400 border-zinc-700'
                }`}
                title={audioAtivo ? "Desativar Voz" : "Ativar Voz"}
              >
                {audioAtivo ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
            </div>

            <div className="mt-4 px-3.5 py-2.5 bg-zinc-900/90 border border-zinc-800 rounded-xl flex items-center gap-2.5 text-xs text-zinc-300">
              <Volume2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span><strong>Som:</strong> Ative o volume do seu celular ou computador para ouvir a Francisca.</span>
            </div>

            {/* CAIXA DE INSTRUÇÃO */}
            <div className="mt-5 p-5 bg-gradient-to-b from-zinc-900 to-[#12131c] border border-zinc-800/90 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between text-xs font-semibold text-red-400 mb-2 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  {telaAtiva === 'carteira' 
                    ? (itemCarteiraSelecionado ? itemCarteiraSelecionado.nome : 'Instrução da Carteira')
                    : (telaAtiva === 'painel' ? abaAtualDados.nome : `Passo ${etapaLogin} de 4`)}
                </span>
                <button 
                  onClick={() => {
                    if (telaAtiva === 'carteira') {
                      if (itemCarteiraSelecionado) {
                        tocarVoz(itemCarteiraSelecionado.visual, itemCarteiraSelecionado.fonico);
                      } else {
                        tocarVoz(boasVindasCarteiraExecutivo.visual, boasVindasCarteiraExecutivo.fonico);
                      }
                    } else if (telaAtiva === 'painel') {
                      tocarVoz(abaAtualDados.visual, abaAtualDados.fonico);
                    } else {
                      if (etapaLogin > 0) tocarVoz(loginAtual.visual, loginAtual.fonico);
                    }
                  }} 
                  className="text-[11px] text-zinc-400 hover:text-white underline flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Ouvir novamente
                </button>
              </div>

              <p className="text-sm leading-relaxed text-zinc-200">
                "{falaAtualVisual || (telaAtiva === 'painel' ? boasVindasExecutivo.visual : (telaAtiva === 'carteira' ? boasVindasCarteiraExecutivo.visual : 'Clique abaixo para iniciar o treinamento do login.'))}"
              </p>

              {sioFalando && (
                <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                  Francisca falando agora...
                </div>
              )}

              {/* CONTROLES DO PAINEL */}
              {telaAtiva === 'painel' && (
                <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-2">
                  <button
                    onClick={avancarPassoPainel}
                    className="w-full py-3 bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white text-xs font-black rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-red-700/40 uppercase tracking-wider"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {indicePassoPainel === -1 
                        ? "Iniciar Passo a Passo pelas 6 Abas ➔" 
                        : (indicePassoPainel === abasExecutivo.length - 1 
                            ? "Concluir Painel e Abrir Carteira ➔" 
                            : `Próxima Aba (${indicePassoPainel + 1} de ${abasExecutivo.length}) ➔`)}
                    </span>
                  </button>
                  <p className="text-[11px] text-zinc-400 text-center pt-1">
                    💡 Ou clique em qualquer aba da tela ao lado que a Francisca explica na hora!
                  </p>
                </div>
              )}

              {/* CONTROLES DO LOGIN */}
              {telaAtiva === 'login' && (
                <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-2">
                  {etapaLogin === 0 ? (
                    <div className="p-5 bg-gradient-to-b from-red-950/40 to-zinc-900 border-2 border-red-600/80 rounded-2xl text-center space-y-3 shadow-xl">
                      <div className="w-12 h-12 bg-red-600/20 border border-red-500 rounded-full flex items-center justify-center mx-auto text-red-500 animate-pulse">
                        <Volume2 className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-sm font-black text-white uppercase tracking-wider">
                        🔊 ATIVE O SEU SOM ANTES DE COMEÇAR
                      </h3>
                      
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        Este treinamento é <strong>totalmente guiado por voz</strong>. Para ouvir todas as instruções com clareza:
                      </p>

                      <div className="text-[11px] text-zinc-200 text-left bg-zinc-950/70 p-3 rounded-xl border border-zinc-800/80 space-y-1.5 font-medium">
                        <p className="flex items-center gap-1.5">
                          <span>📱</span> <strong>No celular:</strong> aumente o volume ou use fones de ouvido.
                        </p>
                        <p className="flex items-center gap-1.5">
                          <span>💻</span> <strong>No computador:</strong> ligue as caixas de som ou use fones de ouvido.
                        </p>
                      </div>

                      <button 
                        onClick={() => avancarLogin(1)}
                        className="w-full py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 active:scale-[0.98] text-white font-black text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-900/60 uppercase tracking-wider transition"
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>JÁ ATIVEI O SOM, INICIAR TREINAMENTO ➔</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => avancarLogin(etapaLogin + 1)}
                      className="w-full py-3 bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white text-xs font-black rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-red-700/40 uppercase tracking-wider"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{loginAtual.botao}</span>
                    </button>
                  )}
                </div>
              )}

              {/* CONTROLES DA CARTEIRA */}
              {telaAtiva === 'carteira' && (
                <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-2">
                  <button
                    onClick={avancarPassoCarteira}
                    className="w-full py-3 bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white text-xs font-black rounded-xl transition flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {indicePassoCarteira === -1 
                        ? "Iniciar Passo a Passo da Carteira ➔" 
                        : `Próximo Botão (${indicePassoCarteira + 1} de ${itensCarteiraExecutivo.length}) ➔`}
                    </span>
                  </button>
                  <p className="text-[11px] text-zinc-400 text-center pt-1">
                    💡 Ou clique em qualquer botão da tela ao lado que a Francisca explica na hora!
                  </p>
                  <button
                    onClick={fecharCarteiraPessoal}
                    className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-bold rounded-xl transition"
                  >
                    ← Voltar ao Painel do Executivo (6 Abas)
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* CHAT POR TEXTO COM FRANCISCA */}
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <form onSubmit={handleEnviarDuvida} className="relative">
              <input 
                type="text"
                value={perguntaChat}
                onChange={(e) => setPerguntaChat(e.target.value)}
                placeholder="Dúvidas comerciais? Digite aqui..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-4 pr-12 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 transition"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 p-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="mt-2 text-[11px] text-zinc-400 text-center">
              Suporte Humano: Segunda a Sexta, das 08h30 às 18h00.
            </p>
          </div>
        </div>

        {/* LADO DIREITO: SIMULADOR (LOGIN, PAINEL DO EXECUTIVO OU CARTEIRA) */}
        <div className="w-full lg:w-7/12 flex flex-col items-center justify-center p-4 sm:p-6 overflow-y-auto max-h-[calc(100vh-65px)] relative">
          
          <div className="absolute inset-0 bg-[#07080b] bg-[radial-gradient(#1f2230_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

          <div className="mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/40 rounded-full flex items-center gap-2 text-xs font-bold text-amber-300 shadow-lg z-10">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>
              {telaAtiva === 'painel'
                ? 'MAPA VISUAL DO PAINEL: CLIQUE NAS ABAS PARA OUVIR A EXPLICAÇÃO!'
                : (telaAtiva === 'carteira' ? 'CARTEIRA: CLIQUE NOS BOTÕES PARA CONHECER!' : 'MAPA VISUAL: NÃO DIGITE AQUI. PRATIQUE NA SUA TELA REAL!')}
            </span>
          </div>

          {/* ============================================================ */}
          {/* 1. TELA DE LOGIN DO EXECUTIVO (CPF)                          */}
          {/* ============================================================ */}
          {telaAtiva === 'login' && (
            <div className="relative w-full max-w-[390px] bg-black border border-zinc-800/80 rounded-[36px] p-7 sm:p-8 shadow-2xl shadow-black overflow-hidden z-10 opacity-95">
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-red-950/60 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-red-950/60 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-center gap-1 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              </div>

              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center shadow-lg border-2 border-red-600/30 p-2 text-center">
                  <Shield className="w-7 h-7 text-red-600 mb-0.5" />
                  <span className="text-[10px] font-black tracking-tighter text-zinc-950 leading-none">S.I.O.</span>
                  <span className="text-[7px] font-bold text-red-600 tracking-tight leading-none mt-0.5">EXECUTIVO</span>
                </div>
                <h1 className="mt-4 text-sm font-extrabold tracking-wider text-white uppercase text-center">
                  S.I.O. — SISTEMA DE INTELIGÊNCIA OPERACIONAL
                </h1>
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest mt-0.5">
                  ACESSO DO EXECUTIVO (CPF)
                </span>
              </div>

              {etapaLogin <= 3 && (
                <div className="mt-8 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-200 mb-1.5 pl-2">
                      Digite seu CPF
                    </label>
                    <input 
                      type="text"
                      readOnly
                      value="000.000.000-00"
                      className={`w-full bg-white text-zinc-900 font-semibold px-5 py-3.5 rounded-full text-sm shadow-inner transition ${
                        loginAtual.destaque === 'cpf'
                          ? 'ring-4 ring-red-500 border-2 border-red-600 shadow-[0_0_25px_rgba(239,68,68,0.8)] animate-pulse'
                          : 'border border-transparent'
                      }`}
                    />
                  </div>

                  <div className="w-full mt-4 bg-red-600 text-white font-bold py-3.5 rounded-full text-sm flex items-center justify-center gap-2 shadow-lg uppercase tracking-wider">
                    <span>CONTINUAR</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              )}

              {etapaLogin === 4 && (
                <div className="mt-8 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-200 mb-1.5 pl-2">
                      Agora digite sua Senha:
                    </label>
                    <input 
                      type="password"
                      readOnly
                      value="••••••••"
                      className={`w-full bg-white text-zinc-900 font-semibold px-5 py-3.5 rounded-full text-sm shadow-inner transition ${
                        loginAtual.destaque === 'senha'
                          ? 'ring-4 ring-red-500 border-2 border-red-600 shadow-[0_0_25px_rgba(239,68,68,0.8)] animate-pulse'
                          : 'border border-transparent'
                      }`}
                    />
                  </div>
                  <div className="text-right pr-2">
                    <span 
                      onClick={() => setModalEsqueci(true)}
                      className="text-xs text-zinc-400 hover:text-white cursor-pointer underline"
                    >
                      Esqueci a senha
                    </span>
                  </div>
                  <div className="w-full mt-4 bg-red-600 text-white font-bold py-3.5 rounded-full text-sm flex items-center justify-center gap-2 shadow-lg uppercase tracking-wider">
                    <span>ENTRAR</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              )}

              <div className="flex justify-center gap-1 mt-8">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* 2. PAINEL DO EXECUTIVO (6 ABAS IDÊNTICAS AO PRINT REAL)      */}
          {/* ============================================================ */}
          {telaAtiva === 'painel' && (
            <div className="relative w-full max-w-[660px] bg-white border-2 border-zinc-700 rounded-3xl shadow-2xl z-10 pb-6 text-zinc-900 overflow-hidden">
              
              {/* CABEÇALHO DO EXECUTIVO */}
              <div className="bg-slate-50 px-6 py-4 border-b border-zinc-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full bg-zinc-200 border-2 border-zinc-300 flex items-center justify-center text-zinc-500 shadow-sm">
                    <User className="w-6 h-6" />
                    <span className="absolute bottom-0 right-0 p-1 bg-blue-600 text-white rounded-full text-[8px] shadow">📷</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-zinc-900 uppercase">JOÃO JOSÉ</h3>
                    <span className="text-[10px] bg-slate-800 text-white px-2 py-0.5 rounded-full font-bold uppercase">
                      PAINEL EXECUTIVO
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[9px] font-bold text-zinc-400 uppercase block">SALDO DE CASHBACK-SHARE</span>
                    <span className="text-base font-black text-blue-700">R$ 404,91</span>
                  </div>

                  <button
                    onClick={abrirCarteiraPessoal}
                    className="px-3 py-1.5 bg-white border border-zinc-300 hover:bg-zinc-50 rounded-xl text-[10px] font-bold text-zinc-800 transition flex items-center gap-1 shadow-sm"
                  >
                    <span>💳 Ir para a Carteira</span>
                  </button>

                  <button 
                    onClick={() => {
                      setTelaAtiva('login');
                      setEtapaLogin(0);
                      tocarVoz("Sessão encerrada com segurança.", "Sessão encerrada com segurança.");
                    }}
                    className="px-3 py-1.5 bg-red-50 border border-red-200 rounded-xl text-[10px] font-bold text-red-600 hover:bg-red-100 transition shadow-sm"
                  >
                    <span>Sair</span>
                  </button>
                </div>
              </div>

              {/* BARRA DAS 6 ABAS */}
              <div className="bg-white border-b border-zinc-200 px-4 py-2 flex items-center justify-between overflow-x-auto text-xs font-bold text-zinc-600">
                {abasExecutivo.map(tab => {
                  const ativa = abaPainelSelecionada === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => clicarNaAbaPainel(tab.id)}
                      className={`px-3 py-2 border-b-2 transition-all whitespace-nowrap ${
                        ativa
                          ? 'border-b-blue-600 text-blue-600 font-black'
                          : 'border-b-transparent hover:text-zinc-900'
                      }`}
                    >
                      <span>{tab.nome.replace(/Aba \d+: /, '')}</span>
                    </button>
                  );
                })}
              </div>

              {/* CONTEÚDO DAS ABAS */}
              <div className="p-5 text-zinc-800">
                
                {/* 1. DASHBOARD & BALCÃO AO VIVO */}
                {abaPainelSelecionada === 'dashboard' && (
                  <div className="space-y-4">
                    {/* KPIS GRANDES */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 bg-indigo-600 text-white rounded-2xl text-center shadow">
                        <span className="text-3xl font-black block">2</span>
                        <span className="text-xs font-bold uppercase opacity-90">Lojas Ativas</span>
                      </div>
                      <div className="p-4 bg-emerald-600 text-white rounded-2xl text-center shadow">
                        <span className="text-3xl font-black block">1</span>
                        <span className="text-xs font-bold uppercase opacity-90">Usuários Indicados</span>
                      </div>
                    </div>

                    {/* COLUNAS LADO A LADO DO BALCÃO E EXTRATO */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                      
                      {/* BALCÃO DE VENDAS */}
                      <div className="p-4 bg-amber-50/40 border border-amber-200 rounded-2xl space-y-2.5">
                        <h4 className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                          🎁 Demonstrar Bonificação (Venda)
                        </h4>
                        <div>
                          <label className="block text-[10px] font-bold text-zinc-500 mb-0.5">CPF, E-mail ou Token do Cliente:</label>
                          <input type="text" readOnly value="CPF do Lojista ou Cliente" className="w-full border border-zinc-300 rounded-lg p-2 text-xs bg-white text-zinc-600 font-medium" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-bold text-zinc-500 mb-0.5">Valor da Compra (R$):</label>
                            <input type="text" readOnly value="100,00" className="w-full border border-zinc-300 rounded-lg p-2 text-xs bg-white font-bold" />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-zinc-500 mb-0.5">Cashback da Loja (%):</label>
                            <input type="text" readOnly value="7,0" className="w-full border border-zinc-300 rounded-lg p-2 text-xs bg-white font-bold" />
                          </div>
                        </div>

                        {/* CALCULADORA EM TEMPO REAL */}
                        <div className="p-2.5 bg-white border border-blue-200 rounded-xl space-y-1 text-[11px] shadow-sm">
                          <p className="font-bold text-zinc-800">Valor do Bônus (7%): R$ 7,00</p>
                          <p className="font-black text-emerald-600">🎁 O Cliente Recebe (80%): R$ 5,60</p>
                          <p className="text-zinc-500 text-[10px]">Fatia de Rede (20%): R$ 1,40 | Taxa Adm (2%): R$ 2,00</p>
                          <p className="pt-1 border-t border-dashed border-zinc-200 font-bold text-amber-900 text-xs">Débito Total no seu Painel: R$ 9,00</p>
                        </div>

                        <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs rounded-xl transition shadow flex items-center justify-center gap-1.5 uppercase">
                          <span>🚀 CONFIRMAR CASHBACK (TESTE)</span>
                        </button>
                      </div>

                      {/* EXTRATO RECENTE */}
                      <div className="p-4 bg-white border border-zinc-200 rounded-2xl space-y-2">
                        <h4 className="text-xs font-bold text-zinc-800 flex items-center gap-1.5">
                          📈 Extrato Recente
                        </h4>
                        <div className="divide-y divide-zinc-100 text-xs font-medium">
                          <div className="py-2 flex items-center justify-between"><span className="text-zinc-600">29/07 • Venda Demonstração</span><span className="font-bold text-zinc-800">R$ 1.000,00</span></div>
                          <div className="py-2 flex items-center justify-between"><span className="text-zinc-600">30/06 • Venda Demonstração</span><span className="font-bold text-zinc-800">R$ 100,00</span></div>
                          <div className="py-2 flex items-center justify-between"><span className="text-zinc-600">21/01 • RESTAURANTE DO JOÃO</span><span className="font-black text-emerald-600">+ R$ 0,76</span></div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* 2. MINHA REDE */}
                {abaPainelSelecionada === 'rede' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-4 bg-white border border-zinc-200 rounded-2xl space-y-3">
                      <h4 className="font-bold text-zinc-800 flex items-center gap-1.5">🏪 Lojas Parceiras (2)</h4>
                      <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1">
                        <div className="flex items-center justify-between"><strong className="text-zinc-800">RESTAURANTE DO JOÃO</strong><span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-[10px] rounded">LOJA</span></div>
                        <p className="text-[11px] text-zinc-500 flex items-center gap-1"><MapPin className="w-3 h-3 text-red-500" /> Rua Ramon Haro Martini, 930 - Sorocaba/SP</p>
                      </div>
                      <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1">
                        <div className="flex items-center justify-between"><strong className="text-zinc-800">Loja Modelo</strong><span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold text-[10px] rounded">LOJA</span></div>
                        <p className="text-[11px] text-zinc-500 flex items-center gap-1"><MapPin className="w-3 h-3 text-red-500" /> Rua Rosa Pavone, 5050 - São Paulo/SP</p>
                      </div>
                    </div>

                    <div className="p-4 bg-white border border-zinc-200 rounded-2xl space-y-3">
                      <h4 className="font-bold text-zinc-800 flex items-center gap-1.5">👤 Indicações de Expansão</h4>
                      <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1">
                        <div className="flex items-center justify-between"><strong className="text-zinc-800">nova loja</strong><span className="px-2 py-0.5 bg-blue-100 text-blue-800 font-bold text-[10px] rounded">COMERCIAL</span></div>
                        <p className="text-[11px] text-zinc-500">CPF: 55125093000172</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. EXPANSÃO (LINK COMERCIAL) */}
                {abaPainelSelecionada === 'expansao' && (
                  <div className="p-5 bg-white border border-zinc-200 rounded-2xl space-y-3">
                    <h4 className="font-bold text-xs text-zinc-800 flex items-center gap-1.5">🚀 Link de Expansão (Comercial)</h4>
                    <p className="text-[11px] text-zinc-500">Use este link oficial para cadastrar novas Lojas ou Clientes em sua rede comercial.</p>
                    <div className="flex gap-2">
                      <div className="flex-1 flex items-center bg-zinc-50 border border-zinc-300 rounded-xl px-3 py-2 text-xs">
                        <span className="text-zinc-400 font-mono text-[11px]">https://rede.clubedobeneficio.com.br/app/cadastro/?exp=</span>
                        <strong className="text-blue-600 font-mono text-[11px] pl-1">executivojose</strong>
                      </div>
                      <button className="px-3 py-2 bg-slate-800 text-white rounded-xl text-xs font-bold">SALVAR SLUG</button>
                    </div>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText("https://rede.clubedobeneficio.com.br/app/cadastro/?exp=executivojose");
                        setCopiadoLink(true);
                        setTimeout(() => setCopiadoLink(false), 3000);
                      }}
                      className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl transition shadow flex items-center justify-center gap-2 uppercase tracking-wider"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>{copiadoLink ? "Link Copiado com Sucesso!" : "COPIAR LINK COMERCIAL"}</span>
                    </button>
                  </div>
                )}

                {/* 4. FINANÇAS */}
                {abaPainelSelecionada === 'financas' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-4 bg-white border border-blue-200 rounded-2xl space-y-2">
                      <h4 className="font-bold text-blue-900">💸 Transferência Interna (Resgate)</h4>
                      <div className="p-2.5 bg-blue-50/50 rounded-xl"><span className="text-[10px] text-zinc-500 block">Saldo Disponível no Painel:</span><span className="font-black text-base text-blue-700">R$ 404,91</span></div>
                      <input type="text" placeholder="Ex: 50.00" className="w-full border border-zinc-300 rounded-lg p-2 text-xs" />
                      <button className="w-full py-2.5 bg-indigo-600 text-white font-bold rounded-xl">CONFIRMAR TRANSFERÊNCIA</button>
                    </div>

                    <div className="p-4 bg-white border border-emerald-200 rounded-2xl space-y-2">
                      <h4 className="font-bold text-emerald-900">💳 Recarregar Saldo do Painel</h4>
                      <div className="p-2.5 bg-emerald-50/50 rounded-xl text-[10px] text-zinc-600 space-y-0.5">
                        <p>🟢 <strong>Ambiente de Testes:</strong> R$ 0,00 (Grátis)</p>
                        <p>🔵 <strong>Taxa de Serviço:</strong> R$ 1,00</p>
                      </div>
                      <input type="text" placeholder="Ex: 100.50" className="w-full border border-zinc-300 rounded-lg p-2 text-xs" />
                      <button className="w-full py-2.5 bg-emerald-600 text-white font-bold rounded-xl">GERAR PIX DE RECARGA</button>
                    </div>
                  </div>
                )}

                {/* 5. BENEFÍCIOS */}
                {abaPainelSelecionada === 'beneficios' && (
                  <div className="p-6 bg-white border border-zinc-200 rounded-2xl text-center space-y-3">
                    <div className="text-4xl">🏆</div>
                    <h4 className="font-black text-sm text-zinc-900">🚀 Ative o Clube de Benefícios para sua Rede!</h4>
                    <p className="text-xs text-zinc-500 max-w-md mx-auto leading-relaxed">Como Executivo, você pode oferecer às suas lojas e usuários indicados um Clube de Vantagens exclusivo com milhares de marcas em todo o Brasil.</p>
                    <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs rounded-xl shadow uppercase tracking-wider">
                      CONTRATAR CLUBE DE BENEFÍCIOS
                    </button>
                  </div>
                )}

                {/* 6. MEUS DADOS */}
                {abaPainelSelecionada === 'dados' && (
                  <div className="p-4 bg-white border border-zinc-200 rounded-2xl space-y-3 text-xs">
                    <h4 className="font-bold text-zinc-800 flex items-center gap-1.5">📍 Endereço e Dados</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <div><label className="block text-[10px] font-bold text-zinc-500">CEP:</label><input type="text" readOnly value="01310200" className="w-full border border-zinc-300 rounded-lg p-2 bg-zinc-50" /></div>
                      <div><label className="block text-[10px] font-bold text-zinc-500">UF:</label><input type="text" readOnly value="SP" className="w-full border border-zinc-300 rounded-lg p-2 bg-zinc-50" /></div>
                      <div><label className="block text-[10px] font-bold text-zinc-500">Cidade:</label><input type="text" readOnly value="Campinas" className="w-full border border-zinc-300 rounded-lg p-2 bg-zinc-50" /></div>
                    </div>
                    <div><label className="block text-[10px] font-bold text-zinc-500">Endereço:</label><input type="text" readOnly value="Praça Ruy Barbosa" className="w-full border border-zinc-300 rounded-lg p-2 bg-zinc-50" /></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div><label className="block text-[10px] font-bold text-zinc-500">Número:</label><input type="text" readOnly value="231" className="w-full border border-zinc-300 rounded-lg p-2 bg-zinc-50" /></div>
                      <div><label className="block text-[10px] font-bold text-zinc-500">Bairro:</label><input type="text" readOnly value="Centro" className="w-full border border-zinc-300 rounded-lg p-2 bg-zinc-50" /></div>
                    </div>
                    <button className="w-full py-2.5 bg-slate-800 text-white font-bold rounded-xl">SALVAR ALTERAÇÕES</button>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* 3. CARTEIRA DO EXECUTIVO                                     */}
          {/* ============================================================ */}
          {telaAtiva === 'carteira' && (
            <div className="relative w-full max-w-[395px] bg-[#0d0f17] border-2 border-zinc-800 rounded-[40px] shadow-2xl z-10 pb-4">
              
              {/* TOPO: MEU CLUBE + PAINEL + SAIR */}
              <div className="bg-[#121522] px-4 py-3 border-b border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-xs font-black text-white tracking-wider">MEU CLUBE</span>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={fecharCarteiraPessoal} className="px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 rounded-full text-[10px] font-bold text-white flex items-center gap-1 transition">
                    ← Painel
                  </button>
                  <button onClick={() => { setTelaAtiva('login'); setEtapaLogin(0); }} className="px-2.5 py-1 bg-red-950 hover:bg-red-900 text-red-400 rounded-full text-[10px] font-bold transition">
                    Sair
                  </button>
                </div>
              </div>

              <div className="p-4 space-y-3.5">
                
                {/* SAUDAÇÃO */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 block">BEM-VINDO(A)</span>
                    <h3 className="text-sm font-black text-white">JOÃO JOSÉ 👋</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-700/80 border border-zinc-600 flex items-center justify-center text-white text-xs font-bold">
                    <User className="w-4 h-4 text-zinc-300" />
                  </div>
                </div>

                {/* SALDO DISPONÍVEL */}
                <div 
                  onClick={() => clicarNoBotaoCarteira('saldo')}
                  className={`p-4 bg-gradient-to-r from-[#171b2e] to-[#121524] rounded-2xl border transition-all cursor-pointer ${
                    itemCarteiraSelecionado?.id === 'saldo'
                      ? 'ring-4 ring-red-500 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.7)] animate-pulse'
                      : 'border-zinc-800/80 hover:border-zinc-700'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">SALDO DISPONÍVEL</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xl font-black text-white">
                      {ocultarSaldo ? 'R$ ••••••' : 'R$ 404,91'}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setOcultarSaldo(!ocultarSaldo);
                      }} 
                      className="text-zinc-400 hover:text-white"
                    >
                      {ocultarSaldo ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* BANNER EM DESTAQUE */}
                <div className="p-3 bg-gradient-to-r from-blue-950/60 to-cyan-950/40 border border-cyan-800/40 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                      ⭐ BENEFÍCIOS EM DESTAQUE
                    </span>
                    <h4 className="text-xs font-extrabold text-white mt-0.5">CUPONS EM GRANDES MARCAS</h4>
                    <p className="text-[10px] text-cyan-300">Mais de 75 marcas e vantagens exclusivas</p>
                  </div>
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                    <Gift className="w-4 h-4" />
                  </div>
                </div>

                {/* GRADE DOS 10 BOTÕES PADRÃO */}
                <div className="grid grid-cols-3 gap-2">
                  <button onClick={() => clicarNoBotaoCarteira('dados')} className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center gap-1 transition ${itemCarteiraSelecionado?.id === 'dados' ? 'ring-4 ring-red-500 bg-red-950/40 border-2 border-red-500 animate-pulse' : 'bg-[#151928] border border-zinc-800'}`}><User className="w-5 h-5 text-blue-400" /><span className="text-[10px] font-bold text-zinc-200">Meus Dados</span></button>
                  <button onClick={() => clicarNoBotaoCarteira('beneficios')} className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center gap-1 transition ${itemCarteiraSelecionado?.id === 'beneficios' ? 'ring-4 ring-amber-400 bg-amber-950/60 border-2 border-amber-400 animate-pulse' : 'bg-[#151928] border border-amber-500/60'}`}><Trophy className="w-5 h-5 text-amber-400" /><span className="text-[10px] font-extrabold text-amber-300">Clube</span></button>
                  <button onClick={() => clicarNoBotaoCarteira('extrato')} className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center gap-1 transition ${itemCarteiraSelecionado?.id === 'extrato' ? 'ring-4 ring-red-500 bg-red-950/40 border-2 border-red-500 animate-pulse' : 'bg-[#151928] border border-zinc-800'}`}><FileText className="w-5 h-5 text-amber-300" /><span className="text-[10px] font-bold text-zinc-200">Extrato</span></button>
                  <button onClick={() => clicarNoBotaoCarteira('recarga')} className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center gap-1 transition ${itemCarteiraSelecionado?.id === 'recarga' ? 'ring-4 ring-red-500 bg-red-950/40 border-2 border-red-500 animate-pulse' : 'bg-[#151928] border border-zinc-800'}`}><Wallet className="w-5 h-5 text-emerald-400" /><span className="text-[10px] font-bold text-zinc-200">Recarregar</span></button>
                  <button onClick={() => clicarNoBotaoCarteira('fisicas')} className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center gap-1 transition ${itemCarteiraSelecionado?.id === 'fisicas' ? 'ring-4 ring-red-500 bg-red-950/40 border-2 border-red-500 animate-pulse' : 'bg-[#151928] border border-zinc-800'}`}><Store className="w-5 h-5 text-rose-400" /><span className="text-[10px] font-bold text-zinc-200">Lojas Físicas</span></button>
                  <button onClick={() => clicarNoBotaoCarteira('online')} className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center gap-1 transition ${itemCarteiraSelecionado?.id === 'online' ? 'ring-4 ring-red-500 bg-red-950/40 border-2 border-red-500 animate-pulse' : 'bg-[#151928] border border-zinc-800'}`}><Globe className="w-5 h-5 text-cyan-400" /><span className="text-[10px] font-bold text-zinc-200">Lojas Online</span></button>
                  <button onClick={() => clicarNoBotaoCarteira('amigo')} className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center gap-1 transition ${itemCarteiraSelecionado?.id === 'amigo' ? 'ring-4 ring-red-500 bg-red-950/40 border-2 border-red-500 animate-pulse' : 'bg-[#151928] border border-zinc-800'}`}><Handshake className="w-5 h-5 text-amber-400" /><span className="text-[10px] font-bold text-zinc-200">Cashback Amigo</span></button>
                  <button onClick={() => clicarNoBotaoCarteira('pix')} className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center gap-1 transition ${itemCarteiraSelecionado?.id === 'pix' ? 'ring-4 ring-red-500 bg-red-950/40 border-2 border-red-500 animate-pulse' : 'bg-[#151928] border border-zinc-800'}`}><QrCode className="w-5 h-5 text-blue-400" /><span className="text-[10px] font-bold text-zinc-200">Pagar com Pix</span></button>
                  <button onClick={() => clicarNoBotaoCarteira('cashgenius')} className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center gap-1 transition ${itemCarteiraSelecionado?.id === 'cashgenius' ? 'ring-4 ring-purple-400 bg-purple-950/60 border-2 border-purple-400 animate-pulse' : 'bg-[#151928] border border-purple-500/60'}`}><Brain className="w-5 h-5 text-purple-400" /><span className="text-[10px] font-extrabold text-purple-300">CashGenius VIP</span></button>
                  <button onClick={() => clicarNoBotaoCarteira('saque')} className={`p-2.5 rounded-2xl flex flex-col items-center justify-center text-center gap-1 transition ${itemCarteiraSelecionado?.id === 'saque' ? 'ring-4 ring-red-500 bg-red-950/40 border-2 border-red-500 animate-pulse' : 'bg-[#151928] border border-zinc-800'}`}><Landmark className="w-5 h-5 text-blue-300" /><span className="text-[10px] font-bold text-zinc-200">Sacar Dinheiro</span></button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>

      {/* MODAL ESQUECI A SENHA */}
      {modalEsqueci && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#10121a] border border-zinc-800 rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl relative">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-red-500" />
              Recuperação de Senha do Executivo
            </h3>
            <div className="mt-4 space-y-3">
              <p className="text-xs text-zinc-300">Na sua tela oficial, clique em "Esqueci a senha" para receber o link seguro por e-mail com apoio do suporte humano.</p>
              <button onClick={() => setModalEsqueci(false)} className="w-full py-2.5 rounded-xl bg-zinc-800 text-xs font-bold text-white">Fechar</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
