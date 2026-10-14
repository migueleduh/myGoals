export interface Goal{
    id: string;               // UUID gerado pelo Supabase
    user_id?: string;
    name: string;
    deadline: string;
    description?: string;
    progress: number;
    created_at: string;
    category: GoalCategory;
}

type GoalCategory = 'Career' | 'Health' | 'Finance' | 'Personal Development' | 'Relationships' | 'Recreation' | 'Other' | 'Language Learning' | 'Travel' | 'Education' | 'Fitness' | 'Spirituality' | 'Creativity' | 'Community Service' | 'Self-Care' | 'Hobbies' | 'Mindfulness' | 'Time Management' | 'Productivity' | 'Leadership' | 'Networking';

