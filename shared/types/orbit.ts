type ObjectValues<T> = T[keyof T];

export const ORBIT_DIRECTION = {
  Clockwise: "normal",
  CounterClockwise: "reverse",
} as const;

export type OrbitDirection = ObjectValues<typeof ORBIT_DIRECTION>;

export interface OrbitProps {
  class?: string;
  direction?: OrbitDirection;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export interface OrbitTechnology extends OrbitProps {
  slug: string,
  icon?: string
}
