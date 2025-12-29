'use client'

import Image from "next/image";
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
import Section from '../src/Section'

export default function Home() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#121212' }}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Box>
          <Typography variant="h5" color='#ffffff' fontWeight="bold">
            W2 to 1099 Converter
          </Typography>
        </Box>
        <Box sx={{display: 'flex', gap: '20px'}}>
          <Box sx={{display: 'flex', gap: '8px', flexDirection: 'column'}}>
            <Section title="Current W2 Specs" />
            <Section title="Benefits & Perks" />
            <Section title="1099 Assumptions" />
          </Box>
          <Section title="$XX.XX Target Hourly Rate" />
        </Box>
      </Box>
    </Box>
  );
}
