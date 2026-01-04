'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import { Popover, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Section from '../src/Section'
import Field from '../src/Field'
import { removeNonNumeric } from '../src/numbers';

export default function Home() {
  const [annualBaseSalary, setAnnualBaseSalary] = useState(0);
  const [match, setMatch] = useState(0);
  const [annualBonus, setAnnualBonus] = useState(0);
  const [vacationDays, setVacationDays] = useState(0);
  const [holidays, setHolidays] = useState(0);
  const [monthlyPremium, setMonthlyPremium] = useState(0);
  const [monthlyEmployerContribution, setMonthlyEmployerContribution] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const matchDollarAmount = annualBaseSalary * (match / 100);
  const totalW2Value = annualBaseSalary + matchDollarAmount + annualBonus
  const employerFicaTax = annualBaseSalary * 0.0765;
  const annualInsuranceCost = (monthlyPremium + monthlyEmployerContribution) * 12;
  const totalTargetRevenue = totalW2Value + employerFicaTax + annualInsuranceCost;
  const unpaidDays = vacationDays + holidays;
  const billableHours = 2080 - (unpaidDays * 8);
  const hourlyRate = totalTargetRevenue / billableHours;
  const roundDownWithTwoDecimals = (value: number): number => Math.floor(value * 100) / 100;
  const targetHourlyRate = roundDownWithTwoDecimals(hourlyRate);

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: { md: 'center'}, height: '100%', backgroundColor: '#121212' }}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Box>
            <Typography variant='h5' color='#ffffff' fontWeight='bold'>
            W2 to 1099 Converter
          </Typography>
        </Box>
        <Box sx={{display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }}}>
          <Box sx={{display: 'flex', gap: '8px', flexDirection: 'column'}}>
            <Section title='W2'>
              <Field label='Annual Base Salary' value={annualBaseSalary} onChange={(event) => {setAnnualBaseSalary(parseInt(removeNonNumeric(event.target.value)))}} adornment='$' adornmentPosition='start' />
              <Field label='401k Match (%)' value={match} onChange={(event) => {setMatch(parseInt(removeNonNumeric(event.target.value)))}} adornment='%' adornmentPosition='end' />
              <Field label='Annual Bonus/Commission' value={annualBonus} onChange={(event) => {setAnnualBonus(parseInt(removeNonNumeric(event.target.value)))}} adornment='$' adornmentPosition='start' />
              <Field label='Vacation Days' value={vacationDays} onChange={(event) => {setVacationDays(parseInt(removeNonNumeric(event.target.value)))}} />
              <Field label='Holidays' value={holidays} onChange={(event) => {setHolidays(parseInt(removeNonNumeric(event.target.value)))}} />
            </Section>
            <Section title='Benefits & Perks'>
              <Field label='Monthly Premium' value={monthlyPremium} onChange={(event) => {setMonthlyPremium(parseInt(removeNonNumeric(event.target.value)))}} adornment='$' adornmentPosition='start' />
              <Field label='Monthly Employer Contribution' value={monthlyEmployerContribution} onChange={(event) => {setMonthlyEmployerContribution(parseInt(removeNonNumeric(event.target.value)))}} adornment='$' adornmentPosition='start' />
            </Section>
          </Box>
          <Section>
            <Box>
              <Box
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                sx={{display: 'flex', alignItems: 'center', gap: '4px'}}
              >
                <Typography variant="h6" fontWeight="bold">Target Hourly Rate</Typography>
                <InfoIcon />
              </Box>
              <Popover
                id="mouse-over-popover"
                sx={{ pointerEvents: 'none' }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                onClose={handlePopoverClose}
                disableRestoreFocus
                slotProps={{
                  paper: {
                    sx: {
                      padding: '20px',
                      maxWidth: '350px',
                      backgroundColor: '#2d2d2d',
                      color: '#ffffff',
                      boxShadow: '0px 4px 20px rgba(0,0,0,0.5)',
                      border: '1px solid #444'
                    }
                  }
                }}
              >
              <Typography variant="subtitle2" sx={{ mb: 2, color: '#4fc3f7', textAlign: 'center' }}>
                CALCULATION FORMULA
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Rate =</Typography>
                <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ px: 1, textAlign: 'center' }}>
                    (Salary × 1.0765) + Bonus + Match + (Monthly Benefits × 12)
                  </Typography>
                  <Box sx={{ width: '100%', height: '1px', bgcolor: 'white', my: 0.5 }} />
                  <Typography variant="body2" sx={{ px: 1 }}>
                    2080 - (Unpaid Days × 8)
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 2, pt: 1, borderTop: '1px solid #444', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 1 }}>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>1.0765 = Employer FICA Tax</Typography>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>Benefits = EE + ER Premiums</Typography>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>2080 = Work Hours/Year</Typography>
              </Box>
              </Popover>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Typography aria-label='Target Hourly Rate' variant='h3'>
                ${targetHourlyRate.toFixed(2)}
              </Typography>
            </Box>
          </Section>
        </Box>
      </Box>
    </Box>
  );
}
