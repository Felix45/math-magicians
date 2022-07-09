import renderer from 'react-test-renderer';
import Result from '../components/Result';

it('renders correctly', () => {
  const tree = renderer
    .create(<Result />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
