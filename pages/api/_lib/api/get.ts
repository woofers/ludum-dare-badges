
const get = async (url: string) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
      if (data) return data
      throw data
  } catch (e) {
    throw e
  }
}

export default get