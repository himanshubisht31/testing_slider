import Slider from '../Slider'

import { render, fireEvent, screen } from '@testing-library/react'

it('test for next', () => {
     render(<Slider />)
    const buttonElement =screen.getByRole('button',{name:'Next'})

    fireEvent.click(buttonElement)

    const countValue = screen.getByTestId('count')

    expect(countValue).toHaveTextContent(1)
})

it('test for previous', () => {
     render(<Slider />)
    const buttonElement =screen.getByRole('button',{name:'Next'})
    const preButtonElement = screen.getByRole('button', { name:'Previous'})

    fireEvent.click(buttonElement)
    fireEvent.click(buttonElement)
    fireEvent.click(preButtonElement)

    const countValue = screen.getByTestId('count')

    expect(countValue).toHaveTextContent(1)
})

it('test for disabled next', () => {
     render(<Slider />)
    const buttonElement =screen.getByRole('button',{name:'Next'})
  

    fireEvent.click(buttonElement)
    fireEvent.click(buttonElement)
    fireEvent.click(buttonElement)
    fireEvent.click(buttonElement)
    fireEvent.click(buttonElement)
   

    const countValue = screen.getByTestId('count')

    expect(countValue).toHaveTextContent(2)
})

it('test for disabled previous', () => {
    render(<Slider />)
   
    const preButtonElement = screen.getByRole('button', { name: 'Previous' })

   
    fireEvent.click(preButtonElement)
    fireEvent.click(preButtonElement)
    fireEvent.click(preButtonElement)
    fireEvent.click(preButtonElement)

    const countValue = screen.getByTestId('count')

    expect(countValue).toHaveTextContent(0)
})