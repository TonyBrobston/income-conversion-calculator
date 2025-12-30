export const removeNonNumeric = (value: string) => {
  const valueWithOnlyDigits = value.replace(/\D/g, '');
  return valueWithOnlyDigits === '' ? '0' : valueWithOnlyDigits;
}
