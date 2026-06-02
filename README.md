# Rito Health

Plataforma pessoal de inteligência de saúde preventiva. Este repositório contém a
**Fase 1 — Fundação**: design system, autenticação e onboarding inteligente com perfil editável.

> Roadmap completo: 20 fases (dashboard, nutrição, hidratação, exercício, sono, humor,
> suplementos, medicamentos, progresso corporal, exames, AI coach, etc.). Apenas a Fase 1
> está implementada aqui; a arquitetura foi pensada para suportar as demais.

## Stack

- **Next.js 15 (App Router) + TypeScript** — web app / PWA-ready
- **Supabase** — Postgres, Auth (e-mail/senha + Google), Row Level Security, Storage
- **Tailwind CSS v4** com tokens semânticos (dark/light via `next-themes`)
- **next-intl** — interface em pt-BR (estruturado para adicionar outros idiomas)
- **react-hook-form + zod** — formulários e validação compartilhada

## O que está incluído (Fase 1)

- Design system: tokens semânticos, modo claro/escuro, tipografia, componentes reutilizáveis
- Autenticação: e-mail/senha, login com Google, recuperação de senha, logout
- Onboarding em 5 etapas: básico, saúde, objetivos, estilo de vida, preferências
- Perfil editável a qualquer momento
- Exclusão de conta (LGPD) com remoção em cascata dos dados

## Configuração

### 1. Dependências

```bash
npm install
```

### 2. Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha com os dados do seu projeto Supabase:

```bash
cp .env.example .env.local
```

- `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` — em Project Settings → API.
- `SUPABASE_SERVICE_ROLE_KEY` — **somente servidor**, usado na exclusão de conta (LGPD).
  Nunca exponha no cliente.
- `NEXT_PUBLIC_SITE_URL` — URL base do app (ex.: `http://localhost:3000`).

### 3. Banco de dados

Rode a migration no SQL Editor do Supabase (ou via Supabase CLI):

```
supabase/migrations/0001_profiles.sql
```

Ela cria a tabela `profiles`, as políticas de RLS e o trigger que cria automaticamente
um perfil ao registrar um novo usuário.

### 4. Login com Google

No painel do Supabase, em **Authentication → Providers → Google**, habilite o provedor e
adicione a URL de callback `https://SEU-PROJETO.supabase.co/auth/v1/callback` no Google Cloud Console.

### 5. Rodar

```bash
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção
npm run lint     # lint
npm run typecheck
```

## Estrutura

```
src/
  app/
    (auth)/            # login, signup, recuperação/redefinição de senha
    (app)/             # áreas autenticadas: dashboard, configurações/perfil
    onboarding/        # assistente de onboarding (5 etapas)
    auth/callback/     # troca de código OAuth / confirmação de e-mail
  components/
    ui/                # design system (Button, Input, Card, Select, Switch, ...)
    onboarding/        # campos compartilhados + assistente
    profile/           # editor de perfil + exclusão de conta
  lib/
    supabase/          # clients (browser, server, admin) + middleware
    actions/           # server actions (auth, profile)
    validations/       # schemas zod compartilhados
  i18n/                # configuração e mensagens (pt-BR)
supabase/migrations/   # SQL do banco (profiles + RLS)
```

## Segurança / LGPD

JWT e criptografia em repouso são providos pelo Supabase; RLS garante isolamento por
usuário; HTTPS em trânsito. Exclusão completa de conta e dados disponível em
**Configurações → Perfil**. Criptografia a nível de coluna fica para a Fase 17.
