export const requests = async <T>(request: RequestInfo): Promise<T> => {
  try {
    const response = await fetch(request);
    const body = await response.json();
    return body;
  } catch (e) {
    throw new Error(e);
  }
};
