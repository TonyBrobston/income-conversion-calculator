import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
  it('checks default calculator output', () => {
    render(<Page />)

    const annualBaseSalaryInput = screen.getByLabelText('Annual Base Salary');
    expect(annualBaseSalaryInput).toHaveValue('0');

    const matchInput = screen.getByLabelText('401k Match (%)');
    expect(matchInput).toHaveValue('0');

    const targetHourlyRate = screen.getByLabelText('Target Hourly Rate');
    expect(targetHourlyRate).toHaveTextContent('$0');
  })

  it('checks calculator output for base salary', () => {
    render(<Page />)

    const annualBaseSalaryInput = screen.getByLabelText('Annual Base Salary');
    const salary = '100000'
    fireEvent.change(annualBaseSalaryInput, {target: { value: salary}});
    expect(annualBaseSalaryInput).toHaveValue(salary);

    const targetHourlyRate = screen.getByLabelText('Target Hourly Rate');
    expect(targetHourlyRate).toHaveTextContent('$51.75');
  })

  it('checks calculator output for base salary and 401k match', () => {
    render(<Page />)

    const annualBaseSalaryInput = screen.getByLabelText('Annual Base Salary');
    const salary = '100000'
    fireEvent.change(annualBaseSalaryInput, {target: { value: salary}});
    expect(annualBaseSalaryInput).toHaveValue(salary);

    const match = '3';
    const matchInput = screen.getByLabelText('401k Match (%)');
    fireEvent.change(matchInput, {target: { value: match}});
    expect(matchInput).toHaveValue(match);

    const targetHourlyRate = screen.getByLabelText('Target Hourly Rate');
    expect(targetHourlyRate).toHaveTextContent('$53.19');
  })

  it('checks calculator output for base salary, 401k match, and annual bonus', () => {
    render(<Page />)

    const annualBaseSalaryInput = screen.getByLabelText('Annual Base Salary');
    fireEvent.change(annualBaseSalaryInput, {target: { value: '100000'}});
    expect(annualBaseSalaryInput).toHaveValue('100000');

    const matchInput = screen.getByLabelText('401k Match (%)');
    fireEvent.change(matchInput, {target: { value: '3'}});
    expect(matchInput).toHaveValue('3');

    const bonusInput = screen.getByLabelText('Annual Bonus/Commission');
    const bonus = '5000';
    fireEvent.change(bonusInput, {target: { value: bonus}});
    expect(bonusInput).toHaveValue(bonus);

    const targetHourlyRate = screen.getByLabelText('Target Hourly Rate');
    expect(targetHourlyRate).toHaveTextContent('$55.6');
  })

  it('checks calculator output for base salary and vacation days', () => {
    render(<Page />)

    const annualBaseSalaryInput = screen.getByLabelText('Annual Base Salary');
    const salary = '100000'
    fireEvent.change(annualBaseSalaryInput, {target: { value: salary}});
    expect(annualBaseSalaryInput).toHaveValue(salary);

    const vacationDaysInput = screen.getByLabelText('Vacation Days');
    const vacationDays = '15'
    fireEvent.change(vacationDaysInput, {target: { value: vacationDays}});
    expect(vacationDaysInput).toHaveValue(vacationDays);

    const targetHourlyRate = screen.getByLabelText('Target Hourly Rate');
    expect(targetHourlyRate).toHaveTextContent('$54.92');
  })

  it('checks calculator output for base salary and holidays', () => {
    render(<Page />)

    const annualBaseSalaryInput = screen.getByLabelText('Annual Base Salary');
    const salary = '100000'
    fireEvent.change(annualBaseSalaryInput, {target: { value: salary}});
    expect(annualBaseSalaryInput).toHaveValue(salary);

    const holidaysInput = screen.getByLabelText('Holidays');
    const holidays = '10'
    fireEvent.change(holidaysInput, {target: { value: holidays}});
    expect(holidaysInput).toHaveValue(holidays);

    const targetHourlyRate = screen.getByLabelText('Target Hourly Rate');
    expect(targetHourlyRate).toHaveTextContent('$53.82');
  })
})
