export function calculateVisibilityPercentage(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const distanceFromBottom = windowHeight - rect.bottom;

  // Calculate the visible area from the bottom of the viewport
  const visibleArea = Math.min(windowHeight, Math.max(0, distanceFromBottom));

  // Calculate the scroll percentage in the div based on the visible area from the bottom
  const scrollPercentageInDiv = (visibleArea / windowHeight) * 100;
  return scrollPercentageInDiv;
}
export function calculateValueFromPercentage(percentage, number) {
  return (number * percentage) / 100;
}
