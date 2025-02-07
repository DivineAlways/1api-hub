export function handleUnexpectedValue(value: any, expected: string) {
  if (typeof value !== expected) {
    console.error(`Unexpected value: ${value}. Expected type: ${expected}`);
    throw new Error(`Unexpected value: ${value}. Expected type: ${expected}`);
  }
}
