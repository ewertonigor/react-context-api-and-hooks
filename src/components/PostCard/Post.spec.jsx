import { render, screen } from '@testing-library/react';
import { PostCard } from './index';
import { postCardPropsMock } from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correcly', () => {
        render(<PostCard {...props} />);

        expect(screen.getByRole('img', { name: props.title})).toHaveAttribute('src', 'img/img.pnh');
        expect(screen.getByRole('heading', { name: props.title})).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});