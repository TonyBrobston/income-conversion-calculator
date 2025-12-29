'use client'

import Image from "next/image";
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
import Section from '../src/Section'
import Field from '../src/Field'

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
            <Section title="Current W2 Specs">
              <Field label="Annual Base Salary" adornment="$" adornmentPosition="start" />
              <Field label="Annual Bonus/Commission" adornment="$" adornmentPosition="start" />
              <Field label="401k Match (%)" adornment="%" adornmentPosition="end" />
            </Section>
            <Section title="Benefits & Perks">(TBD)</Section>
          </Box>
          <Section title="Target Hourly Rate">
          </Section>
        </Box>
      </Box>
    </Box>
  );
}
