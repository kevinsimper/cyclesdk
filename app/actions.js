export const SORT_TRUSTPILOT = 'SORT_TRUSTPILOT'
export function sortTrustpilot(order) {
  return {
    type: SORT_TRUSTPILOT,
    order
  }
}

export const SORT_LEVEL = 'SORT_LEVEL'
export function sortLevel(order) {
  return {
    type: SORT_LEVEL,
    order
  }
}
