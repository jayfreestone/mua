import * as R from 'ramda';
import { branch, renderComponent, compose } from 'recompose';

/**
 * Does query have an error?
 */
const hasError = name => R.or(
  // General Apollo query error
  R.path([name, 'error']),
  // Network error
  R.pathEq([name, 'networkStatus'], 8),
);

/**
 * Are we loading data?
 */
const isLoading = name => R.or(
  // Initial fetch
  R.pathEq([name, 'networkStatus'], 1),
  // Refetch
  R.pathEq([name, 'networkStatus'], 4),
);

/**
 * Handles gql query states by rendering different components based on 
 * load/error status.
 * @link https://www.okgrow.com/posts/loading-patterns-in-apollo-client
 */
const withLoadingState = ({
  name = 'data',
  // Component to render if loading (e.g skeleton)
  renderLoading,
  // Component to render if the query has a error
  renderError,
}) => compose(
  branch(
    isLoading(name),
    renderComponent(renderLoading),
  ),
  branch(
    hasError(name),
    renderComponent(renderError),
  ),
);

export default withLoadingState;
