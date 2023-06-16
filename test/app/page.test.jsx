import { render, fireEvent } from '@testing-library/react';
import Home from '../../src/app/page';

describe('Home_function', () => {

  // Tests that the loader is displayed while movies are being fetched
  it('test_behaviour_loader_displayed', async () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  // Tests that movie cards display their details when selected
  it('test_behaviour_movie_cards_display_details', async () => {
    const { getByAltText, getByText } = render(<Home />);
    const movieCard = getByAltText('Movie Card');
    fireEvent.click(movieCard);
    expect(getByText('Title:')).toBeInTheDocument();
  });

  // Tests edge case where no movies are fetched
  it('test_edge_case_no_movies_fetched', async () => {
    useFetchMovies.mockReturnValueOnce({ isLoading: false, movies: undefined });
    const { getByText } = render(<Home />);
    expect(getByText('Upcoming movies')).toBeInTheDocument();
    expect(getByText('No movies found.')).toBeInTheDocument();
  });

  // Tests edge case where selected movie is deselected by clicking on it again
  it('test_edge_case_selected_movie_deselected', async () => {
    const { getByAltText } = render(<Home />);
    const movieCard = getByAltText('Movie Card');
    fireEvent.click(movieCard);
    fireEvent.click(movieCard);
    expect(movieCard).not.toHaveClass('blur-[2px]');
  });

  // Tests edge case where user clicks on multiple movie cards and they all become selected
  it('test_edge_case_multiple_movie_cards_selected', async () => {
    const { getAllByAltText } = render(<Home />);
    const movieCards = getAllByAltText('Movie Card');
    fireEvent.click(movieCards[0]);
    fireEvent.click(movieCards[1]);
    expect(movieCards[0]).toHaveClass('blur-[2px]');
    expect(movieCards[1]).toHaveClass('blur-[2px]');
  });

  // Tests that movie cards display a default image if primary image is missing
  it('test_behaviour_default_image_displayed', async () => {
    const { getByAltText } = render(<Home />);
    const movieCard = getByAltText('Movie Card');
    expect(movieCard).toHaveAttribute('src', '/no_imagen.jpg');
  });
});