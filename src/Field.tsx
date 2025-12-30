import { useEffect, useRef } from 'react';
import { Box, InputLabel, Input } from "@mui/material";

export default function Field({
  label,
  value,
  onChange,
  adornment,
  adornmentPosition,
  autoFocus = false,
}: Readonly<{
  label: string;
  value: number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  adornment?: string;
  adornmentPosition?: 'start'|'end';
  autoFocus?: boolean;
}>) {
  const toKebabCase = (value: string) => value.replaceAll(' ', '-').toLowerCase()
  const id = toKebabCase(label);
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (autoFocus === true && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [])
  return <Box sx={{display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'space-between'}}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        value={value}
        onChange={onChange}
        inputRef={inputRef}
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
