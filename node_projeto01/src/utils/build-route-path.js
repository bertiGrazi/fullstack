// /users/:id

// Regex = expressões regulares 

export function buildRoutePath(path) {
  const routeParametersRegex = /:(?<$1>[a-z0-9\-_]+)/g
  //(?<$1>[a-z0-9\-_]+)
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

  const pathRegex = new RegExp(`^${pathWithParams}`)
  
  return pathRegex
}