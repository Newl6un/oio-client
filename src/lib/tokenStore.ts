import { STORAGE_KEYS } from '@/utils/constants'

let accessToken: string | null = null

export function getAccessToken(): string | null {
  if (accessToken) return accessToken
  const stored = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN)
  if (stored) {
    accessToken = stored
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN)
  }
  return accessToken
}

export function setAccessToken(token: string | null): void {
  accessToken = token
}

export function getRefreshToken(): string | null {
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)
}

export function setRefreshToken(token: string | null): void {
  if (token) {
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token)
  } else {
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN)
  }
}

export function clearTokens(): void {
  accessToken = null
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN)
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN)
  localStorage.removeItem(STORAGE_KEYS.TWO_FA_TOKEN)
}

export function persistAccessTokenForRefresh(): void {
  if (accessToken) {
    localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken)
  }
}
