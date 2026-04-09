import { Suspense } from 'react'
import { ProductsClientPage } from './products-client-page'

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ProductsClientPage />
    </Suspense>
  )
}
