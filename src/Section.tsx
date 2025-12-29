import { Typography } from '@mui/material';
import Box from '@mui/material/Box'

export default function Section({
  title,
  children,
}: Readonly<{
  title: string;
  children?: React.ReactNode;
}>) {
  return <Box sx={{backgroundColor: '#1e1e1e', color: '#ffffff', padding: '24px', borderRadius: '6px'}}>
    <Typography variant="h6" fontWeight="bold">{title}</Typography>
    {children}
  </Box>
}
