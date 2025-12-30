'use client'

import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
import Section from '../src/Section'
import Field from '../src/Field'

export default function Home() {
  const [annualBaseSalary, setAnnualBaseSalary] = useState(0);
  const [match, setMatch] = useState(0);
  const [annualBonus, setAnnualBonus] = useState(0);
  const [vacationDays, setVacationDays] = useState(0);
  const [holidays, setHolidays] = useState(0);
  const [targetHourlyRate, setTargetHourlyRate] = useState(0);
  const roundDownWithTwoDecimals = (value: number): number => Math.floor(value * 100) / 100;

  useEffect(() => {
    const matchDollarAmount = annualBaseSalary * (match / 100);
    const totalW2Value = annualBaseSalary + matchDollarAmount + annualBonus
    const employerFicaTax = annualBaseSalary * 0.0765;
    const totalTargetRevenue = totalW2Value + employerFicaTax;
    const unpaidDays = vacationDays + holidays;
    const billableHours = 2080 - (unpaidDays * 8);
    const hourlyRate = totalTargetRevenue / billableHours;
    const roundedHourlyRate = roundDownWithTwoDecimals(hourlyRate);
    setTargetHourlyRate(roundedHourlyRate);
  }, [annualBaseSalary, match, annualBonus, vacationDays, holidays]);

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
            <Section title="W2">
              <Field label="Annual Base Salary" value={annualBaseSalary} onChange={(event) => {setAnnualBaseSalary(parseInt(event.target.value))}} adornment="$" adornmentPosition="start" />
              <Field label="401k Match (%)" value={match} onChange={(event) => {setMatch(parseInt(event.target.value))}} adornment="%" adornmentPosition="end" />
              <Field label="Annual Bonus/Commission" value={annualBonus} onChange={(event) => {setAnnualBonus(parseInt(event.target.value))}} adornment="$" adornmentPosition="start" />
              <Field label="Vacation Days" value={vacationDays} onChange={(event) => {setVacationDays(parseInt(event.target.value))}} />
              <Field label="Holidays" value={holidays} onChange={(event) => {setHolidays(parseInt(event.target.value))}} />
            </Section>
            <Section title="Benefits & Perks">(TBD)</Section>
          </Box>
          <Section title="Target Hourly Rate">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Typography aria-label="Target Hourly Rate" variant="h3">
                ${targetHourlyRate}
              </Typography>
            </Box>
          </Section>
        </Box>
      </Box>
    </Box>
  );
}
