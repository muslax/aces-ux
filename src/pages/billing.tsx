import { Text } from '@mantine/core';
import UserLayout from 'components/Layout/UserLayout';
import useUser from 'lib/useUser';
import { ReactElement } from 'react';

export default function BillingPage() {
  const { user } = useUser({ redirectTo: '/login' });
  // Prevent flickering (rendering content) when accessed by unlogged user
  if (!user || !user.isLoggedIn) return <></>;
  return (
    <>
      <div>
        <Text>
          If you need multiple layouts, you can add a property getLayout to your page, allowing you
          to return a React component for the layout. This allows you to define the layout on a
          per-page basis. Since we're returning a function, we can have complex nested layouts if
          desired.
        </Text>
      </div>
    </>
  );
}

BillingPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <UserLayout type="user-layout" page="billing" title="Billing">
      {page}
    </UserLayout>
  );
};
