type Props = {
  params: Promise<{ sku: string }>
}

const Item = async ({ params }: Props) => {
  const { sku } = await params
  
  // Use the sku here
  return <div>Item SKU: {sku}</div>
}

export default Item