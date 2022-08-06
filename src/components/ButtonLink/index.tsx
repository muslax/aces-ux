import { Button } from '@mantine/core';
import Link from 'next/link';

type ButtonLinkProps = {
  label: string;
  href: string;
};
export default function ButtonLink(props: ButtonLinkProps) {
  return (
    <Link href={props.href} passHref>
      <Button component="a" size="xs" variant="gradient" gradient={{ from: 'violet', to: 'blue' }}>
        {props.label}
      </Button>
    </Link>
  );
}
