const range = (to: number) => [...(Array(to).keys() as unknown as number[])].map(i => i + 1)

export default range