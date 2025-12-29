import { Typography } from '@mui/material';
import Box from '@mui/material/Box'

export default function Section({
  title,
  children,
}: Readonly<{
  title: string;
  children?: React.ReactNode;
}>) {
  return <Box sx={{backgroundColor: '#1e1e1e', color: '#ffffff'}}>
    <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
    {children}
  </Box>
}
