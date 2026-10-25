    export default interface Habit{
    id: string;               // UUID gerado pelo Supabase
    user_id?: string;         // ID do usuário autenticado
    name: string;
    action: HabitType;
    description?: string;
    frequency: HabitFrequency;
    completed_dates: string[]; // Ex: ["2026-10-13", "2026-10-12"]
    current_streak: number;
    created_at: string;
    }

    type HabitFrequency = 'daily' | 'weekly';
    type HabitType = 'build' | 'leave';

