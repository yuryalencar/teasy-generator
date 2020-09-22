const LOCAL_STORAGE_KEY = 'application'

export function saveContext (state) {
  const stringify = JSON.stringify(state)
  localStorage.setItem(LOCAL_STORAGE_KEY, stringify)
}

export function loadContext () {
  const stringify = localStorage.getItem(LOCAL_STORAGE_KEY)
  const state = JSON.parse(stringify)
  return state
}