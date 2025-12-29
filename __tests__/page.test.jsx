import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
  it('checks default calculator output', () => {
    render(<Page />)

    const input = screen.getByLabelText('Annual Base Salary');
    expect(input).toHaveValue('0');

    const targetHourlyRate = screen.getByLabelText('Target Hourly Rate');
    expect(targetHourlyRate).toHaveTextContent('$0');
  })

  it('checks basically calculator output', () => {
    render(<Page />)

    const annualBaseSalaryInput = screen.getByLabelText('Annual Base Salary');
    fireEvent.change(annualBaseSalaryInput, {target: { value: '100000'}});
    expect(annualBaseSalaryInput).toHaveValue('100000');

    const targetHourlyRate = screen.getByLabelText('Target Hourly Rate');
    expect(targetHourlyRate).toHaveTextContent('$48.07');
  })
})
