import React from 'react';

export interface OverrideObjectT<T> {
  component?: React.ComponentType<T>;
  props?: {};
}

export type OverrideT<T> = OverrideObjectT<T> | React.ComponentType<T>;

export function getOverrideProps<T>(override: OverrideT<T>) {
  if (override && typeof override === 'object') {
    return {
      ...override.props,
    };
  }
  return {};
}

export function getOverride(override: any): any {
  // Check if override is OverrideObjectT
  if (override && typeof override === 'object') {
    return override.component;
  }
  // Otherwise it must be a component type (function or class) or null/undefined
  return override;
}

export function getOverrides(
  override: any | undefined,
  defaultComponent: React.ComponentType<any>
): [React.ComponentType<any>, {}] {
  const component = getOverride(override) || defaultComponent;
  const props = getOverrideProps(override);
  return [component, props];
}
