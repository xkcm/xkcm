export function omitNil(o: Record<PropertyKey, any>) {
  return Object.fromEntries(
    Object.entries(o).filter(([, v]) => v !== null && v !== undefined),
  );
}
