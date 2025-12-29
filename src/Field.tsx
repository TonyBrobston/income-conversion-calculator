import { Box, Typography, InputLabel, InputAdornment, Input } from "@mui/material";

export default function Field({
  label,
  defaultValue,
  adornment,
  adornmentPosition,
}: Readonly<{
  label: string;
  defaultValue?: number;
  adornment: string;
  adornmentPosition: 'start'|'end';
}>) {
  const toKebabCase = (value: string) => value.replaceAll(' ', '-').toLowerCase()
  const id = toKebabCase(label);
  return <Box sx={{display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'space-between'}}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        defaultValue={defaultValue}
        startAdornment={adornmentPosition === 'start' ? adornment : undefined}
        endAdornment={adornmentPosition === 'end' ? adornment : undefined}
        inputProps={{
          sx: { textAlign: 'right' },
        }}
        sx={{
          width: '80px'
        }}
      />
    </Box>
}
