import './globals.css';
import Navbar from '@/componentes/Navbar';
import { TarefaProvider } from '@/data/ContextTarefa';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <TarefaProvider>
          <Navbar />
          <main className="p-4">{children}</main>
        </TarefaProvider>
      </body>
    </html>
  );
}