import React, { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    id: 'why_not_self',
    question: 'Почему я не могу написать заявление сам?',
    answer: 'Можете. Но без ссылок на нормы АППК РК и правильного кодирования требования для СЭД риск получить шаблонную отписку превышает 70%. Мы проектируем документ как системную карточку, которую нельзя проигнорировать.',
  },
  {
    id: 'timeframe',
    question: 'Как быстро готовится документ?',
    answer: 'Срок подготовки e-Doc файла составляет от 1 до 3 рабочих часов с момента предоставления информации и оплаты. Приём заявок: 09:00 – 19:00 (Астана).',
  },
  {
    id: 'ecp_security',
    question: 'Нужно ли передавать вам ЭЦП?',
    answer: (
      <span>
        <strong className="uppercase text-red-600">Нет! Передавать ЭЦП категорически нельзя по закону РК.</strong> Вы получаете полностью готовый файл и загружаете его в eOtinish самостоятельно за 2 минуты по нашей инструкции.
      </span>
    ),
  },
  {
    id: 'guarantee',
    question: 'Вы гарантируете положительное решение?',
    answer: 'Мы гарантируем 100% принятие документа системой eOtinish и рассмотрение по существу по нормам АППК РК. Итоговое решение зависит от фактических обстоятельств дела. Обещать «100% результат» в спорах с госорганами юридически недобросовестно.',
  },
  {
    id: 'personal_data',
    question: 'Безопасны ли мои персональные данные (ИИН, ФИО)?',
    answer: 'Данные используются исключительно для формирования реквизитов обращения по ст. 63 АППК РК. Мы не передаём данные третьим лицам и не храним их после завершения работы.',
  },
  {
    id: 'sla_breach',
    question: 'Что если госорган нарушит 15-дневный срок рассмотрения?',
    answer: 'Нарушение срока — это прямое административное правонарушение со стороны исполнителя. Мы бесплатно подготовим жалобу на просрочку в Департамент агентства по делам государственной службы (АДГС).',
  },
];

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-4">
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between text-left focus:outline-hidden"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-slate-900 sm:text-lg">
                {item.question}
              </span>
              <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 font-bold text-slate-600">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};