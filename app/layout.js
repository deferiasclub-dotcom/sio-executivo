import './globals.css';

export const metadata = {
  title: 'S.I.O. — Painel do Executivo',
  description: 'Treinamento Interativo de Expansão Comercial e Credenciamento de Lojas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0c0d12] text-white min-h-screen antialiased selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
