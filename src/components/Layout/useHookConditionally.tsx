// use-hook-conditionally.tsx
// https://dev.to/lexlohr/conditional-hooks-1fpj
import { ReactNode, useCallback, useRef } from 'react';

export interface ConditionalHookProps<P, T> {
  /**
   * Hook that will only be called if condition is `true`.
   * Arguments for the hook can be added in props as an array.
   * The output of the hook will be in the `output.current`
   * property of the object returned by `useHookConditionally`
   */
  // @ts-ignore
  hook: (...props: P) => T;
  /**
   * Optional array with arguments for the hook.
   *
   * i.e. if you want to call `useMyHook('a', 'b')`, you need
   * to use `props: ['a', 'b']`.
   */
  props?: P;
  condition: boolean;
  /**
   * In order to render a hook conditionally, you need to
   * render the content of the `children` return value;
   * if you want, you can supply preexisting children that
   * will then be wrapped in an invisible component
   */
  children: React.ReactNode;
}

// @ts-ignore
export const useHookConditionally: React.FC<ConditionalHookProps> = ({
  hook,
  condition,
  children,
  props = [],
}: {
  hook: any;
  condition: boolean;
  children: ReactNode;
  props: any;
}) => {
  const output = useRef();

  const HookComponent = useCallback(
    ({ children, props }: { children: ReactNode; props: [] }) => {
      output.current = hook(...props);
      return <>{children}</>;
    },
    [hook]
  );

  return {
    /// ts-ignore
    children: condition ? <HookComponent props={props}>{children}</HookComponent> : <>{children}</>,
    output,
  };
};
