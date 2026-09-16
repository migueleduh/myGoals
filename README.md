# 🚀 MyGoal

## 📱 Sobre o Aplicativo
O myGoal é uma aplicação  mobile que tem o objetivo de ajudar a organizar tarefas do dia a dia, criar hábitos novos, definir metas a serem alcançadas e monitorar comportamentos e vícios.

**Dashboard Diário ("Hoje"):**
  * **Contador de Dias Limpo (Quit Habits):** Cards visuais com cálculo de *streak* (dias consecutivos) sem praticar um vício, incluindo botão de reset em caso de recaída.
  * **Check-list de Hábitos (Build Habits):** Marcação diária de atividades positivas com contador de frequência.
* **Mural do Futuro ("Metas"):**
  * Cadastro de grandes objetivos categorizados (Idiomas, Carreira, Finanças, Saúde, Pessoal).
  * Visualização de progresso percentual por barra de avanço individual.
 
### 🔮 Funcionalidades Adicionais (Trabalhos Futuros)

* **Notificações Locais Agendadas:** Lembretes diários em horários específicos para realização de check-ins.
* **Vínculo Direto (Meta ↔ Hábito):** Conectar um hábito diário a uma meta específica para recalcular o progresso automaticamente conforme os hábitos são cumpridos.
* **Métricas & Gráficos Avançados:** Tela com relatórios de taxa de conclusão semanal e histórico de consistência.
* **Backup na Nuvem / Sincronização:** Integração com backend/database remoto (ex: Firebase ou Supabase) para autenticação de usuário e salvamento na nuvem.


### 📋 Checklist de Desenvolvimento

#### Checkpoint 1: Setup do Projeto & Layout das Telas (UI Estática)
- [ ] Inicialização do projeto Expo com TypeScript e Expo Router
- [ ] Configuração do Tailwind CSS / NativeWind (ou biblioteca de UI escolhida)
- [ ] Estruturação das pastas do projeto (`app/`, `src/components`, `src/@types`, `src/storage`)
- [ ] Implementação da navegação.
- [ ] Construção da interface gráfica da **Tela Hoje** com dados simulados (*mock*)
  - [ ] Cards de hábitos do tipo BUILD (check-list com contador)
  - [ ] Cards de hábitos do tipo QUIT (contador de dias limpo)
- [ ] Construção da interface gráfica da **Tela Metas**  com dados simulados
  - [ ] Cards de metas com barras de progresso percentual
- [ ] Modal/Formulário visual para cadastro de novos hábitos e metas

#### Checkpoint 2: Regras de Negócio & Gerenciamento de Estado
- [ ] Definição completa das interfaces TypeScript (`Habit`, `Goal`, `HabitType`)
- [ ] Gerenciamento de estado global/local (React State / Context API / Zustand)
- [ ] Lógica de **Check-in diário** para hábitos BUILD (incrementar/manter streak)
- [ ] Lógica de **Reset de recaída** para hábitos QUIT (reiniciar contador de dias limpo)
- [ ] Lógica de **Atualização de progresso** das Metas (0 a 100%)
- [ ] Algoritmo de cálculo de diferença de dias com base nas datas de check-in (`lastCheckedDate`)

#### Checkpoint 3: Persistência Local & Experiência do Usuário (UX)
- [ ] Integração com `AsyncStorage` ou `MMKV` para salvar hábitos e metas offline
- [ ] Leitura automática dos dados armazenados ao abrir o aplicativo
- [ ] Modal de confirmação antes de resetar ou excluir hábitos/metas
- [ ] Tratamento de telas vazias (*Empty States*) para quando não houver itens cadastrados
- [ ] Validação básica dos campos nos formulários de criação

#### Checkpoint Final: Refatoração, Testes & Documentação
- [ ] Revisão e limpeza de código (remoção de logs e dados simulados)
- [ ] Testes de funcionamento em dispositivo físico via Expo Go
- [ ] Atualização final do `README.md` com prints/GIFs demonstrativos das telas
- [ ] Produção do vídeo/material de apresentação da disciplina


##  🗃️ Modelagem do Banco
Aplicação vai utilizar o banco PostgreSQL do Supabase, e o backend vai ser por conta do próprio BAAS.

link da modelagem: https://dbdiagram.io/d/6aaad989af7c3b0bd1f96387


## Planejamento de sprints
* 16/09 a 27/09 cumprir todo o checkpoint 1. 
* 28/09 a 05/10 cumprir todo o checkpoint 2.
* 06/10 a 18/10 cumprir todo o checkpoint 3.
* 19/10 a 31/10 cumprir todo o checkpoint 4.




## 🛠️ Tecnologias Utilizadas

* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Framework Mobile:** [React Native](https://reactnative.dev/) / [Expo](https://expo.dev/)
* **Estilização:** [NativeWind / Tailwind CSS](https://www.nativewind.dev/) (ou Styled Components)
* **Navegação:** [React Navigation](https://reactnavigation.org/) (Bottom Tabs)
* **Persistência de Dados:**

  



