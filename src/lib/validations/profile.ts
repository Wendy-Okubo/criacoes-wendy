import { z } from 'zod';

export const GENDERS = ['female', 'male', 'other', 'prefer_not_to_say'] as const;
export const GOALS = [
  'weight_loss',
  'muscle_gain',
  'performance',
  'general_health',
  'better_sleep',
] as const;
export const ACTIVITY_LEVELS = ['sedentary', 'light', 'moderate', 'active', 'athlete'] as const;
export const UNIT_SYSTEMS = ['metric', 'imperial'] as const;

export const profileSchema = z.object({
  // Basic
  full_name: z.string().min(1).max(120),
  date_of_birth: z.string().min(1), // ISO date string (yyyy-mm-dd)
  gender: z.enum(GENDERS),
  height_cm: z.coerce.number().positive().max(300),
  weight_kg: z.coerce.number().positive().max(700),

  // Health (all optional)
  medical_conditions: z.array(z.string().min(1)).default([]),
  dietary_restrictions: z.array(z.string().min(1)).default([]),
  allergies: z.array(z.string().min(1)).default([]),
  current_medications: z.array(z.string().min(1)).default([]),

  // Goals
  goals: z.array(z.enum(GOALS)).min(1, 'selectOne'),

  // Lifestyle
  occupation: z.string().max(120).optional().or(z.literal('')),
  daily_routine: z.string().max(1000).optional().or(z.literal('')),
  activity_level: z.enum(ACTIVITY_LEVELS),

  // Preferences
  unit_system: z.enum(UNIT_SYSTEMS).default('metric'),
  notifications_enabled: z.boolean().default(true),
});

export type ProfileValues = z.infer<typeof profileSchema>;

export type Gender = (typeof GENDERS)[number];
export type Goal = (typeof GOALS)[number];
export type ActivityLevel = (typeof ACTIVITY_LEVELS)[number];
export type UnitSystem = (typeof UNIT_SYSTEMS)[number];
