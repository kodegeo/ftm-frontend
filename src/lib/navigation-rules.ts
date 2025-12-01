// src/lib/navigation-rules.ts

import navigationRules from "../data/navigation-rules.json"

/**
 * A single navigation rule item from navigation-rules.json.
 */
export interface NavigationRule {
  id: string
  label: string
  path: string
  visible: boolean
  stores: string[]            // ["global"] or ["hill-district", "east-liberty"]
  requiresAuth: boolean
  featureFlag: string | null  // e.g. "myCommunityEnabled"
  releaseDate: string | null  // ISO date string
  roles: string[]             // ["public", "user", "admin"]
}

/**
 * Navigation rules container.
 */
export interface NavigationRulesData {
  navigation: NavigationRule[]
}

/**
 * The visibility context passed by the app to determine which nav items to show.
 */
export interface VisibilityContext {
  currentStore?: string              // e.g. "hill-district"
  isAuthenticated?: boolean          // true / false
  userRole?: string                  // "public", "user", "admin"
  featureFlags?: Record<string, boolean>  // { myCommunityEnabled: true }
}

/**
 * Determines if a NavigationRule should be shown given a VisibilityContext.
 */
export function isNavigationItemVisible(
  rule: NavigationRule,
  context: VisibilityContext = {}
): boolean {
  const {
    currentStore = "global",
    isAuthenticated = false,
    userRole = "public",
    featureFlags = {},
  } = context

  // 1. Base visibility
  if (!rule.visible) return false

  // 2. Store visibility
  // If rule is NOT global and NOT matching currentStore, hide it.
  if (!rule.stores.includes("global") && !rule.stores.includes(currentStore)) {
    return false
  }

  // 3. Authentication requirement
  if (rule.requiresAuth && !isAuthenticated) {
    return false
  }

  // 4. Feature flag requirement
  if (rule.featureFlag) {
    // Must be explicitly true to show
    if (!featureFlags[rule.featureFlag]) {
      return false
    }
  }

  // 5. Release date (future releases hidden until date reached)
  if (rule.releaseDate) {
    const releaseDate = new Date(rule.releaseDate)
    const now = new Date()
    if (releaseDate > now) {
      return false
    }
  }

  // 6. Role permission
  if (!rule.roles.includes(userRole)) {
    return false
  }

  return true
}

/**
 * Filters navigation rules into only visible items.
 */
export function getVisibleNavigationItems(
  context: VisibilityContext = {}
): NavigationRule[] {
  const rules = (navigationRules as NavigationRulesData).navigation
  return rules.filter((rule) => isNavigationItemVisible(rule, context))
}

export { navigationRules }
