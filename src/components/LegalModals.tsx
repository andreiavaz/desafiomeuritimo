import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#FAF7F2] rounded-xl border border-[#DFD6C9] shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E3D9CC] bg-[#F5EFEB]">
          <h3 className="font-serif text-xl font-bold text-[#193427]">
            {type === 'terms' ? 'Termos de Uso' : 'Política de Privacidade'}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-[#667761] hover:text-[#193427] hover:bg-[#EBE2D5] transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#384235] leading-relaxed">
          {type === 'terms' ? (
            <>
              <p>
                <strong>1. Sobre o Desafio Meu Ritmo</strong><br />
                O Desafio Meu Ritmo é uma experiência educacional e comportamental online de 7 dias conduzida pela Nutricionista Andréia Vaz (CRN-8 3188), voltada para organização alimentar, conscientização de hábitos e constância.
              </p>
              <p>
                <strong>2. Natureza Educacional e Não Substituição Médica</strong><br />
                O conteúdo apresentado tem finalidade exclusivamente educacional e de orientação nutricional coletiva. Não substitui consultas médicas, diagnósticos ou tratamentos individualizados de patologias clínicas específicas.
              </p>
              <p>
                <strong>3. Acesso e Participação</strong><br />
                O acesso à área de membros e aos encontros ao vivo é pessoal e intransferível, concedido mediante confirmação de pagamento através da plataforma de checkout Greenn.
              </p>
              <p>
                <strong>4. Responsabilidade e Resultados</strong><br />
                Os resultados podem variar de pessoa para pessoa, considerando fatores biológicos individuais, histórico de saúde e adesão às práticas sugeridas. Não há promessas de emagrecimento pré-determinado ou cura.
              </p>
              <p>
                <strong>5. Propriedade Intelectual</strong><br />
                Todos os materiais, aulas e conteúdos disponibilizados são protegidos por direitos autorais e não podem ser comercializados, reproduzidos ou distribuídos sem autorização expressa.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Coleta e Uso de Informações</strong><br />
                Respeitamos integralmente a sua privacidade e os preceitos da Lei Geral de Proteção de Dados (LGPD). Os dados fornecidos no momento da inscrição são utilizados estritamente para viabilizar o seu acesso aos encontros, à área de membros e às comunicações essenciais sobre o Desafio Meu Ritmo.
              </p>
              <p>
                <strong>2. Processamento de Pagamento Seguro</strong><br />
                As transações financeiras são intermediadas com criptografia de ponta a ponta pela plataforma Greenn. Dados sensíveis de cartão de crédito não são armazenados em nossos servidores.
              </p>
              <p>
                <strong>3. Compartilhamento de Dados</strong><br />
                Não vendemos, não alugamos e não compartilhamos suas informações pessoais com terceiros para fins publicitários não relacionados ao produto adquirido.
              </p>
              <p>
                <strong>4. Seus Direitos</strong><br />
                Você poderá a qualquer momento solicitar a atualização, retificação ou exclusão de suas informações de contato de nossas comunicações conforme previsto em lei.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#E3D9CC] bg-[#F5EFEB] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#193427] hover:bg-[#234233] transition-colors rounded"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
