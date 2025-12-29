import { Box, Typography, InputLabel, InputAdornment, Input } from "@mui/material";

export default function Field({
  label,
  adornment,
  adornmentPosition,
}: Readonly<{
  label: string;
  adornment: string;
  adornmentPosition: 'start'|'end';
}>) {
  const toKebabCase = (value: string) => value.replace(' ', '-').toLowerCase()
  const id = toKebabCase(label);
  const inputAdornment = <InputAdornment position={adornmentPosition}>{adornment}</InputAdornment>;
  return <Box sx={{display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'space-between'}}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        startAdornment={adornmentPosition === 'start' ? adornment : undefined}
        endAdornment={adornmentPosition === 'end' ? adornment : undefined}
        inputProps={{
          style: { textAlign: 'right' },
        }}
        sx={{
          width: '80px'
        }}
      />
    </Box>
}
