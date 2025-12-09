export interface CompromissoType {
  id: string;
  data: string;
  hora: string;
  titulo: string;
}

export const compromissos: CompromissoType[] = [
  {
    id: '1',
    data: '2025-11-10',
    hora: '09:00',
    titulo: 'Dentista',
  },
  {
    id: '2',
    data: '2025-11-10',
    hora: '16:00',
    titulo: 'Palestra',
  },
  {
    id: '3',
    data: '2025-11-11',
    hora: '08:00',
    titulo: 'Medico',
  },
  {
    id: '4',
    data: '2025-11-11',
    hora: '10:30',
    titulo: 'Reunião de planejamento',
  },
  {
    id: '5',
    data: '2025-11-11',
    hora: '15:00',
    titulo: 'Saida viagem',
  },
  {
    id: '6',
    data: '2025-11-12',
    hora: '09:00',
    titulo: 'Congresso',
  },
  {
    id: '7',
    data: '2025-11-12',
    hora: '12:30',
    titulo: 'Almoço Com executivos',
  },
  {
    id: '8',
    data: '2025-11-12',
    hora: '20:30',
    titulo: 'Jantar de confraternização',
  },
];