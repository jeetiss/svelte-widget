import { render, fireEvent } from '@testing-library/svelte'
import Button from './Button.svelte'

describe('Button', () => {
  test('shows proper text when rendered', () => {
    const { getByText } = render(Button, { text: 'hello world' })
  
    expect(getByText('hello world')).toBeInTheDocument()
  })
  
  // Note: This is as an async test as we are using `fireEvent`
  test('handle click events when rendered', async () => {
    const callback = jest.fn()
    const { getByText } = render(Button, { text: 'Button', event: callback })
    const button = getByText('Button')
  
    // Using await when firing events is unique to the svelte testing library because
    // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
    await fireEvent.click(button)
  
    expect(callback).toHaveBeenCalled()
  })
})
