import { usePromise } from '@your-org/core-lib/hooks';
import type { FC } from 'react';

const fetchAndAlwaysThrow = async () => {
  throw new Error(
    'Error purposely crafted for monitoring sentry (/pages/_monitor/sentry/csr-page.tsx)'
  );
};

const MonitorSentryCsrRoute: FC<{ children?: never }> = () => {
  const { error } = usePromise(fetchAndAlwaysThrow, {});
  if (error) {
    throw error;
  }
  return (
    <div>
      <h1>Unexpected error</h1>
      <p>
        If you see this message, it means that an error thrown in a static
        NextJs page wasn't caught by the global error handler
        (pages/_error.tsx). This is a bug in the application and may affect the
        ability to display error pages and log errors on Sentry. See the
        monitoring page in /pages/_monitor/sentry/csr-page.tsx.
      </p>
    </div>
  );
};

export default MonitorSentryCsrRoute;
