import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('Newsletter Signup Form', () => {
  test('renders the form with name, email, and interests checkboxes', () => {
    render(<App />);
    

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/tech/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/sports/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/music/i)).toBeInTheDocument();
  });

  test('displays a success message upon form submission', () => {
    render(<App />);
    
    // Fill out the form
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByLabelText(/tech/i));
    
    // Submit the form
    fireEvent.click(screen.getByText(/submit/i));
    
    // Check for the success message
    expect(screen.getByText(/thank you, john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/you have selected/i)).toBeInTheDocument();
  });
});
