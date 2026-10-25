import type { Goal } from "../types/Goal";
import type { Habit } from "../types/Habit";

export const mockGoals: Goal[] = [
  {
    id: "14b6ac8e-2e1e-4c68-8f2b-1a9f63e20401",
    name: "Concluir um curso de programação",
    deadline: "2027-03-31",
    description: "Estudar desenvolvimento mobile e finalizar o projeto do curso.",
    progress: 35,
    created_at: "2026-09-10T12:00:00.000Z",
    category: "Education",
  },
  {
    id: "14b6ac8e-2e1e-4c68-8f2b-1a9f63e20402",
    name: "Montar uma reserva de emergência",
    deadline: "2027-12-31",
    description: "Guardar uma quantia fixa todo mês.",
    progress: 20,
    created_at: "2026-08-01T12:00:00.000Z",
    category: "Finance",
  },
  {
    id: "14b6ac8e-2e1e-4c68-8f2b-1a9f63e20403",
    name: "Correr uma prova de 5 km",
    deadline: "2027-05-16",
    description: "Aumentar a distância gradualmente com treinos semanais.",
    progress: 50,
    created_at: "2026-07-20T12:00:00.000Z",
    category: "Fitness",
  },
];

export const mockHabits: Habit[] = [
  {
    id: "a2a3b588-bd1d-4b89-8db1-43c5f2ec0101",
    name: "Ler 20 páginas",
    action: "build",
    description: "Ler um pouco todos os dias antes de dormir.",
    frequency: "daily",
    completed_dates: ["2026-10-23", "2026-10-24", "2026-10-25"],
    current_streak: 3,
    created_at: "2026-10-01T12:00:00.000Z",
  },
  {
    id: "a2a3b588-bd1d-4b89-8db1-43c5f2ec0102",
    name: "Fazer caminhada",
    action: "build",
    description: "Caminhar por pelo menos 30 minutos.",
    frequency: "weekly",
    completed_dates: ["2026-10-20", "2026-10-23"],
    current_streak: 2,
    created_at: "2026-09-15T12:00:00.000Z",
  },
  {
    id: "a2a3b588-bd1d-4b89-8db1-43c5f2ec0103",
    name: "Evitar bebidas açucaradas",
    action: "leave",
    description: "Substituir refrigerantes por água durante a semana.",
    frequency: "daily",
    completed_dates: ["2026-10-24", "2026-10-25"],
    current_streak: 2,
    created_at: "2026-10-10T12:00:00.000Z",
  },
  {
    id: "a2a3b588-bd1d-4b89-8db1-s4353",
    name: "Estudar PHP",
    action: "build",
    description: "Estudar php para um projeto da faculdade",
    frequency: "daily",
    completed_dates: ["2026-10-23", "2026-10-24", ],
    current_streak: 2,
    created_at: "2026-10-01T12:00:00.000Z",
  }
];
