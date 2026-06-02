'use client';

import { Controller, type UseFormReturn } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import {
  GENDERS,
  GOALS,
  ACTIVITY_LEVELS,
  type ProfileValues,
} from '@/lib/validations/profile';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { TagInput } from '@/components/ui/tag-input';
import { FieldError } from '@/components/ui/field-error';
import { cn } from '@/lib/utils';

type Form = UseFormReturn<ProfileValues>;

export function BasicFields({ form }: { form: Form }) {
  const t = useTranslations('onboarding.basic');
  const tg = useTranslations('onboarding.gender');
  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="full_name">{t('fullName')}</Label>
        <Input id="full_name" {...register('full_name')} />
        <FieldError message={errors.full_name && 'required'} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="date_of_birth">{t('dateOfBirth')}</Label>
          <Input id="date_of_birth" type="date" {...register('date_of_birth')} />
          <FieldError message={errors.date_of_birth && 'required'} />
        </div>
        <div>
          <Label htmlFor="gender">{t('gender')}</Label>
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <Select id="gender" {...field} value={field.value ?? ''}>
                <option value="" disabled>
                  —
                </option>
                {GENDERS.map((g) => (
                  <option key={g} value={g}>
                    {tg(camel(g))}
                  </option>
                ))}
              </Select>
            )}
          />
          <FieldError message={errors.gender && 'required'} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="height_cm">{t('height')}</Label>
          <Input id="height_cm" type="number" inputMode="decimal" {...register('height_cm')} />
          <FieldError message={errors.height_cm && 'positiveNumber'} />
        </div>
        <div>
          <Label htmlFor="weight_kg">{t('weight')}</Label>
          <Input id="weight_kg" type="number" inputMode="decimal" {...register('weight_kg')} />
          <FieldError message={errors.weight_kg && 'positiveNumber'} />
        </div>
      </div>
    </div>
  );
}

export function HealthFields({ form }: { form: Form }) {
  const t = useTranslations('onboarding.health');
  const { control } = form;

  const items = [
    { name: 'medical_conditions', label: t('medicalConditions'), hint: t('medicalConditionsHint') },
    {
      name: 'dietary_restrictions',
      label: t('dietaryRestrictions'),
      hint: t('dietaryRestrictionsHint'),
    },
    { name: 'allergies', label: t('allergies'), hint: t('allergiesHint') },
    { name: 'current_medications', label: t('medications'), hint: t('medicationsHint') },
  ] as const;

  return (
    <div className="space-y-4">
      {items.map(({ name, label, hint }) => (
        <div key={name}>
          <Label htmlFor={name}>{label}</Label>
          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <TagInput value={field.value ?? []} onChange={field.onChange} placeholder={hint} />
            )}
          />
        </div>
      ))}
    </div>
  );
}

export function GoalsFields({ form }: { form: Form }) {
  const t = useTranslations('onboarding.goals');
  const {
    control,
    formState: { errors },
  } = form;

  return (
    <div>
      <p className="mb-3 text-sm text-muted-foreground">{t('subtitle')}</p>
      <Controller
        control={control}
        name="goals"
        render={({ field }) => {
          const selected = field.value ?? [];
          return (
            <div className="grid gap-2 sm:grid-cols-2">
              {GOALS.map((goal) => {
                const active = selected.includes(goal);
                return (
                  <button
                    type="button"
                    key={goal}
                    onClick={() =>
                      field.onChange(
                        active ? selected.filter((g) => g !== goal) : [...selected, goal]
                      )
                    }
                    className={cn(
                      'rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors',
                      active
                        ? 'border-primary bg-primary/10 text-foreground'
                        : 'border-border hover:bg-muted/50'
                    )}
                  >
                    {t(camel(goal))}
                  </button>
                );
              })}
            </div>
          );
        }}
      />
      <FieldError message={errors.goals && 'selectOne'} />
    </div>
  );
}

export function LifestyleFields({ form }: { form: Form }) {
  const t = useTranslations('onboarding.lifestyle');
  const ta = useTranslations('onboarding.activityLevel');
  const tc = useTranslations('common');
  const { register, control } = form;

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="occupation">
          {t('occupation')}{' '}
          <span className="font-normal text-muted-foreground">({tc('optional')})</span>
        </Label>
        <Input id="occupation" {...register('occupation')} />
      </div>
      <div>
        <Label htmlFor="daily_routine">
          {t('dailyRoutine')}{' '}
          <span className="font-normal text-muted-foreground">({tc('optional')})</span>
        </Label>
        <Textarea id="daily_routine" placeholder={t('dailyRoutineHint')} {...register('daily_routine')} />
      </div>
      <div>
        <Label htmlFor="activity_level">{t('activityLevel')}</Label>
        <Controller
          control={control}
          name="activity_level"
          render={({ field }) => (
            <Select id="activity_level" {...field} value={field.value ?? ''}>
              <option value="" disabled>
                —
              </option>
              {ACTIVITY_LEVELS.map((level) => (
                <option key={level} value={level}>
                  {ta(level)}
                </option>
              ))}
            </Select>
          )}
        />
      </div>
    </div>
  );
}

export function PreferencesFields({ form }: { form: Form }) {
  const t = useTranslations('onboarding.preferences');
  const { control } = form;

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="unit_system">{t('unitSystem')}</Label>
        <Controller
          control={control}
          name="unit_system"
          render={({ field }) => (
            <Select id="unit_system" {...field}>
              <option value="metric">{t('metric')}</option>
              <option value="imperial">{t('imperial')}</option>
            </Select>
          )}
        />
      </div>
      <div className="flex items-center justify-between rounded-lg border border-border p-4">
        <div>
          <p className="text-sm font-medium">{t('notifications')}</p>
          <p className="text-xs text-muted-foreground">{t('notificationsHint')}</p>
        </div>
        <Controller
          control={control}
          name="notifications_enabled"
          render={({ field }) => (
            <Switch checked={!!field.value} onCheckedChange={field.onChange} />
          )}
        />
      </div>
    </div>
  );
}

// snake_case enum value -> camelCase i18n key (e.g. weight_loss -> weightLoss).
function camel(value: string) {
  return value.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
