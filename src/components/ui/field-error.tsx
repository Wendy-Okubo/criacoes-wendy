import { useTranslations } from 'next-intl';

// Renders a validation message. If the message matches a key under the
// `validation` namespace it is translated; otherwise it is shown as-is.
export function FieldError({ message }: { message?: string }) {
  const t = useTranslations('validation');
  if (!message) return null;

  const known = ['required', 'email', 'minPassword', 'positiveNumber', 'selectOne'];
  const text = known.includes(message) ? t(message) : message;

  return <p className="mt-1 text-xs text-danger">{text}</p>;
}
