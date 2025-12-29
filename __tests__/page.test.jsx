import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
  it('checks default calculator output', async () => {
    render(<Page />)

    const targetHourlyRate = screen.getByLabelText("Target Hourly Rate");

    expect(targetHourlyRate).toHaveTextContent('$0');
  })
})
